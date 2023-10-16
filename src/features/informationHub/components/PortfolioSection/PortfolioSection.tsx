import { ProyectsList } from "@/src/features/portfolioProyects";
import { useTranslation } from "next-i18next";

export const PortfolioSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-ui-gray-200 w-full py-8 px-6 min-h-[50vh]">
      <div className="container mx-auto">
        <div className="text-center mt-4 mb-6">
          <h2 className="font-bold text-4xl mb-4">{t("PORTFOLIO.TITLE")}</h2>
          <p className="text-2xl">{t("PORTFOLIO.DESCRIPTION")}</p>
        </div>
        <ProyectsList />
      </div>
    </section>
  );
};
