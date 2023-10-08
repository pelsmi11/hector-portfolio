import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ContextContainer } from "@/src/components";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ContextContainer>
      <Component {...pageProps} />
    </ContextContainer>
  );
};

export default appWithTranslation(App);
