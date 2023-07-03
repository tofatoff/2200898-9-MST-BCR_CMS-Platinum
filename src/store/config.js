import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    accept: "application/json",
    "Cache-Control": "max-age=86400",
  },
});
