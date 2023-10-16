import strapiApi from "@/src/lib/Axios/StrapiApi";
import { IGetProyect } from "..";

export const getProyects = async (locale: string = "en") => {
  const proyects = await strapiApi.get<IGetProyect>("/portfolio-proyects", {
    params: {
      "pagination[start]": 0,
      "pagination[limit]": 6,
      populate: "ImageProyect",
      locale,
    },
  });
  return proyects;
};
