// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:8000/api", // your backend base URL
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default API;


import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://where-to-africa-safari-backend.manoramaseoservice.com",
});

export default axiosInstance;
