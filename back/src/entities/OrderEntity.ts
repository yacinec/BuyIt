import { ArticleEntity } from ".";
import { UserEntity } from ".";

export type ArticleOrderEntity = {
  articleRef: ArticleEntity;
  amount: number;
};

/**
 * Corresponds to a order data structure.
 */
export type OrderEntity = {
  _id: string;
  articles: ArticleOrderEntity;
  totalPrice: number;
  createdAt: Date;
  modifiedAt: Date;
  progression: string;
  address: string;
  userRef: UserEntity;
};
