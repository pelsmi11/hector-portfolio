import { PORTFOLIO_IMAGES } from "@/src/utils/constants";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export const HeroHome = () => {
  const { t } = useTranslation();
  return (
    <section className={` min-h-[70vh] bg-ui-black w-full`}>
      <div
        className="container mx-auto flex flex-col lg:flex-row gap-4 items-center justify-between
       text-white pt-4  lg:px-24 min-h-[70vh] "
      >
        <div className="text-center">
          <h1 className=" text-5xl lg:text-8xl text-ui-primary font-bold">
            {t("HERO.I_AM")}
          </h1>
          <p>full-stack developer</p>
        </div>
        {/* Para dispositivos más pequeños */}
        <div className="lg:hidden">
          <Image
            src={PORTFOLIO_IMAGES.hero.portraitPhotography}
            alt="Portrait Photo"
            width={640}
            height={960}
            className="max-h-[400px] w-[fit-content] object-contain"
            style={{ borderRadius: "50% 50% 0 0" }}
          />
        </div>

        {/* Espacio que empuja la imagen al final en pantallas grandes */}
        <div className="hidden lg:flex lg:self-end flex-grow">
          {/* Para pantallas lg y más grandes */}
          <div className="hidden lg:block">
            <Image
              src={PORTFOLIO_IMAGES.hero.portraitPhotography}
              alt="Portrait Photo"
              width={640}
              height={960}
              className="max-h-[900px] object-contain"
              style={{ borderRadius: "50% 50% 0 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
