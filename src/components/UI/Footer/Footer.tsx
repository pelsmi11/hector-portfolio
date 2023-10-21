import { SOCIAL_NETWORKS } from "@/src/utils/constants";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from "react-icons/ai";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-ui-black text-white">
      <div className="container flex flex-col md:flex-row justify-between items-center p-4 mx-auto md:p-8 divide-gray-400">
        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
          <span>©2023 All rights reserved</span>
        </div>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={`${SOCIAL_NETWORKS.whatsapp}?text=${t(
                "NETWORK.WHATSAPP_MESSAGE"
              )}`}
              title="Whatsapp"
              className="flex items-center justify-center w-10 h-10  rounded-full bg-ui-primary"
            >
              <AiOutlineWhatsApp className="text-white h-6 w-6" />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={SOCIAL_NETWORKS.linkedin}
              title="Instagram"
              className="flex items-center justify-center w-10 h-10  rounded-full bg-ui-primary"
            >
              <AiFillLinkedin className="text-white h-6 w-6" />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={SOCIAL_NETWORKS.instagram}
              title="Instagram"
              className="flex items-center justify-center w-10 h-10  rounded-full bg-ui-primary"
            >
              <AiOutlineInstagram className="text-white h-6 w-6" />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={SOCIAL_NETWORKS.email}
              title="email"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-ui-primary"
            >
              <AiOutlineMail className="text-white h-6 w-6" />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={SOCIAL_NETWORKS.github}
              title="github"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-ui-primary"
            >
              <AiOutlineGithub className="text-white h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
