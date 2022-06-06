import { Action } from "../actions";
import ActionType from "../action-types";
import { Brand, Order, Progression } from "../../types";

const INITIAL_STATE = {
  orders: Array<Order>(),
  /*{
      id: "1",
      articles: [
        {
          id: "1",
          name: "Asus laptop",
          price: 500,
          img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
          description: "A beautiful computer",
          branda: Brand.ASUS,
        },
      ],
      createdAt: new Date().toString(),
      modifiedAt: new Date().toString(),
      progression: Progression.PREPAR,
      address: "426 Amsterdam Ave, New York, NY 10024, United State",
    },
    {
      id: "2",
      articles: [
        {
          id: "2",
          name: "Macbook Air",
          price: 1000,
          img: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          description: "A beautiful computer",
          brand: Brand.APPLE,
        },
        {
          id: "3",
          name: "Lenovo Laptopt",
          price: 900,
          img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
          description: "A beautiful computer",
          brand: Brand.LENOVO,
        },
      ],
      createdAt: new Date().toString(),
      modifiedAt: new Date().toString(),
      progression: Progression.ONROAD,
      address: "426 Amsterdam Ave, New York, NY 10024, United State",
    },
    {
      id: "3",
      articles: [
        {
          id: "4",
          name: "HP laptop",
          price: 200,
          img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1551&q=80",
          description: "A beautiful computer",
          brand: Brand.HP,
        },
      ],
      createdAt: new Date().toString(),
      modifiedAt: new Date().toString(),
      progression: Progression.ARRIVE,
      address: "426 Amsterdam Ave, New York, NY 10024, United State",
    },*/
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
