import { COLORS_PORTFOLIO } from "@/src/utils/constants";
import { createTheme, Theme } from "@mui/material/styles";

export const lightTheme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  typography: {
    fontFamily: "Lato",
  },
  palette: {
    primary: {
      main: COLORS_PORTFOLIO.primary,
    },
    secondary: {
      main: COLORS_PORTFOLIO.secondary,
    },
  },
});
