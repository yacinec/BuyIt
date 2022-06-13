import { check_access_token } from "../middlewares";
import { Order, Tokens } from "../types";

const API_URL = `${process.env.REACT_APP_API_URL}/api/v1`;
export const getOrders = async (userId: string, tokens: Tokens) => {
  const headers = await check_access_token(tokens);
  const response = await fetch(`${API_URL}/users/${userId}/orders`, {
    method: "GET",
    headers,
    //body: JSON.stringify({ _id: userId }),
  });
  if (response.ok) {
    return await response.json();
  } else {
    throw response.statusText;
  }
};

export const createOrder = async (
  newOrder: Order,
  userId: string,
  tokens: Tokens
) => {
  const headers = await check_access_token(tokens);
  return fetch(`${API_URL}/users/${userId}/orders`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      articles: newOrder.articles,
      address: newOrder.address,
      //userId,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};
