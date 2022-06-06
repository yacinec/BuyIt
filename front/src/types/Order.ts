import Article from "./Article";
import Progression from "./Progression";

class Order {
  _id: string;
  articles: Array<Article>;
  createdAt: Date;
  modifiedAt: Date;
  progression: Progression;
  address: string;

  constructor(
    articles: Array<Article>,
    address: string,
    _id: string = "",
    createdAt: Date = new Date(),
    modifiedAt: Date = new Date(),
    progression: Progression = Progression.PREPAR
  ) {
    this._id = _id;
    this.articles = articles;
    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt;
    this.progression = progression;
    this.address = address;
  }
}

export default Order;
