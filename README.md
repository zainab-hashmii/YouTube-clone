# YouTube Mini (React + Vite)

A responsive YouTube-style web app built with **React**, **Vite**, **Material UI**, **React Router**, and **Axios**.  
Browse categories, view video lists, open **video details**, and see **channel pages** (with circular avatars). Includes a tiny Axios helper with in-memory caching and optional retry for HTTP 429.

> Replace screenshots/author as you like before publishing.

---

## ✨ Features

- Category feed (e.g., **New**, **JS Mastery**, **Coding**, **ReactJS** …)
- Responsive grid of **Video Cards** (thumbnail, title, channel)
- **Video Details** page
- **Channel** page with circular avatar + stats
- **Global Search** (`/search/:term`)
- **MUI** components/layout (`Box`, `Stack`, Icons)
- Axios wrapper with **in-memory cache** + optional **429 backoff**

---

## 🧱 Tech

- React 18 + Vite
- React Router v6
- Material UI (+ icons)
- Axios
- YouTube Data API v3 **(recommended)** or RapidAPI **youtube-v31** *(alternative)*

---

## 🚀 Quick Start

```bash
# 1) Install deps
npm install

# 2) Create and fill environment variables
cp .env.example .env   # or create .env yourself

# 3) Run dev server
npm run dev
# open the printed URL (usually http://localhost:3000)

# 4) Build & preview (optional)
npm run build
npm run preview
