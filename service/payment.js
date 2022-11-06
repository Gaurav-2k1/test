import axios from "./axios";

export const createOrder = async ({ queryKey }) => {
  const [_, courseId, courseType, currency] = queryKey;
  const body = { courseId, courseType, currency };
  const { data } = await axios.post(`/payment`, body);

  return data;
};

export const updateStatus = async ({ identifier, password }) => {
  const body = { identifier, password };
  const { data } = await axios.post(`/auth/local/`, body);

  return data;
};
