import Article from "./Article";

class Cart {
  article: Article;
  quantity: number;

  constructor(article: Article, quantity: number) {
    this.article = article;
    this.quantity = quantity;
  }
}

export default Cart;
