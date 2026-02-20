import axios from "axios";

const api = axios.create({
  baseURL: "https://fakeapi.platzi.com/en/rest",
});

export default api;
