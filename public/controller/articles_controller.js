import { ArticlesModel } from "../model/articles_model.js";
import { ArticlesView } from "../view/articles_view.js";

export class ArticlesController {
    constructor() {
        this.model = new ArticlesModel();
        this.view = new ArticlesView();
    }

    init() {
        const container = document.getElementById("content");
        const allArticles = this.model.getAllArticles();
        this.view.renderArticlesList(container, allArticles);
    }
}
