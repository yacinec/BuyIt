import { OrderDto } from "../dtos";
import { ArticleOrderEntity, UserEntity } from "../entities";
import { toArticleDto, toUserDto } from "../mappers";

/**
 * Builds 'OrderDto' object.
 * @param _id {string}
 * @param articles {ArticleOrderEntity[]}
 * @param totalPrice {number}
 * @param createdAt {Date}
 * @param modifiedAt {Date}
 * @param progression {string}
 * @param address {string}
 * @param userRef {UserEntity}
 * @returns {OrderDto}
 */
export const toOrderDto = (
  _id = "",
  articles: ArticleOrderEntity[] = [],
  totalPrice = 0,
  createdAt = new Date(0),
  modifiedAt = new Date(0),
  progression = "",
  address = "",
  userRef: UserEntity = { _id: "", username: "" }
): OrderDto => {
  return new OrderDto(
    _id,
    articles.map((article: ArticleOrderEntity) => {
      return {
        articleRef: toArticleDto(
          article.articleRef._id,
          article.articleRef.name,
          article.articleRef.price,
          article.articleRef.img,
          article.articleRef.description,
          article.articleRef.brand
        ),
        amount: article.amount,
      };
    }),
    totalPrice,
    createdAt,
    modifiedAt,
    progression,
    address,
    toUserDto(userRef._id, userRef.username)
  );
};
