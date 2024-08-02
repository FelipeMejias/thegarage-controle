import axios from "axios";

export const api = axios.create({
    baseURL: "https://thegarage-back.onrender.com"
    //baseURL: "http://localhost:5000"
  });



export const getUsuarios = async () => {
  return api.get("/usuarios");
}
