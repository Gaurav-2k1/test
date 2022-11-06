import axios from "./axios";

export const signUp = async ({ username, email, password }) => {
  const body = { username, email, password };
  const { data } = await axios.post(`/auth/local/register`, body);

  return data;
};

export const login = async ({ identifier, password }) => {
  const body = { identifier, password };
  const { data } = await axios.post(`/auth/local/`, body);

  return data;
};
