import { useTranslation } from "next-i18next";
import Link from "next/link";
import { ButtonContactMe } from "../..";
import { SOCIAL_NETWORKS } from "@/src/utils/constants";
import { Link as LinkScroll } from "react-scroll";

export const InformationAbout = () => {
  const { t } = useTranslation();
  return (
    <div className="fex flex-col items-center w-full lg:w-1/2">
      <h2 className="text-3xl">
        {" " + t("ABOUT.I_AM") + " "}
        <span className="text-ui-primary font-bold">
          {t("ABOUT.DEVELOPER")}
        </span>
      </h2>
      <div className="mt-6 flex flex-col ">
        <p> {t("ABOUT.ABOUT_BODY_ONE")}</p>
        <p> {t("ABOUT.ABOUT_BODY_TWO")}</p>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex md:gap-8">
          <p className="md:w-16 font-bold">{t("ABOUT.NAME")}</p>
          <p className="font-bold text-base">:</p>
          <p>&nbsp;{t("ABOUT.MY_NAME")}</p>
        </div>
        <div className="flex md:gap-8">
          <p className="md:w-16 font-bold">{t("ABOUT.PHONE")}</p>
          <p className="font-bold text-base">:</p>
          <Link
            className="no-underline text-ui-black"
            href={SOCIAL_NETWORKS.phone}
          >
            <p>&nbsp;{t("ABOUT.MY_PHONE")}</p>
          </Link>
        </div>
        <div className="flex md:gap-8">
          <p className="md:w-16 font-bold">{t("ABOUT.EMAIL")}</p>
          <p className="font-bold text-base">:</p>
          <Link
            className="no-underline text-ui-black"
            href={SOCIAL_NETWORKS.email}
          >
            <p>&nbsp;{t("ABOUT.MY_EMAIL")}</p>
          </Link>
        </div>
        <div className="flex md:gap-8">
          <p className="md:w-16 font-bold">{t("ABOUT.FREELANCE")}</p>
          <p className="font-bold text-base">:</p>
          <p>&nbsp;{t("ABOUT.MY_FREELANCE")}</p>
        </div>
      </div>
      <div className="mt-6">
        <LinkScroll
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <ButtonContactMe />
        </LinkScroll>
      </div>
    </div>
  );
};
