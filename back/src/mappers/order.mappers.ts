import { ArticleDto, OrderDto, UserDto } from "../dtos";
import { ArticleEntity, OrderEntity, UserEntity } from "../entities";

export const toOrderDto = (
  articles: ArticleDto[],
  address: string,
  user: UserDto
): OrderDto => {
  return new OrderDto(articles, address, user);
};

export const toOrderEntity = (
  _id: string,
  articles: ArticleEntity[],
  createdAt: Date,
  modifiedAt: Date,
  progression: string,
  address: string,
  user: UserEntity
): OrderEntity => {
  return {
    _id,
    articles,
    createdAt,
    modifiedAt,
    progression,
    address,
    user,
  };
};
