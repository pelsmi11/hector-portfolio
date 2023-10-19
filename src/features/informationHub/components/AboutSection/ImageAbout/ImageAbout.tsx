import { PORTFOLIO_IMAGES } from "@/src/utils/constants";
import Image from "next/image";

export const ImageAbout = () => {
  return (
    <div className="lg:w-1/2 flex justify-center">
      <Image
        alt="About of Hector Martinez"
        src={PORTFOLIO_IMAGES.about.aboutHector}
        width={565}
        height={800}
        className="w-full object-contain h-fit"
      />
    </div>
  );
};
