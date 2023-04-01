import axios from "axios";

let token = null;

if (localStorage.getItem("token")) {
  token = localStorage.getItem("token");
}
//const apiUrl = "http://localhost:82/api/";
const apiUrl = "https://api.devirian.com.br/api/";
const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "*",
    Authorization: `Bearer ${token}`,
  },
});

export default api;
