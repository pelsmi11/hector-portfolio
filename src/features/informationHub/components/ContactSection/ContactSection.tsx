import React from "react";
import { NetworksContact } from ".";
import { useTranslation } from "next-i18next";

export const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="bg-ui-gray-400 w-full py-8 px-6 min-h-[70vh]"
    >
      <div className="container mx-auto">
        <p className="font-bold text-2xl md:text-3xl xl:text-4xl text-center">
          {t("FORM.FORM_SLOGAN")}
        </p>
        <div className="flex flex-col lg:flex-row justify-evenly">
          <NetworksContact />
          {/* <FormContact /> */}
        </div>
      </div>
    </section>
  );
};
