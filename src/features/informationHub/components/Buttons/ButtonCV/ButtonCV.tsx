import { Button, ButtonProps } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FC } from "react";

export const ButtonCV: FC<ButtonProps> = () => {
  const { t } = useTranslation();
  return (
    <Button
      variant="outlined"
      color="secondary"
      sx={{ textTransform: "none", minWidth: "140px", fontWeight: 700 }}
    >
      {t("HERO.DOWNLOAD_CV")}
    </Button>
  );
};
