# 🚀 Web Launcher - Minimalist Customizable Start Page (PWA)

**A fast, minimalist start page with Google search, dynamic bookmarks,
beautiful themes, and PWA support.**

![Web Launcher Screenshot](./img/screenshot1.png) <!-- Replace with actual screenshot path if available -->
![Web Launcher Screenshot](./img/screenshot2.png) <!-- Replace with actual screenshot path if available -->
![Web Launcher Screenshot](./img/screenshot3.png) <!-- Replace with actual screenshot path if available -->
![Web Launcher Screenshot](./img/screenshot4.png) <!-- Replace with actual screenshot path if available -->
![Web Launcher Screenshot](./img/screenshot5.png) <!-- Replace with actual screenshot path if available -->
![Web Launcher Screenshot](./img/screenshot6.png) <!-- Replace with actual screenshot path if available -->

---

## ✨ Features

- 🔍 **Google Search** — Instant search built-in.
- 📚 **Dynamic Bookmarks** — Add your own links, saved via `localStorage`.
- 🎨 **Themes** — Switch between Day, Night, Sepia, Gruvbox, Tokyo Night, and Catppuccin.
- ⏰ **Real-Time Clock** — Stylish digital clock with `Orbitron` font.
- 📜 **Quote of the Day** — Fetched from ZenQuotes API.
- ⚡ **Offline Support** — Works offline via Service Worker.
- 📱 **Installable PWA** — Add to your phone or desktop like an app.
- 🌐 **Responsive Design** — Works on all screen sizes.

---

## 📦 Live Demo

> Visit: [https://pradyumnac.github.io/newslauncher/](https://pradyumnac.github.io/newslauncher/)

---

## 🚀 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/pradyumnac/newslauncher.git
cd newslauncher
```

### 2. **Run Locally**

Just open `index.html` in your browser.

```
Tip: v1.html,v2.html,v3.html are iterations. For my dev pourposes i hardlink index.html from the version I am working on.
```

Or use a local server for PWA features:

```bash
npx serve .
# or use python
python -m http.server
```

---

## 🌍 Deployment

You can deploy this project using GitHub Pages or any static file host:

### GitHub Pages

- Push the code to a public repo (e.g., `yourusername/web-launcher`)
- Go to **Settings → Pages → Source** and select the branch (`main`) and root (`/`)
- Update all absolute paths in `index.html` and `manifest.json` to be relative or match the GitHub Pages path (`/web-launcher/` if applicable)
- Example:

  ```html
  <link rel="manifest" href="manifest.json" />
  ```

  ```js
  navigator.serviceWorker.register("service-worker.js");
  ```

---

## 🧩 File Structure

```
web-launcher/
│
├── index.html             # Main HTML file
├── manifest.json          # PWA manifest
├── service-worker.js      # Offline cache logic
├── img/
│   ├── favicon.png        # App icon
│   └── screenshot.png     # Project screenshot
├── README.md              # This file
└── ...                    # Other static assets
```

---

## ⚙️ Customization Guide

### 🔗 Add Default Bookmarks

Modify the HTML inside the `<main>` section under `.bookmark-group`.

```html
<a href="https://www.reddit.com"> <i class="fa-solid fa-link"></i> Reddit </a>
```

### 🎨 Add / Edit Themes

Themes are defined as CSS variables inside `<style>`:

```css
body.theme-night {
  --bg1: #111;
  --bg2: #000;
  --color: #eee;
}
```

You can add your own by modifying the CSS and `<select>` options.

---

## 🔒 Privacy Notice

This project:

- Does not use cookies or trackers
- Uses cloudflare CDN for fontawesome icons. Its has its own set of third party cookies which may track users
- Stores user data (bookmarks, theme preferences) **only in localStorage**

---

## 📲 Progressive Web App (PWA)

This app can be:

- Installed on Android/iOS from Chrome
- Installed on desktop from any Chromium browser

**Features:**

- Offline access
- Home screen icon
- App-like full screen view ( Set to portrait mode)

---

## 🧪 Browser Compatibility

| Browser                 | Compatible                       |
| ----------------------- | -------------------------------- |
| Chrome (desktop/mobile) | ✅ Yes                           |
| Firefox                 | ✅ Yes                           |
| Edge                    | ✅ Yes                           |
| Safari (iOS/macOS)      | ⚠️ Partial (limited PWA support) |

---

## 🙌 Contributing

We welcome contributions! Here's how you can help:

- 🐞 **Report bugs** via [Issues](https://github.com/yourusername/web-launcher/issues)
- 🎨 **Suggest new themes** or styling improvements
- ✨ **Improve accessibility** and performance
- 🔧 **Refactor or optimize code**

### To contribute

```bash
git clone https://github.com/yourusername/web-launcher.git
git checkout -b feature/your-feature
# Make changes
git commit -m "Add: your feature"
git push origin feature/your-feature
# Then open a pull request
```

---

## 📜 License

[MIT License](LICENSE)

---

## 💡 Credits

- Quotes API: Quotes fetched from Chatgpt filtering through my favourite authors.
- Icons: [Font Awesome](https://fontawesome.com/)
- Inspired by original fork [K-capehart/Web-Browser-Homepage](https://github.com/k-capehart/Web-Browser-Homepage).
  V1.html is based out of that project. Current version (v3) is completely rewritten

---

## 🌟 Star This Project

If you like it, give it a ⭐ to help others discover it!
