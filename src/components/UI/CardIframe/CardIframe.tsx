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
        width: "100%",
        overflow: "hidden",
      }}
      className="w-full"
    >
      <iframe
        src={embedUrl}
        height="370"
        width="100%"
        title="integrate post"
        style={{ width: "100%" }}
      ></iframe>
    </motion.div>
  );
};
