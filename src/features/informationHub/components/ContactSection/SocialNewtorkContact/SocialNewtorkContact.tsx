import { NetworkIconWithUrl } from "@/src/components";
import { SOCIAL_NETWORKS } from "@/src/utils/constants";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiFillLinkedin,
} from "react-icons/ai";
import { useTranslation } from "next-i18next";

export const SocialNewtorkContact = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-4 w-full">
      <p className="text-center text-2xl font-bold mb-6">
        {t("FORM.SOCIAL_MEDIA")}
      </p>
      <div
        className="grid grid-cols-3 md:grid-cols-6 gap-4 
         w-full place-items-center"
      >
        <NetworkIconWithUrl
          href={`${SOCIAL_NETWORKS.whatsapp}?text=${t(
            "NETWORK.WHATSAPP_MESSAGE"
          )}`}
        >
          <AiOutlineWhatsApp className="text-white h-10 w-10" />
        </NetworkIconWithUrl>
        <NetworkIconWithUrl href={SOCIAL_NETWORKS.linkedin}>
          <AiFillLinkedin className="text-white h-10 w-10" />
        </NetworkIconWithUrl>
        <NetworkIconWithUrl href={SOCIAL_NETWORKS.github}>
          <AiOutlineGithub className="text-white h-10 w-10" />
        </NetworkIconWithUrl>
        <NetworkIconWithUrl href={SOCIAL_NETWORKS.instagram}>
          <AiOutlineInstagram className="text-white h-10 w-10" />
        </NetworkIconWithUrl>
        <NetworkIconWithUrl href={SOCIAL_NETWORKS.email}>
          <AiOutlineMail className="text-white h-10 w-10" />
        </NetworkIconWithUrl>
        <NetworkIconWithUrl href={SOCIAL_NETWORKS.phone}>
          <AiOutlinePhone className="text-white h-10 w-10" />
        </NetworkIconWithUrl>
      </div>
    </div>
  );
};
