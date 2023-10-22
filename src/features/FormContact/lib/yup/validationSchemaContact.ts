import * as Yup from "yup";
import { TFunction } from "i18next";
import { IFormContact } from "../..";

export const getValidationSchemaContact = (
  t: TFunction<"translation", undefined>
) => {
  return Yup.object<IFormContact>().shape({
    fullName: Yup.string().required(t("FORM.VALIDATIONS.REQUIRED")),
    email: Yup.string()
      .email(t("FORM.VALIDATIONS.EMAIL_INVALID"))
      .required(t("FORM.VALIDATIONS.REQUIRED")),
    subject: Yup.string().required(t("FORM.VALIDATIONS.REQUIRED")),
    message: Yup.string().required(t("FORM.VALIDATIONS.REQUIRED")),
  });
};
