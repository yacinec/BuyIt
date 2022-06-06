const API_URL = "http://localhost:1234/articles";

export const getArticles = async (accessToken: string) => {
  return fetch(`${API_URL}/find-all`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
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
