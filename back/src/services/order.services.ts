import { OrderDto } from "../dtos";
import { OrderEntity } from "../entities";
import { ApiError } from "../errors";
import { toArticleEntity, toOrderEntity, toUserEntity } from "../mappers";
import { OrderModel } from "../models";

const create = async (orderDto: OrderDto): Promise<ApiError | OrderEntity> => {
  try {
    const order = await OrderModel.create({
      articlesRef: orderDto.get_articles(),
      address: orderDto.get_address(),
      userRef: orderDto.get_user(),
    });

    return toOrderEntity(
      order._id,
      order.articles,
      order.createdAt,
      order.modifiedAt,
      order.progression,
      order.address,
      order.user
    );
  } catch (err) {
    console.log("ici");
    return ApiError.internal("Internal Server error.");
  }
};

const findAll = async (): Promise<ApiError | OrderEntity[]> => {
  try {
    const orders = await OrderModel.find();

    return orders.map((order) =>
      toOrderEntity(
        order._id,
        order.articles,
        order.createdAt,
        order.modifiedAt,
        order.progression,
        order.address,
        order.user
      )
    );
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

const findOne = async (_id: string): Promise<ApiError | OrderEntity> => {
  try {
    const order = await OrderModel.findById(_id);

    if (!order) {
      return ApiError.notFound("Order does not exist.");
    }

    return toOrderEntity(
      order._id,
      order.articles,
      order.createdAt,
      order.modifiedAt,
      order.progression,
      order.address,
      order.user
    );
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

const update = async (
  _id: string,
  orderDto: OrderDto
): Promise<ApiError | OrderEntity> => {
  try {
    const order = await OrderModel.findById(_id);

    if (!order) {
      return ApiError.notFound("Order does not exist.");
    }

    const orderEntity = toOrderEntity(
      order._id,
      orderDto
        .get_articles()
        .map((article) => toArticleEntity(article.get__id())),
      order.createdAt,
      order.modifiedAt,
      order.progression,
      orderDto.get_address(),
      toUserEntity(orderDto.get_user().get__id())
    );

    await order.update({ _id: _id }, orderEntity);

    return orderEntity;
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

const remove = async (_id: string): Promise<ApiError | OrderEntity> => {
  try {
    const order = await OrderModel.findById(_id);

    if (!order) {
      return ApiError.notFound("Order does not exist.");
    }

    await order.remove();

    return toOrderEntity(
      order._id,
      order.articles,
      order.createdAt,
      order.modifiedAt,
      order.progression,
      order.address,
      order.user
    );
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

const findAllUser = async (_id: string): Promise<ApiError | OrderEntity[]> => {
  try {
    const orders: OrderEntity[] = await OrderModel.find({
      userRef: _id,
    }).select("-__v");

    return orders;
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

export default { create, findAll, findOne, update, remove, findAllUser };
