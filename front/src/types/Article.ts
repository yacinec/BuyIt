import Brand from "./Brand";

export default class Article {
  _id: string;
  name: string;
  price: number;
  img: string;
  description: string;
  brand: Brand;

  constructor(
    _id: string,
    name: string,
    price: number,
    img: string,
    description: string,
    brand: Brand
  ) {
    this._id = _id;
    this.name = name;
    this.price = price;
    this.img = img;
    this.description = description;
    this.brand = brand;
  }
}
