import { ArticleEntity } from ".";
import { UserEntity } from ".";

export type OrderArticleEntity = {
  articleRef: ArticleEntity;
  quantity: number;
};

/**
 * Corresponds to a order data structure.
 */
export type OrderEntity = {
  _id: string;
  articles: OrderArticleEntity[];
  totalPrice: number;
  createdAt: Date;
  modifiedAt: Date;
  progression: string;
  address: string;
  userRef: UserEntity;
};
