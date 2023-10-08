import { ILearnedTechnologies } from "@/src/interfaces";
import { PORTFOLIO_IMAGES } from "..";

export const LEARNED_TECHNOLOGIES: ILearnedTechnologies[] = Object.keys(
  PORTFOLIO_IMAGES.technologies
).map((key) => {
  return {
    name: key.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
      return str.toUpperCase();
    }),
    url: PORTFOLIO_IMAGES.technologies[
      key as keyof typeof PORTFOLIO_IMAGES.technologies
    ],
  };
});
