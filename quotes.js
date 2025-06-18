const DOMAIN = "https://pradyumnac.github.io/newslauncher/";
const QUOTES_JSON_URL = DOMAIN + "data/quotes.db.ascii.json";
const VERSION_URL = DOMAIN + "data/quotes-version.json";
const DB_NAME = "QuotesDB";
const STORE_NAME = "quotes";
const WORKER_PATH = "quotes-worker.js";

// --- Load Version from Server ---
async function fetchLatestVersion() {
  try {
    const res = await fetch(VERSION_URL);
    const json = await res.json();
    return json.version || null;
  } catch (err) {
    console.error("❌ Failed to fetch version:", err);
    return null;
  }
}

// --- Load Quotes from Server ---
async function fetchQuotesData() {
  try {
    const res = await fetch(QUOTES_JSON_URL);
    return await res.json();
  } catch (err) {
    console.error("❌ Failed to fetch quotes:", err);
    return [];
  }
}

// --- Clear IndexedDB if needed ---
function clearQuotesDB(dbName = DB_NAME, storeName = STORE_NAME) {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(dbName, 1);
    req.onerror = () => reject(req.error);
    req.onsuccess = () => {
      const tx = req.result.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const clearReq = store.clear();
      clearReq.onsuccess = () => resolve(true);
      clearReq.onerror = () => reject(clearReq.error);
    };
  });
}

// --- Initialize Storage ---
async function initQuotesStorage() {
  const latestVersion = await fetchLatestVersion();
  const storedVersion = localStorage.getItem("quotes_version");

  if (!latestVersion) throw new Error("invalid quotes version");

  if (storedVersion === latestVersion) {
    console.log("✅ Up-to-date: Quotes version matches.");
    return;
  }

  await clearQuotesDB();

  const quotes = await fetchQuotesData();
  if (!quotes.length) {
    console.error("❌ No quotes fetched.");
    return;
  }

  const worker = new Worker(WORKER_PATH);
  worker.postMessage({ quotes, dbName: DB_NAME, storeName: STORE_NAME });

  worker.onmessage = (e) => {
    const { status, count, error } = e.data;
    if (status === "success") {
      localStorage.setItem("quotes_version", latestVersion);
      console.log(`✅ ${count} quotes saved.`);
    } else {
      console.error("❌ Worker error:", error);
    }
  };
}

// --- IndexedDB Connection Helper ---
function openQuotesDB(dbName = DB_NAME, storeName = STORE_NAME) {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(dbName, 1);
    req.onerror = () => reject(req.error);
    req.onsuccess = () => {
      const db = req.result;
      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      resolve({ db, store });
    };
  });
}

// --- Get Random Quote ---
async function getRandomQuote() {
  const { store } = await openQuotesDB();
  const countReq = store.count();

  return new Promise((resolve, reject) => {
    countReq.onsuccess = () => {
      const total = countReq.result;
      const index = Math.floor(Math.random() * total);
      let cursorReq = store.openCursor();
      let i = 0;

      cursorReq.onsuccess = (e) => {
        const cursor = e.target.result;
        if (!cursor) return resolve(null);
        if (i === index) resolve(cursor.value);
        else {
          i++;
          cursor.continue();
        }
      };
      cursorReq.onerror = () => reject(cursorReq.error);
    };
    countReq.onerror = () => reject(countReq.error);
  });
}

// --- Fuzzy Search Quotes ---
async function searchQuotes(term) {
  term = term.trim().toLowerCase();
  if (!term) return [];

  const { store } = await openQuotesDB();
  const getReq = store.getAll();

  return new Promise((resolve, reject) => {
    getReq.onsuccess = () => {
      const results = getReq.result.filter(
        ({ author, quote }) =>
          author.toLowerCase().includes(term) ||
          quote.toLowerCase().includes(term),
      );
      resolve(results);
    };
    getReq.onerror = () => reject(getReq.error);
  });
}

(async function () {
  console.log("📚 Initializing quote system...");

  await initQuotesStorage();

  const quote = await getRandomQuote();
  const display = document.getElementById("quote-display");
  display.textContent = `${quote.quote} — ${quote.author}`;
})();
