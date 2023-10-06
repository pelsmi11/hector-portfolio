import React, { FC } from "react";
import { ImagePortrait } from "./ImagePortrait";

interface Props {
  urlImage: string;
}

export const ImageContentHH: FC<Props> = ({ urlImage }) => {
  return (
    <>
      {/* Para dispositivos más pequeños */}
      <div className="lg:hidden">
        <ImagePortrait
          className="max-h-[400px] w-[fit-content] object-contain"
          src={urlImage}
        />
      </div>

      {/* Espacio que empuja la imagen al final en pantallas grandes */}
      <div className="hidden lg:flex lg:justify-center lg:self-end flex-grow lg:w-1/2">
        {/* Para pantallas lg y más grandes */}
        <div className="hidden lg:block">
          <ImagePortrait
            className="max-h-[800px] object-contain"
            src={urlImage}
          />
        </div>
      </div>
    </>
  );
};
