import { motion } from "framer-motion";
import { type FC } from "react";

interface CardIframeProps {
  embedUrl: string;
}

export const CardIframe: FC<CardIframeProps> = ({ embedUrl }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      style={{
        height: "370px",
        width: "360px",
        overflow: "hidden",
      }}
    >
      <iframe
        src={embedUrl}
        height="370"
        width="360"
        title="integrate post"
      ></iframe>
    </motion.div>
  );
};
