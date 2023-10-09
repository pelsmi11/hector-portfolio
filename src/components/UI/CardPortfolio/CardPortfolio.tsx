import { COLORS_PORTFOLIO, PORTFOLIO_IMAGES } from "@/src/utils/constants";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

export const CardPortfolio = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg  w-[370px] h-[250px] relative">
      <Image
        src={PORTFOLIO_IMAGES.proyects.tesloShop}
        alt="teslo shop"
        width={370}
        height={250}
        className="h-full object-cover"
      />
      <div className="absolute z-10 top-[50%] w-full flex justify-center gap-4">
        <Button
          variant="contained"
          sx={{
            "&&": {
              background: COLORS_PORTFOLIO.primary,
            },
            textTransform: "none",
            minWidth: "140px",
            fontWeight: 700,
          }}
        >
          live demo
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ textTransform: "none", minWidth: "140px", fontWeight: 700 }}
        >
          Repository
        </Button>
      </div>
    </div>
  );
};
