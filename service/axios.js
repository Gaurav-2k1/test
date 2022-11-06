import _axios from "axios";
import { BASE_URL } from "../constants/constants";
import store from "../store";
import { logout } from "../store/authSlice";

const axios = _axios.create({ baseURL: BASE_URL });

axios.interceptors.request.use((config) => {
  const { token } = store.getState().auth;

  config.headers = !(token === "") && {
    ...config.headers,
    authorization: `Bearer ${token}`,
  };

  return config;
});

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    if (response) {
      try {
        const code = response.data.status;

        if (code === 401 || code === 403) {
          console.log("logout chala");
          store.dispatch(logout());
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
    const { response } = error;
    console.log(response);
    console.log(response.status);
    if (response) {
      try {
        const code = response.status;
        console.log(code);
        if (code === 401 || code === 403) {
          console.log("logout chala");
          store.dispatch(logout());
        }
      } catch {
        console.error("Some Error Occured");
      }
    }

    throw error;
  }
);
export default axios;
