import axios from "axios";

const BASE_URL = "http://localhost:3000/api";
const TOKEN =
  "Bearer " +
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYWE0YTRhYmU1N2M2ZjVhY2YyZmIwOSIsInVzZXJuYW1lIjoiYWRtaW4iLCJhZG1pbiI6dHJ1ZSwiZW1haWwiOiJlbWFpbEBnbWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDIyLTEyLTI3VDAxOjI4OjQyLjE4OVoifSwiaWF0IjoxNjcyMzU3MjU0fQ.kkPjJE1ZPqf5hnZQWjhX-y1j1oQ5SAkPKN1vCvbTbFM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: TOKEN },
});
