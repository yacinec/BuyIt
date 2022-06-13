import Article from "./Article";

export default class OrderArticle {
  articleRef: Article;
  quantity: number;

  constructor(articleRef: Article, quantity: number) {
    this.articleRef = articleRef;
    this.quantity = quantity;
  }
}
