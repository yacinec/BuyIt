export class ArticleDto {
  constructor(
    private _id: string,
    private name: string,
    private price: number,
    private img: string,
    private description: string,
    private brand: string
  ) {}

  public get__id(): string {
    return this._id;
  }

  public get_name(): string {
    return this.name;
  }

  public get_price(): number {
    return this.price;
  }

  public get_img(): string {
    return this.img;
  }

  public get_description(): string {
    return this.description;
  }

  public get_brand(): string {
    return this.brand;
  }
}
