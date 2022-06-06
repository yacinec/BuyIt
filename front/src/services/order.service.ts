import { check_access_token } from "../middlewares";
import { Order, Tokens } from "../types";

const API_URL = "http://localhost:1234/orders";

export const getOrders = async (userId: string, tokens: Tokens) => {
  const headers = await check_access_token(tokens);
  return fetch(`${API_URL}/find-all-user`, {
    method: "POST",
    headers,
    body: JSON.stringify({ _id: userId }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};

export const createOrder = async (
  newOrder: Order,
  userId: string,
  tokens: Tokens
) => {
  const headers = await check_access_token(tokens);
  return fetch(`${API_URL}/create`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      articles: newOrder.articles,
      address: newOrder.address,
      userId,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};
