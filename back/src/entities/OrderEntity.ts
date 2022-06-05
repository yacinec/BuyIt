import { ArticleEntity } from ".";
import { UserEntity } from ".";

/**
 * Corresponds to order structure.
 */
export type OrderEntity = {
  _id: string;
  articles: ArticleEntity[];
  createdAt: Date;
  modifiedAt: Date;
  progression: string;
  address: string;
  user: UserEntity;
};
