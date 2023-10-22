import { useCustomMediaQuery } from "@/src/hooks";
import { LinkedinIcon, LinkedinShareButton } from "react-share";

export const ButtonShareLinkedin = () => {
  const { isClient } = useCustomMediaQuery();
  if (!isClient) return <div></div>;
  return (
    <LinkedinShareButton
      url={
        process.env.NEXT_PUBLIC_URL_PAGE ??
        "https://hector-portfolio-sooty.vercel.app"
      }
    >
      <LinkedinIcon size={40} round={true} />
    </LinkedinShareButton>
  );
};
