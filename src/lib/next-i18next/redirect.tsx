import { useEffect, FC } from "react";
import { useRouter } from "next/router";
import languageDetector from "./languageDetector";

// Define el tipo para el parámetro 'to'
export const useRedirect = (to: string | null = null): JSX.Element => {
  const router = useRouter();
  to = to || router.asPath;

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();
    if (to && to.startsWith("/" + detectedLng) && router.route === "/404") {
      // prevent endless loop
      router.replace("/" + detectedLng + router.route);
      return;
    }

    languageDetector.cache(detectedLng);
    router.replace("/" + detectedLng + to);
  }, [to, router]);

  return <></>;
};

export const Redirect: FC = () => {
  useRedirect(null);
  return <></>;
};

// eslint-disable-next-line react/display-name
export const getRedirect = (to: string | null = null): FC => {
  // eslint-disable-next-line react/display-name
  return () => {
    useRedirect(to);
    return <></>;
  };
};
