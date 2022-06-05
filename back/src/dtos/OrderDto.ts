import { ArticleDto } from ".";
import { UserDto } from ".";

export class OrderDto {
  constructor(
    private articles: ArticleDto[],
    private createdAt: Date,
    private modifiedAt: Date,
    private progression: string,
    private address: string,
    private user: UserDto
  ) {}

  public get_articles(): ArticleDto[] {
    return this.articles;
  }

  public get_createdAt(): Date {
    return this.createdAt;
  }

  public get_modifiedAt(): Date {
    return this.modifiedAt;
  }

  public get_progression(): string {
    return this.progression;
  }

  public get_address(): string {
    return this.address;
  }

  public get_user(): UserDto {
    return this.user;
  }
}
