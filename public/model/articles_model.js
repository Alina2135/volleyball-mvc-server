export class ArticlesModel {
    constructor() {
        this.apiURL = "https://volleyball-mvc-server-2.onrender.com/api/articles";
    }

    async getAllArticles() {
        try {
            const response = await fetch(this.apiURL);
            const articles = await response.json();
            return articles;
        } catch (error) {
            console.error("Помилка при завантаженні статей:", error);
            return []; // повертаємо порожній масив у разі помилки
        }
    }

    async getArticlesByAuthor(author) {
        const allArticles = await this.getAllArticles();
        return allArticles.filter(a => a.author === author);
    }
}
