import { Tokens, User } from "../types";

const API_URL = "http://localhost:1234/auth";

export const auth_login = async (user: User) => {
  return fetch(`${API_URL}/sign-in`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};

export const auth_register = async (user: User) => {
  return fetch(`${API_URL}/sign-up`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};

export const auth_refresh = async (tokens: Tokens) => {
  return fetch(`${API_URL}/refresh-token`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokens.refreshToken}`,
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};
