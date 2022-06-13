import Article from "./Article";
import OrderArticle from "./OrderArticle";
import Progression from "./Progression";

class Order {
  _id: string;
  articles: Array<OrderArticle>;
  totalPrice: number;
  createdAt: Date;
  modifiedAt: Date;
  progression: Progression;
  address: string;

  constructor(
    articles: Array<OrderArticle>,
    address: string,
    totalPrice: number = 0,
    _id: string = "",
    createdAt: Date = new Date(),
    modifiedAt: Date = new Date(),
    progression: Progression = Progression.PREPAR
  ) {
    this._id = _id;
    this.articles = articles;
    this.totalPrice = totalPrice;
    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt;
    this.progression = progression;
    this.address = address;
  }
}

export default Order;
