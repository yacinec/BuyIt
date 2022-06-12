import { ArticleEntity } from ".";
import { UserEntity } from ".";

/**
 * Corresponds to a order data structure.
 */
export type OrderEntity = {
  _id: string;
  articlesRef: ArticleEntity[];
  createdAt: Date;
  modifiedAt: Date;
  progression: string;
  address: string;
  userRef: UserEntity;
};
