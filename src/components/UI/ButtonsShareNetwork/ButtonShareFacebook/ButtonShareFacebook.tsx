import { useCustomMediaQuery } from "@/src/hooks";
import { FacebookIcon, FacebookShareButton } from "react-share";
import React from "react";

export const ButtonShareFacebook = () => {
  const { isClient } = useCustomMediaQuery();
  if (!isClient) return <div></div>;
  return (
    <FacebookShareButton
      url={
        process.env.NEXT_PUBLIC_URL_PAGE ??
        "https://hector-portfolio-sooty.vercel.app"
      }
    >
      <FacebookIcon size={40} round={true} />
    </FacebookShareButton>
  );
};
