import jwt from "jwt-decode";
import moment from "moment";
import { Tokens } from "../types";

export const check_access_token = async (tokens: Tokens) => {
  const token: any = jwt(tokens.accessToken);

  const exp = new Date(token.exp * 1000);
  const currentDate = new Date();
  const expired = exp < currentDate;
  if (!expired) {
    return {
      Authorization: `Bearer ${tokens.accessToken}`,
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
  }

  let response: any = await fetch("http://localhost:1234/auth/refresh-token", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(tokens.refreshToken),
  });

  response = response.json();
  console.log(response);
  window.sessionStorage.setItem("accessToken", response.accessToken);

  return {
    Authorization: `Bearer ${response.accessToken}`,
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
};
