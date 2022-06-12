import { ArticleDto } from "../dtos";

/**
 * Builds a 'ArticleDto' object.
 * @param _id {string}
 * @param name {string}
 * @param price {number}
 * @param img {string}
 * @param description {string}
 * @param brand {string}
 * @returns {ArticleDto}
 */
export const toArticleDto = (
  _id = "",
  name = "",
  price = -1,
  img = "",
  description = "",
  brand = ""
): ArticleDto => {
  return new ArticleDto(_id, name, price, img, description, brand);
};
