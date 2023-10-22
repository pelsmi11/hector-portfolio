import { PORTFOLIO_IMAGES, SOCIAL_NETWORKS } from "@/src/utils/constants";
import { ButtonBase } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { ButtonCV, ButtonContactMe } from "../..";
import { Link as LinkScroll } from "react-scroll";

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
        <LinkScroll
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <ButtonContactMe />
        </LinkScroll>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href={`https://drive.google.com/file/d/1kCsnlA335ae3cx4uKTL2dBdciLnvJFld/view?usp=share_link`}
          title="CV"
          className="no-underline text-white"
        >
          <ButtonCV />
        </Link>
      </div>
      <div className="mt-8 text-center lg:text-left">
        <p className="text-white text-xl">{t("HERO.FIND_ME")}</p>
        <div className="flex gap-6 items-center justify-center lg:justify-start h-[68px] mt-6">
          <ButtonBase className="w-full lg:w-2/3 2xl:w-1/2 xl:max-w-[300px] ">
            <Link href={SOCIAL_NETWORKS.linkedin} target="_blank">
              <Image
                src={PORTFOLIO_IMAGES.hero.networks.linkedin}
                alt="LinkedIn"
                height={257}
                width={820}
                className="object-contain w-full h-full"
                priority
              />
            </Link>
          </ButtonBase>
          <ButtonBase className="w-full lg:w-2/3 2xl:w-1/2 xl:max-w-[300px]">
            <Link href={SOCIAL_NETWORKS.instagram} target="_blank">
              <Image
                src={PORTFOLIO_IMAGES.hero.networks.instagram}
                alt="Instagram"
                height={317}
                width={820}
                className="object-contain w-full h-full"
                priority
              />
            </Link>
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};
