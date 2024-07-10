import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000"
});



export const getUsuarios = async () => {
  return api.get("/usuarios");
}
