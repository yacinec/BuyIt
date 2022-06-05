import { ArticleDto } from ".";
import { UserDto } from ".";

export class OrderDto {
  constructor(
    private articles: ArticleDto[],
    private address: string,
    private user: UserDto
  ) {}

  public get_articles(): ArticleDto[] {
    return this.articles;
  }

  public get_address(): string {
    return this.address;
  }

  public get_user(): UserDto {
    return this.user;
  }
}
