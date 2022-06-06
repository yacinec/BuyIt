import { check_access_token } from "../middlewares";
import { Tokens } from "../types";

const API_URL = "http://localhost:1234/articles";

export const getArticles = async (tokens: Tokens) => {
  const headers = await check_access_token(tokens);

  return fetch(`${API_URL}/find-all`, {
    method: "GET",
    headers,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
};
