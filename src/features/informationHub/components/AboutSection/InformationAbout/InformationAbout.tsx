import { useTranslation } from "next-i18next";

export const InformationAbout = () => {
  const { t } = useTranslation();
  return (
    <div className="fex flex-col items-center text-center bg-amber-300 w-full lg:w-1/2">
      <p className="text-3xl">
        {t("ABOUT.MY_NAME_IS")}{" "}
        <span className="text-ui-primary font-bold">{t("ABOUT.NAME")}</span>
      </p>
    </div>
  );
};
