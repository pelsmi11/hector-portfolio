import { motion } from "framer-motion";
import { COLORS_PORTFOLIO } from "@/src/utils/constants";
import { Button } from "@mui/material";
import Image from "next/image";
import { FC, useState } from "react";
import styles from "./CardPortfolio.module.css";
import { GithubIcon, PlayIcon } from "..";
import { Datum } from "@/src/features/portfolioProyects";
import Link from "next/link";

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

interface Props {
  proyect: Datum;
}

export const CardPortfolio: FC<Props> = ({ proyect }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className={`w-full max-w-[370px] h-[250px] relative rounded overflow-hidden cursor-pointer`}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <motion.div
        className={`${styles.cardContainer} rounded overflow-hidden shadow-lg`}
        animate={isFlipped ? "back" : "front"}
        variants={cardVariants}
      >
        <motion.div className={styles.cardFront}>
          <Image
            src={
              proyect.attributes.ImageProyect.data.attributes.formats.medium.url
            }
            alt={proyect.attributes.description}
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
        <div className={styles.backgroundGradient} />
        <div className="flex flex-col gap-4">
          <div className="text-center text-ui-black px-2">
            <p className="capitalize font-bold text-2xl mb-2 ">
              {proyect.attributes.Title}
            </p>
            <p className="text-shadow truncate-line-3">
              {proyect.attributes.description}
            </p>
          </div>
          {isFlipped && (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              layout
              className="flex justify-center gap-4"
            >
              <Link href={proyect.attributes.urlDemo} target="_blank">
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
                  <PlayIcon className="h-8 w-8" />
                </Button>
              </Link>
              <Link href={proyect.attributes.urlGithub} target="_blank">
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{
                    textTransform: "none",
                    minWidth: "140px",
                    fontWeight: 700,
                  }}
                >
                  <GithubIcon className="h-8 w-8" />
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
