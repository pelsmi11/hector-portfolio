import { COLORS_PORTFOLIO } from "@/src/utils/constants";
import { Button } from "@mui/material";
import { useTranslation } from "next-i18next";

export const TextContentHH = () => {
  const { t } = useTranslation();
  return (
    <div className=" lg:w-1/2 flex flex-col items-center lg:items-start">
      <div className="flex flex-col gap-6 text-center lg:text-left ">
        <h1 className=" text-5xl lg:text-6xl text-ui-primary font-bold">
          {t("HERO.I_AM")}
        </h1>
        <p className="font-bold text-2xl lg:text-4xl text-ui-secondary">
          {" "}
          {t("HERO.POSITION")}
        </p>
        <p className="text-white text-xl"> {t("HERO.MESSAGE")}</p>
      </div>
      <div className="flex gap-4 mt-8">
        <Button
          variant="contained"
          sx={{
            "&&": {
              background: COLORS_PORTFOLIO.primary,
            },
            textTransform: "none",
            minWidth: "140px",
            fontWeight: 700,
          }}
        >
          {t("HERO.CONTACT_ME")}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ textTransform: "none", minWidth: "140px", fontWeight: 700 }}
        >
          {t("HERO.DOWNLOAD_CV")}
        </Button>
      </div>
    </div>
  );
};
