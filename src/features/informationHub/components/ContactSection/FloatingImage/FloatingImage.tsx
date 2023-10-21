import { PORTFOLIO_IMAGES } from "@/src/utils/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const FloatingImage = () => {
  return (
    <div className="lg:w-1/2">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          animate={{ y: ["-10px", "10px", "-10px"] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        >
          <Image
            height={800}
            width={701}
            src={PORTFOLIO_IMAGES.form.floating}
            alt="Raise your projects to new heights?"
            className="w-full object-contain h-fit"
          />
        </motion.div>
      </div>
    </div>
  );
};
