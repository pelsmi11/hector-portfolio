import axios from "axios";

const strapiApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_STRAPI_API}/api`,
});

export default strapiApi;
