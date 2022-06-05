import { User } from "../types";

const API_URL = "localhost:8080/auth";
export const login = async (user: User) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response.json());
};
