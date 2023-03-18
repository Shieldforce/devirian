import axios from "axios";

let token = null;

if (localStorage.getItem("token")) {
  token = localStorage.getItem("token");
}

const api = axios.create({
  baseURL: "https://api.devirian.com.br/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "*",
    Authorization: `Bearer ${token}`,
  },
});

export default api;
