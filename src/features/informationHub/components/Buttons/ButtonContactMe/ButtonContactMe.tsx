import { COLORS_PORTFOLIO } from "@/src/utils/constants";
import { Button, ButtonProps } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FC } from "react";

export const ButtonContactMe: FC<ButtonProps> = ({ sx }) => {
  const { t } = useTranslation();
  return (
    <Button
      variant="contained"
      sx={{
        "&&": {
          background: COLORS_PORTFOLIO.primary,
        },
        textTransform: "none",
        minWidth: "140px",
        fontWeight: 700,
        ...sx,
      }}
    >
      {t("HERO.CONTACT_ME")}
    </Button>
  );
};
