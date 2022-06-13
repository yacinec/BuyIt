import { Tokens, User } from "../types";

const API_URL = `${process.env.REACT_APP_API_URL}/auth`;
export const auth_login = async (user: User) => {
  const response = await fetch(`${API_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(user),
  });

  if (response.ok) {
    return await response.json();
  } else {
    throw response.statusText;
  }
};

export const auth_register = async (user: User) => {
  console.log(API_URL);

  const response = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(user),
  });
  if (response.ok) {
    return await response.json();
  } else {
    throw response.statusText;
  }
};

export const auth_refresh = async (tokens: Tokens) => {
  const response = await fetch(`${API_URL}/token`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokens.refreshToken}`,
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  if (response.ok) {
    return await response.json();
  } else {
    throw response.statusText;
  }
};
