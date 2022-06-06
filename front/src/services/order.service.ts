import { Order } from "../types";

const API_URL = "http://localhost:1234/orders";

export const getOrders = async (userId: string, accessToken: string) => {
  return fetch(`${API_URL}/find-all-user`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
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
  accessToken: string
) => {
  return fetch(`${API_URL}/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
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
