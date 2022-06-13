import { ArticleOrderDto, OrderDto, UserDto } from "../../../dtos";
import { ApiError } from "../../../errors";
import { toOrderDto, toUserDto } from "../../../mappers";
import { OrderModel, UserModel } from "../../../models";

/**
 * Returns all the existing users in the database.
 * @returns {Promise<ApiError | UserDto[]>}
 */
const findAll = async (): Promise<ApiError | UserDto[]> => {
  try {
    const users = await UserModel.find().select("_id username");

    return users.map((user) => toUserDto(user._id, user.username));
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 * Returns the user with the given id.
 * @param id {string}
 * @returns {Promise<ApiError | UserDto>}
 */
const findOne = async (id: string): Promise<ApiError | UserDto> => {
  try {
    const user = await UserModel.findById(id).select("_id username");

    if (!user) {
      return ApiError.notFound("User does not exist.");
    }

    return toUserDto(user._id, user.username);
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 * Updates and returns attributs of a given user.
 * @param id {string}
 * @param userDto {UserDto}
 * @returns {Promise<ApiError | UserDto>}
 */
const update = async (
  id: string,
  userDto: UserDto
): Promise<ApiError | UserDto> => {
  try {
    const user = await UserModel.findById(id).select("_id username").exec();

    if (!user) {
      return ApiError.notFound("User does not exist.");
    }

    user.username = userDto.get_username()
      ? userDto.get_username()
      : user.username;

    const newUser = await user.save();

    return toUserDto(newUser._id, newUser.username);
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 * Removes and returns the user with the give id from the database.
 * @param id {string}
 * @returns {Promise<ApiError | UserDto>}
 */
const remove = async (id: string): Promise<ApiError | UserDto> => {
  try {
    const user = await UserModel.findById(id).select("_id username");

    if (!user) {
      return ApiError.notFound("User does not exist.");
    }

    await user.remove();

    return toUserDto(user._id, user.username);
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

/**
 * Adds in the database and returns a new order.
 * @param orderDto {OrderDto}
 * @returns {Promise<ApiError | OrderDto[]>}
 */
const createOrder = async (
  orderDto: OrderDto
): Promise<ApiError | OrderDto> => {
  try {
    const totalPrice = orderDto
      .get_articles()
      .map(
        (article: ArticleOrderDto) =>
          article.articleRef.get_price() * article.amount
      )
      .reduce((prev: number, curr: number) => prev + curr);

    const newOrder = await OrderModel.create({
      articles: orderDto.get_articles(),
      totalPrice: totalPrice,
      address: orderDto.get_address(),
      userRef: orderDto.get_userRef().get__id(),
    });

    return toOrderDto(
      newOrder._id,
      newOrder.articles,
      newOrder.totalPrice,
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
 * Returns all the existing orders in the database with the given user id.
 * @param userId {string}
 * @returns {Promise<ApiError | OrderDto[]>}
 */
const findAllOrders = async (id: string): Promise<ApiError | OrderDto[]> => {
  try {
    const orders = await OrderModel.find({
      userRef: id,
    }).populate("articles.articleRef");

    return orders.map((order) =>
      toOrderDto(
        order._id,
        order.articles,
        order.totalPrice,
        order.createdAt,
        order.modifiedAt,
        order.progression,
        order.address,
        order.userRef
      )
    );
  } catch (err) {
    return ApiError.internal("Internal Server error.");
  }
};

export default { findAll, findOne, update, remove, createOrder, findAllOrders };
