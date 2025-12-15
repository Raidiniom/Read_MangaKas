# 📚 Read_MangaKas

Read_MangaKas is a **self-developed manga reading web application** built with a modern full‑stack setup. It features a **React + Vite frontend** and a **Bun + Elysia backend**, designed to display and browse manga content through a clean and responsive UI.

This project is intended for **learning, portfolio, and academic purposes**, showcasing modern JavaScript tooling and frontend–backend separation.

---

## 🚀 Features

* 📖 Manga listing with cover images
* 🔍 Search bar for manga titles
* 🧩 Reusable React components (cards, header, search)
* ⚡ Fast development using Vite
* 🧠 Lightweight backend using Bun + Elysia
* 🎨 Styled UI using CSS and Styled Components

---

## 🛠 Tech Stack

### Frontend

* **React 18**
* **Vite**
* **React Router DOM**
* **Styled Components**
* **CSS**

### Backend

* **Bun runtime**
* **Elysia framework**
* **TypeScript**

---

## 📂 Project Structure

```
Read_MangaKas/
│
├── frontend/              # React + Vite frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Pages (e.g., Landing page)
│   │   ├── styles/        # CSS files
│   │   └── main.jsx
│   └── package.json
│
├── app/                   # Backend service
│   ├── src/
│   │   └── index.ts       # Backend entry point
│   └── package.json
│
└── README.md
```

---

## 🖥 Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 🔧 Backend Setup

Navigate to the backend directory:

```bash
cd app
```

Install dependencies (using Bun):

```bash
bun install
```

Run the backend in development mode:

```bash
bun run dev
```

---

## 🧠 Example Page Logic

The landing page displays a grid of manga cards using reusable components:

* `MangaCard`
* `Header_part`
* `Search_bar`

Manga data is currently mocked for UI development and testing.

---

## 📌 Notes

* Backend APIs can be extended to fetch real manga data
* Authentication and database integration are not yet implemented
* Project is under active development

---

## 📜 License

This project is for **educational and personal use**.

---

## 👤 Author

**Raidiniom**
GitHub: [https://github.com/Raidiniom](https://github.com/Raidiniom)

---

⭐ Feel free to fork, improve, or use this project as a learning reference.
