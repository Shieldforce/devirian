import axios from "axios";

let token = null;

if (localStorage.getItem("token")) {
  token = localStorage.getItem("token");
}

const api = axios.create({
  baseURL: "http://localhost:82/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default api;
