import axios from "axios";

const BASE_URL = //"http://localhost:80/api";
  "http://azbackend-env-1.eba-etciaahf.us-east-2.elasticbeanstalk.com/api";
const TOKEN = () => {
  if (localStorage.getItem("persist:root") == null) {
    return "";
  }
  if (
    JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      .currentUser !== null
  ) {
    return JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      .currentUser?.token;
  }
  return "";
};
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: TOKEN() },
});
