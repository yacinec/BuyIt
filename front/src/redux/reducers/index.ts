import articleReducer from "./articleReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";

const reducers = {
  auth: authReducer,
  carts: cartReducer,
  articles: articleReducer,
  orders: orderReducer,
};

export default reducers;
