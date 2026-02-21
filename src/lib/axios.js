import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://qtify-backend.labs.crio.do",
});