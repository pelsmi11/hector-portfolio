import axios from "axios";

const portfolioApi = axios.create({
  baseURL: "/api",
});

export default portfolioApi;
