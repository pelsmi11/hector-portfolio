import Image from "next/image";
import { FC } from "react";

interface Props {
  src: string;
  className: string;
}

export const ImagePortrait: FC<Props> = ({ src, className }) => {
  return (
    <Image
      src={src}
      alt="Portrait Photo"
      width={640}
      height={960}
      className={className}
      priority
    />
  );
};
