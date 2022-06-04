import Article from "./Article";
import Progression from "./Progression";

class Order {
  articles: Array<Article>;
  createdAt: Date;
  modifiedAt: Date;
  progression: Progression;
  address: string;

  constructor(
    articles: Array<Article>,
    createdAt: Date,
    modifiedAt: Date,
    progression: Progression,
    address: string
  ) {
    this.articles = articles;
    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt;
    this.progression = progression;
    this.address = address;
  }
}

export default Order;
