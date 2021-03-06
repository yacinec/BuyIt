import { Article, Cart, Order, Tokens } from "../../types";
import ActionType from "../action-types";

/**
 *
 * AUTH ACTIONS
 */
export const login = (uid: number, tokens: Tokens) => {
  return {
    type: ActionType.LOGIN,
    payload: { uid, ...tokens },
  };
};

export const logout = () => {
  return {
    type: ActionType.LOGOUT,
  };
};

export const refresh = (tokens: Tokens) => {
  return {
    type: ActionType.LOGOUT,
    payload: tokens,
  };
};

/**
 *
 * CART ACTIONS
 */
export const increase_article_cart = (newCart: Cart) => {
  return {
    type: ActionType.INCREASE_ARTICLE_CART,
    payload: newCart,
  };
};

export const remove_article_cart = (cart: Cart) => {
  return {
    type: ActionType.REMOVE_ARTICLE_CART,
    payload: cart,
  };
};

export const update_article_cart = (updatedCart: Cart) => {
  return {
    type: ActionType.UPDATE_ARTICLE_CART,
    payload: updatedCart,
  };
};

export const add_article_cart = (article: Article) => {
  return {
    type: ActionType.ADD_ARTICLE_CART,
    payload: article,
  };
};

export const clear_cart = () => {
  return {
    type: ActionType.CLEAR_CART,
  };
};

/**
 *
 * ARTICLE ACTIONS
 */

export const get_all_articles = (allArticles: Array<Article>) => {
  return {
    type: ActionType.GET_ALL_ARTICLES,
    payload: allArticles,
  };
};

/**
 *
 * ORDER ACTIONS
 */

export const get_all_orders = (orders: Array<Order>) => {
  return {
    type: ActionType.GET_ALL_ORDERS,
    payload: orders,
  };
};
