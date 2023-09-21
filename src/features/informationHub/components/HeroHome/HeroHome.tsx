import { useTranslation } from "next-i18next";

export const HeroHome = () => {
  const { t } = useTranslation();
  return (
    <section className={` min-h-[70vh] p-24  bg-ui-black`}>
      <div className="flex flex-col items-center justify-between text-white">
        <h1>{t("HELLO_WORLD")}</h1>
      </div>
    </section>
  );
};
