import Brand from "./Brand";

export default class Article {
  name: string;
  price: number;
  img: string;
  description: string;
  brand: Brand;

  constructor(
    name: string,
    price: number,
    img: string,
    description: string,
    brand: Brand
  ) {
    this.name = name;
    this.price = price;
    this.img = img;
    this.description = description;
    this.brand = brand;
  }
}
