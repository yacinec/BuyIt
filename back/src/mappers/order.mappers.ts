import { OrderDto } from "../dtos";
import { ArticleEntity, UserEntity } from "../entities";
import { toArticleDto, toUserDto } from "../mappers";

/**
 * Builds 'OrderDto' object.
 * @param _id {string}
 * @param articlesRef {ArticleEntity[]}
 * @param createdAt {Date}
 * @param modifiedAt {Date}
 * @param progression {string}
 * @param address {string}
 * @param userRef {UserEntity}
 * @returns {OrderDto}
 */
export const toOrderDto = (
  _id = "",
  articlesRef: ArticleEntity[] = [],
  createdAt = new Date(0),
  modifiedAt = new Date(0),
  progression = "",
  address = "",
  userRef: UserEntity = { _id: "", username: "" }
): OrderDto => {
  return new OrderDto(
    _id,
    articlesRef.map((article: ArticleEntity) =>
      toArticleDto(
        article._id,
        article.name,
        article.price,
        article.img,
        article.description,
        article.brand
      )
    ),
    createdAt,
    modifiedAt,
    progression,
    address,
    toUserDto(userRef._id, userRef.username)
  );
};
