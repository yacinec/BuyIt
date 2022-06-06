import { Action } from "../actions";
import ActionType from "../action-types";
import { Brand, Cart } from "../../types";

const INITIAL_STATE = {
  carts: window.sessionStorage.getItem("carts")
    ? JSON.parse(window.sessionStorage.getItem("carts")!)
    : [
        /*{
          id: "1",
          article: {
            id: "1",
            name: "Asus laptop",
            price: 500,
            img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            description: "A beautiful computer",
            brand: Brand.ASUS,
          },
          quantity: 1,
        },
        {
          id: "2",
          article: {
            id: "2",
            name: "Macbook Air",
            price: 1000,
            img: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            description: "A beautiful computer",
            brand: Brand.APPLE,
          },
          quantity: 2,
        },
        {
          id: "3",
          article: {
            id: "3",
            name: "Lenovo laptop",
            price: 900,
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
            description: "A beautiful computer",
            brand: Brand.LENOVO,
          },
          quantity: 1,
        },
        {
          id: "4",
          article: {
            id: "4",
            name: "HP laptop",
            price: 250,
            img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1551&q=80",
            description: "A beautiful computer",
            brand: Brand.HP,
          },
          quantity: 1,
        },*/
      ],
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
    case ActionType.CLEAR:
      state = {
        carts: [],
      };
      window.sessionStorage.removeItem("carts");
      break;
  }
  return state;
};

export default cartReducer;
