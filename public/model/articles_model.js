export class ArticlesModel {
    constructor() {
        this.articles = [
            { id: 1, title: "Вступ до MVC", author: "Бірюк Аліна", year: 2025,
              content: "Ця стаття пояснює основи архітектури MVC та її застосування у веб-розробці." },
            { id: 2, title: "Основи JavaScript", author: "Петренко Ігор", year: 2024,
              content: "Основні концепції JavaScript, включаючи змінні, функції та роботу з DOM." },
            { id: 3, title: "Frontend у 2025 році", author: "Бірюк Аліна", year: 2025,
              content: "Огляд тенденцій у фронтенд розробці, нові технології та інструменти." }
        ];
    }

    getAllArticles() {
        return this.articles;
    }

    getArticlesByAuthor(author) {
        return this.articles.filter(a => a.author === author);
    }
}
