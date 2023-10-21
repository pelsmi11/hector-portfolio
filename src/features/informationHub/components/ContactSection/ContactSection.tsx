import React from "react";
import { FloatingImage, SocialNewtorkContact } from ".";
import { useTranslation } from "next-i18next";
import { FormContact } from "@/src/features/FormContact";

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
          <FloatingImage />
          <div className="flex flex-col gap-4 lg:w-1/2">
            <SocialNewtorkContact />
            <div className="flex justify-center gap-6 items-center py-6">
              <div className="h-[1px] w-4 bg-ui-black" />
              <p>{t("FORM.DIVIDER")}</p>
              <div className="h-[1px] w-4 bg-ui-black" />
            </div>
            <FormContact />
          </div>
        </div>
      </div>
    </section>
  );
};
