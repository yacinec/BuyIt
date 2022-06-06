import { Action } from "../actions";
import ActionType from "../action-types";
import { Brand, Order, Progression } from "../../types";

const INITIAL_STATE = {
  orders: Array<Order>(),
};

const orderReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL_ORDERS:
      state = {
        ...state,
        orders: [...action.payload],
      };
      break;
  }
  return state;
};

export default orderReducer;
