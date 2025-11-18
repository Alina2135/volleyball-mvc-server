export class ArticlesView {
    renderArticlesList(container, articles) {
        container.innerHTML = "<h2>Список статей</h2>";

        articles.forEach(article => {
            const item = document.createElement("div");
            item.className = "article-card";
            item.innerHTML = `
                <h3>${article.title}</h3>
                <p><strong>Автор:</strong> ${article.author}</p>
                <p><strong>Рік:</strong> ${article.year}</p>
                <p><em>${article.content}</em></p>
                <hr>
            `;
            container.appendChild(item);
        });
    }
}
