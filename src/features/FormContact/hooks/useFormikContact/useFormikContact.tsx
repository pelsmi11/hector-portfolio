/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import { IFormContact, getValidationSchemaContact, sendMail } from "../..";

import { useTranslation } from "next-i18next";
import { useAlertSnackStore } from "@/src/features/alerts";
import { AlertColor } from "@mui/material";
import { TFunction } from "i18next";

export const useFormikContact = () => {
  const { t } = useTranslation();
  const validationSchema = getValidationSchemaContact(t);
  const { handleSendData, handleLoading, handleErrorData } =
    useAlertSnackStore();

  const INITIAL_VALUES_CONTACT: IFormContact = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };
  const formik = useFormik({
    initialValues: INITIAL_VALUES_CONTACT,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log(values);
        handleLoading();
        await sendMail(values);
        resetForm();
        handleSendData(t("FORM.SUBMIT.SUCCESS"));
        handleLoading();
      } catch (error) {
        handleLoading();
        customHandlerError(error, handleErrorData, t);
      }
    },
  });

  return { formik };
};

const customHandlerError = (
  error: any,
  handleErrorData: (message: string, severity: AlertColor) => void,
  t: TFunction<"translation", undefined>
) => {
  console.error(error.message);
  return handleErrorData(t("FORM.SUBMIT.FAILURE"), "error");
};
