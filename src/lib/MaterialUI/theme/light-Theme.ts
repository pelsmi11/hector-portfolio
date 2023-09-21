import { COLORS_PORTFOLIO } from "@/src/utils/constants";
import { createTheme, Theme } from "@mui/material/styles";

export const lightTheme: Theme = createTheme({
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
