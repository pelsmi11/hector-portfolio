import portfolioApi from "@/src/lib/Axios/portfolioApi";
import { IFormContact } from "..";

export const sendMail = async (data: IFormContact) => {
  // eslint-disable-next-line no-useless-catch
  try {
    await portfolioApi.post("/send", data);
  } catch (error) {
    throw error;
  }
};
