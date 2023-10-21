import { PORTFOLIO_IMAGES, SOCIAL_NETWORKS } from "@/src/utils/constants";
import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
import { NetworkIconWithUrl } from "@/src/components";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiFillLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion";

export const NetworksContact = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:w-1/2">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          animate={{ y: ["-10px", "10px", "-10px"] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        >
          <Image
            height={800}
            width={701}
            src={PORTFOLIO_IMAGES.form.floating}
            alt="Raise your projects to new heights?"
            className="w-full object-contain h-fit"
          />
        </motion.div>
        <div className="mt-4 w-full">
          <p className="text-center text-2xl font-bold">
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
      </div>
    </div>
  );
};
