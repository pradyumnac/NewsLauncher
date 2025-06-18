onmessage = function (e) {
  const { quotes, dbName, storeName } = e.data;

  const req = indexedDB.open(dbName, 1);

  req.onerror = () => {
    postMessage({ status: "error", error: req.error });
  };

  req.onupgradeneeded = () => {
    req.result.createObjectStore(storeName, {
      keyPath: "id",
      autoIncrement: true,
    });
  };

  req.onsuccess = () => {
    const db = req.result;
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);

    let successCount = 0;
    for (const item of quotes) {
      store.add(item);
      successCount++;
    }

    tx.oncomplete = () =>
      postMessage({ status: "success", count: successCount });
    tx.onerror = () => postMessage({ status: "error", error: tx.error });
  };
};
