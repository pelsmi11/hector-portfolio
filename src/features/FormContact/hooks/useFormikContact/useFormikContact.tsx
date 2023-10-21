/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import { getValidationSchemaContact } from "../..";

import { useTranslation } from "next-i18next";
import { useAlertSnackStore } from "@/src/features/alerts";
import { AlertColor } from "@mui/material";
import { TFunction } from "i18next";

export const useFormikContact = () => {
  const { t } = useTranslation();
  const validationSchema = getValidationSchemaContact(t);
  const { handleSendData, handleLoading, handleErrorData } =
    useAlertSnackStore();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try {
        console.log(values);
        handleSendData(t("FORM.SUBMIT.SUCCESS"));
      } catch (error) {
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
