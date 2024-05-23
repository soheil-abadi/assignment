import axios from "axios";

const http1 = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 30000,
});
const http2 = axios.create({
  baseURL: "/api",
  timeout: 30000,
});

export const postLogin = (values) => {
  return http1.post("/login", values);
};
export const getHome = () => {
  return http1.get("/users?page=2");
};

export const postName = () => {
  return http2.post("/users/2");
};