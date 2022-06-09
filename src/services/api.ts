import axios from "axios";

export const api = axios.create({
  baseURL: "https://sports.api.decathlon.com",
});
