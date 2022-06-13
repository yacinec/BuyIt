import { check_access_token } from "../middlewares";
import { Tokens } from "../types";

const API_URL = `${process.env.REACT_APP_API_URL}/api/v1/articles`;

export const getArticles = async (tokens: Tokens) => {
  const headers = await check_access_token(tokens);
  const response = await fetch(`${API_URL}`, {
    method: "GET",
    headers,
  });
  if (response.ok) {
    return await response.json();
  } else {
    throw response.statusText;
  }
};
