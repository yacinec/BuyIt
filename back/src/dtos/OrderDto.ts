import { ArticleDto } from ".";
import { UserDto } from ".";

export class OrderDto {
  constructor(
    private _id: string,
    private articlesRef: ArticleDto[],
    private createdAt: Date,
    private modifiedAt: Date,
    private progression: string,
    private address: string,
    private userRef: UserDto
  ) {}

  public get__id() {
    return this._id;
  }

  public get_articlesRef() {
    return this.articlesRef;
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
