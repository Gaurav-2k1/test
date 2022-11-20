import { stringify } from "qs";
import axios from "./axios";

export const createOrder = async ({ queryKey }) => {
  const [_, courseId, courseType, currency, couponCode] = queryKey;
  const body = { courseId, courseType, currency, couponCode };
  const { data } = await axios.post(`/payment`, body);

  return data;
};

export const updateStatus = async ({ queryKey }) => {
  const [_, id, orderJson] = queryKey;
  const body = { id, orderJson };
  const { data } = await axios.put(`/payment/update`, body);

  return data;
};

export const verifyIfOrderExists = async ({ queryKey }) => {
  const [_, course_id, course_type] = queryKey;

  const { data } = await axios.get(
    `/payment/order/verify?course_id=${course_id}&course_type=${course_type}`
  );

  return data;
};

export const validateCoupon = async ({ queryKey }) => {
  const [_, course_id, course_type, currency, coupon_code] = queryKey;

  const { data } = await axios.get(
    `/payment/coupon/validate?coupon_code=${coupon_code}&course_id=${course_id}&course_type=${course_type}&currency=${currency}`
  );

  return data;
};
