import { ArticleDto } from "../dtos";
import { ArticleEntity } from "../entities";

export const toArticleDto = (
  _id: string,
  name = "",
  price = -1,
  img = "",
  description = "",
  brand = ""
): ArticleDto => {
  return new ArticleDto(_id, name, price, img, description, brand);
};

export const toArticleDetailDto = (
  name: string,
  price: number,
  img: string,
  description: string,
  brand: string,
  _id = ""
): ArticleDto => {
  return new ArticleDto(_id, name, price, img, description, brand);
};

export const toArticleEntity = (
  _id: string,
  name = "",
  price = -1,
  img = "",
  description = "",
  brand = ""
): ArticleEntity => {
  return {
    _id: _id,
    name: name,
    price: price,
    img: img,
    description: description,
    brand: brand,
  };
};
