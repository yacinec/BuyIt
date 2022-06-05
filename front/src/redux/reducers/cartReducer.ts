import { Action } from "../actions";
import ActionType from "../action-types";

const INITIAL_STATE = {
  carts: Array<any>(),
};

const cartReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.payload) {
    case ActionType.ADD_ARTICLE:
      state = {
        ...state,
        carts: [...state.carts, action.payload],
      };
      break;
    case ActionType.REMOVE_ARTICLE:
      state = {
        ...state,
        carts: state.carts.filter((cart) => {
          return cart.id !== action.payload.id;
        }),
      };
      break;
    case ActionType.UPDATE_ARTICLE:
      state = {
        ...state,
        carts: state.carts.map((cart) => {
          if (cart.id === action.payload.id) {
            return action.payload;
          }
          return cart;
        }),
      };
      break;
  }
  return state;
};

export default cartReducer;
