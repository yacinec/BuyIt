import { Article, Order } from "../../types";
import ActionType from "../action-types";

interface AuthAction {
  type: ActionType.LOGIN | ActionType.LOGOUT | ActionType.REFRESH;
  payload?: any;
}

interface CartAction {
  type:
    | ActionType.INCREASE_ARTICLE_CART
    | ActionType.REMOVE_ARTICLE_CART
    | ActionType.UPDATE_ARTICLE_CART
    | ActionType.ADD_ARTICLE_CART
    | ActionType.CLEAR;
  payload?: any;
}

interface ArticleAction {
  type: ActionType.GET_ALL_ARTICLES;
  payload: Array<Article>;
}

interface OrderAction {
  type: ActionType.GET_ALL_ORDERS;
  payload: Array<Order>;
}

export type Action = CartAction | AuthAction | ArticleAction | OrderAction;
