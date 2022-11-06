import _axios from "axios";
import { BASE_URL } from "../constants/constants";
import store from "../store";
import { logout } from "../store/authSlice";

const axios = _axios.create({ baseURL: BASE_URL });

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    if (response) {
      try {
        const code = response.data.code;
        if (code === 401 || code === 403) {
          //   store.dispatch(logout());
        }
        if (code === 402) {
          toast.error("You Don't Have Permission to Access this");
        }
      } catch {
        console.error("Some Error Occured");
      }
    }
    return response;
  },
  (error) => {
    console.log(error.response);
    const { response } = error;

    if (response) {
      try {
        toast.error(response.data.error.message);
        store.dispatch(logout());
      } catch {
        console.error("Some Error Occured");
      }
    }

    return response;
  }
);
export default axios;
