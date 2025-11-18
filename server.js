const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const articles = [
    { id: 1, title: "Вступ до MVC", author: "Бірюк Аліна", year: 2025 },
    { id: 2, title: "Основи JavaScript", author: "Петренко Ігор", year: 2024 },
    { id: 3, title: "Frontend у 2025 році", author: "Бірюк Аліна", year: 2025 }
];

app.get("/api/articles", (req, res) => {
    res.json(articles);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
