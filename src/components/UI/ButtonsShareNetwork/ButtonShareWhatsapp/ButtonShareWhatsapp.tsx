import { useCustomMediaQuery } from "@/src/hooks";
import { WhatsappIcon, WhatsappShareButton } from "react-share";

export const ButtonShareWhatsapp = () => {
  const { isClient } = useCustomMediaQuery();
  if (!isClient) return <div></div>;
  return (
    <WhatsappShareButton
      url={
        process.env.NEXT_PUBLIC_URL_PAGE ??
        "https://hector-portfolio-sooty.vercel.app"
      }
    >
      <WhatsappIcon size={40} round={true} />
    </WhatsappShareButton>
  );
};
