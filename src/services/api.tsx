import axios from "axios";

const api = axios.create({
  baseURL: "http://10.48.7.254:3333",
});

export default api;
