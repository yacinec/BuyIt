import { OrderDto } from "../../../dtos";
import { ApiError } from "../../../errors";
import { toOrderDto } from "../../../mappers";
import { OrderModel } from "../../../models";

/**
 * Adds in the database and returns a new order.
 * @param orderDto {OrderDto}
 * @returns {Promise<ApiError | OrderDto[]>}
 */
const create = async (orderDto: OrderDto): Promise<ApiError | OrderDto> => {
  try {
    const newOrder = await OrderModel.create({
      articlesRef: orderDto
        .get_articlesRef()
        .map((article) => article.get__id()),
      address: orderDto.get_address(),
      userRef: orderDto.get_userRef().get__id(),
    });

    return toOrderDto(
      newOrder._id,
      newOrder.articlesRef,
      newOrder.createdAt,
      newOrder.modifiedAt,
      newOrder.progression,
      newOrder.address,
      newOrder.userRef
    );
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 * Returns the article with the given id.
 * @param id {string}
 * @returns {Promise<ApiError | OrderDto>}
 */
const findOne = async (id: string): Promise<ApiError | OrderDto> => {
  try {
    const order = await OrderModel.findById(id).populate("articlesRef");

    if (!order) {
      return ApiError.notFound("Order does not exist.");
    }

    return toOrderDto(
      order._id,
      order.articlesRef,
      order.createdAt,
      order.modifiedAt,
      order.progression,
      order.address,
      order.userRef
    );
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 * Updates and returns attributs of a given order.
 * @param orderDto {OrderDto}
 * @returns {Promise<ApiError | OrderDto>}
 */
const update = async (orderDto: OrderDto): Promise<ApiError | OrderDto> => {
  try {
    const order = await OrderModel.findById(orderDto.get__id());

    if (!order) {
      return ApiError.notFound("Order does not exist.");
    }

    order.progression = orderDto.get_progression()
      ? orderDto.get_progression()
      : order.progression;
    order.address = orderDto.get_address()
      ? orderDto.get_address()
      : order.address;

    const newOrder = await order.save();

    return toOrderDto(
      newOrder._id,
      newOrder.articlesRef,
      newOrder.createdAt,
      newOrder.modifiedAt,
      newOrder.progression,
      newOrder.address,
      newOrder.userRef
    );
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 * Removes and returns the order with the give id from the database.
 * @param id {string}
 * @returns {Promise<ApiError | OrderDto>}
 */
const remove = async (id: string): Promise<ApiError | OrderDto> => {
  try {
    const order = await OrderModel.findById(id);

    if (!order) {
      return ApiError.notFound("Order does not exist.");
    }

    await order.remove();

    return toOrderDto(
      order._id,
      order.articlesRef,
      order.createdAt,
      order.modifiedAt,
      order.progression,
      order.address,
      order.userRef
    );
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

export default { create, findOne, update, remove };
