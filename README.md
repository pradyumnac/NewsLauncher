# 🚀 Web Launcher - Minimalist Customizable Start Page (PWA)

**A fast, minimalist start page with Google search, dynamic bookmarks, beautiful themes, and PWA support.**

![Web Launcher Screenshot](./img/screenshot.png) <!-- Replace with actual screenshot path if available -->

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

> Visit: [https://yourusername.github.io/web-launcher/](https://yourusername.github.io/web-launcher/)  
> *(Replace with your actual GitHub Pages URL)*

---

## 🚀 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/web-launcher.git
cd web-launcher
```

### 2. **Run Locally**

Just open `index.html` in your browser.

Or use a local server for PWA features:

```bash
npx serve .
# or use python
python -m http.server
```

---

## 🌍 Deployment

You can deploy this project using GitHub Pages or any static file host:

### GitHub Pages:

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
<a href="https://www.reddit.com">
  <i class="fa-solid fa-link"></i> Reddit
</a>
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
- Stores user data (bookmarks, theme preferences) **only in localStorage**
- Fetches quotes from [ZenQuotes.io](https://zenquotes.io) via a public CORS proxy

---

## 📲 Progressive Web App (PWA)

This app can be:
- Installed on Android/iOS from Chrome
- Installed on desktop from any Chromium browser

**Features:**
- Offline access
- Home screen icon
- App-like full screen view

---

## 🧪 Browser Compatibility

| Browser         | Compatible |
|----------------|------------|
| Chrome (desktop/mobile) | ✅ Yes |
| Firefox         | ✅ Yes |
| Edge            | ✅ Yes |
| Safari (iOS/macOS) | ⚠️ Partial (limited PWA support) |

---

## 🙌 Contributing

We welcome contributions! Here's how you can help:

- 🐞 **Report bugs** via [Issues](https://github.com/yourusername/web-launcher/issues)
- 🎨 **Suggest new themes** or styling improvements
- ✨ **Improve accessibility** and performance
- 🔧 **Refactor or optimize code**

### To contribute:

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

- Quotes API: [zenquotes.io](https://zenquotes.io)
- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts](https://fonts.google.com/)
- Inspired by minimal startpage concepts from Linux and r/startpages

---

## 🌟 Star This Project

If you like it, give it a ⭐ to help others discover it!