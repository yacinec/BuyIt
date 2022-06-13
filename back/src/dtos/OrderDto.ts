import { ArticleDto } from ".";
import { UserDto } from ".";

export interface ArticleOrderDto {
  articleRef: ArticleDto;
  amount: number;
}

export class OrderDto {
  constructor(
    private _id: string,
    private articles: ArticleOrderDto[],
    private totalPrice: number,
    private createdAt: Date,
    private modifiedAt: Date,
    private progression: string,
    private address: string,
    private userRef: UserDto
  ) {}

  public get__id() {
    return this._id;
  }

  public get_articles() {
    return this.articles;
  }

  public get_totalPrice() {
    return this.totalPrice;
  }

  public get_createdAt() {
    return this.createdAt;
  }

  public get_modifiedAt() {
    return this.modifiedAt;
  }

  public get_progression() {
    return this.progression;
  }

  public get_address() {
    return this.address;
  }

  public get_userRef() {
    return this.userRef;
  }
}
