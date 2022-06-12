export class ArticleDto {
  constructor(
    private _id: string,
    private name: string,
    private price: number,
    private img: string,
    private description: string,
    private brand: string
  ) {}

  public get__id() {
    return this._id;
  }

  public get_name() {
    return this.name;
  }

  public get_price() {
    return this.price;
  }

  public get_img() {
    return this.img;
  }

  public get_description() {
    return this.description;
  }

  public get_brand() {
    return this.brand;
  }
}
