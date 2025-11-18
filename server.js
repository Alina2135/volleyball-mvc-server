// server.js
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Роздача статичних файлів сайту
app.use(express.static(path.join(__dirname, "public")));

// Дані статей
const articles = [
  { id: 1, title: "Вступ до MVC", author: "Бірюк Аліна", year: 2025,
    content: "Ця стаття пояснює основи архітектури MVC та її застосування у веб-розробці." },
  { id: 2, title: "Основи JavaScript", author: "Петренко Ігор", year: 2024,
    content: "Основні концепції JavaScript, включаючи змінні, функції та роботу з DOM." },
  { id: 3, title: "Frontend у 2025 році", author: "Бірюк Аліна", year: 2025,
    content: "Огляд тенденцій у фронтенд розробці, нові технології та інструменти." }
];

// API для отримання статей
app.get("/api/articles", (req, res) => {
  res.json(articles);
});

// Всі інші запити віддають index.html (для SPA)
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
