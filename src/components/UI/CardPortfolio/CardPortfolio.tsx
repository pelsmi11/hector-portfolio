import { motion } from "framer-motion";
import { COLORS_PORTFOLIO, PORTFOLIO_IMAGES } from "@/src/utils/constants";
import { Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import styles from "./CardPortfolio.module.css";
// import { useTranslation } from "next-i18next";
import { GithubIcon, PlayIcon } from "..";

const cardVariants = {
  front: {
    rotateY: 0,
    filter: "blur(0px)", // Sin desenfoque
  },
  back: {
    rotateY: 180,
    filter: "blur(4px)", // Aplicamos el desenfoque
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    rotateY: 180,
  },
  visible: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
    },
  },
};

export const CardPortfolio = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  // const { t } = useTranslation();

  return (
    <div
      className={`w-[370px] h-[250px] relative rounded overflow-hidden`}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <motion.div
        className={`${styles.cardContainer} rounded overflow-hidden shadow-lg`}
        animate={isFlipped ? "back" : "front"}
        variants={cardVariants}
      >
        <motion.div className={styles.cardFront}>
          <Image
            src={PORTFOLIO_IMAGES.proyects.tesloShop}
            alt="teslo shop"
            width={370}
            height={250}
            className="h-full object-cover"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className={`absolute z-10 top-[0%] h-full w-full flex items-center justify-center`}
        variants={contentVariants}
        initial="hidden"
        animate={isFlipped ? "visible" : "hidden"}
      >
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <p className="capitalize text-2xl mb-2">teslo-shop ecommerce</p>
            <p>
              Una moderna tienda en línea, centrada en productos electrónicos de
              alta calidad. Optimizada para una navegación intuitiva y con un
              diseño responsive.
            </p>
          </div>
          <div className="flex justify-center gap-4">
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
              {/* {t("PORTFOLIO.BUTTONS.LIVE_DEMO")} */}
              <PlayIcon className="h-8 w-8" />
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ textTransform: "none", minWidth: "140px", fontWeight: 700 }}
            >
              {/* {t("PORTFOLIO.BUTTONS.REPOSITORY")} */}
              <GithubIcon className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
