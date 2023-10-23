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
        height: "320px",
        maxWidth: "700px",
        overflow: "hidden",
      }}
    >
      <iframe
        src={embedUrl}
        height="320"
        title="integrate post"
        style={{ width: "100%" }}
      ></iframe>
    </motion.div>
  );
};
