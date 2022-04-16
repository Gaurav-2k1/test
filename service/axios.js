import _axios from "axios";
import { BASE_URL } from "../constants/constants";

const axios = _axios.create({ baseURL: BASE_URL });

export default axios;
