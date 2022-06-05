import { Cart, Tokens, User } from "../../types";
import ActionType from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const login = (user: User) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN,
      payload: user,
    });
  };
};

export const logout = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGOUT,
    });
  };
};

export const refresh = (tokens: Tokens) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGOUT,
      payload: tokens,
    });
  };
};

export const add_article = (newCart: Cart) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_ARTICLE,
      payload: newCart,
    });
  };
};

export const remove_article = (cart: Cart) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_ARTICLE,
      payload: cart,
    });
  };
};

export const update_article = (updatedCart: Cart) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_ARTICLE,
      payload: updatedCart,
    });
  };
};
