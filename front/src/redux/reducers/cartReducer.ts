import { Action } from "../actions";
import ActionType from "../action-types";
import { Brand, Cart } from "../../types";

const INITIAL_STATE = {
  carts: window.sessionStorage.getItem("carts")
    ? JSON.parse(window.sessionStorage.getItem("carts")!)
    : [],
};

const cartReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionType.INCREASE_ARTICLE_CART:
      state = {
        ...state,
        carts: [...state.carts, action.payload],
      };
      window.sessionStorage.setItem("carts", JSON.stringify(state.carts));
      break;
    case ActionType.REMOVE_ARTICLE_CART:
      state = {
        ...state,
        carts: state.carts.filter((cart: Cart) => {
          return cart.article._id !== action.payload.article._id;
        }),
      };
      window.sessionStorage.setItem("carts", JSON.stringify(state.carts));
      break;
    case ActionType.UPDATE_ARTICLE_CART:
      state = {
        ...state,
        carts: state.carts.map((cart: Cart) => {
          if (cart.article._id === action.payload.article._id) {
            return action.payload;
          }
          return cart;
        }),
      };
      window.sessionStorage.setItem("carts", JSON.stringify(state.carts));
      break;
    case ActionType.ADD_ARTICLE_CART:
      const existArticle = state.carts.find((cart: Cart) => {
        return cart.article._id === action.payload._id;
      });
      if (existArticle) {
        state = {
          ...state,
          carts: state.carts.map((cart: Cart) => {
            if (cart.article._id === action.payload._id) {
              return { ...cart, quantity: cart.quantity + 1 };
            }
            return cart;
          }),
        };
      } else {
        state = {
          ...state,
          carts: [
            ...state.carts,
            {
              id: "" + (state.carts.length + 1),
              article: action.payload,
              quantity: 1,
            },
          ],
        };
      }

      window.sessionStorage.setItem("carts", JSON.stringify(state.carts));
      break;
    case ActionType.CLEAR_CART:
      state = {
        carts: [],
      };
      window.sessionStorage.removeItem("carts");
      break;
  }
  return state;
};

export default cartReducer;
