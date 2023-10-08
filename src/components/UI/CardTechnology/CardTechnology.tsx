import { ILearnedTechnologies } from "@/src/interfaces";
import Image from "next/image";
import { FC } from "react";

interface Props {
  technology: ILearnedTechnologies;
}

export const CardTechnology: FC<Props> = ({ technology }) => {
  return (
    <div className="flex justify-center items-center h-40 w-40 bg-ui-gray-200 shadow my-2 rounded">
      <Image
        alt={technology.name}
        src={technology.url}
        width={80}
        height={80}
        className="object-contain  "
      />
    </div>
  );
};
