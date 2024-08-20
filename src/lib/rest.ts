import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (value) => {
    value.headers = Object.assign(
      { "Content-Type": "application/json" },
      value.headers
    );
    return value;
  },
  (err) => {
    return err;
  }
);

export default instance;
