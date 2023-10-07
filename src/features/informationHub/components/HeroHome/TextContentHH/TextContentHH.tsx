import { PORTFOLIO_IMAGES } from "@/src/utils/constants";
import { ButtonBase } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { ButtonCV, ButtonContactMe } from "../..";

export const TextContentHH = () => {
  const { t } = useTranslation();
  return (
    <div className=" lg:w-1/2 flex flex-col items-center lg:items-start">
      <div className="flex flex-col gap-6 text-center lg:text-left ">
        <h1 className=" text-5xl lg:text-6xl text-white font-bold">
          {t("HERO.I_AM")}
        </h1>
        <p className="font-bold text-2xl lg:text-4xl text-ui-primary">
          {" "}
          {t("HERO.POSITION")}
        </p>
        <p className="text-white text-xl"> {t("HERO.MESSAGE")}</p>
      </div>
      <div className="flex gap-4 mt-8">
        <ButtonContactMe />
        <ButtonCV />
      </div>
      <div className="mt-8 text-center lg:text-left">
        <p className="text-white text-xl">{t("HERO.FIND_ME")}</p>
        <div className="flex gap-6 items-center justify-center lg:justify-start h-[68px] mt-6">
          <Link
            href={"https://www.linkedin.com/in/hmartinezm6"}
            target="_blank"
          >
            <ButtonBase>
              <Image
                src={PORTFOLIO_IMAGES.hero.networks.linkedin}
                alt="LinkedIn"
                height={257}
                width={820}
                className=" object-contain w-fit lg:h-16 "
              />
            </ButtonBase>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/hmartinezm6"}
            target="_blank"
          >
            <ButtonBase>
              <Image
                src={PORTFOLIO_IMAGES.hero.networks.instagram}
                alt="Instagram"
                height={317}
                width={820}
                className="object-contain w-fit lg:h-16 "
              />
            </ButtonBase>
          </Link>
        </div>
      </div>
    </div>
  );
};
