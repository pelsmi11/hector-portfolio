import { useEffect, useState } from "react";

import mediaQuery from "@mui/material/useMediaQuery";

//Custom hook for get boolean if mobile/tablet or desktop
export const useCustomMediaQuery = () => {
  const isDesktop = mediaQuery("(min-width: 1024px)");
  const isMobile = mediaQuery("(max-width: 1023px)");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return {
    isDesktop,
    isMobile,
    isClient,
  };
};
