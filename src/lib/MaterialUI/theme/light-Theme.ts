import { COLORS_PORTFOLIO } from "@/src/utils/constants";
import {
  createTheme,
  PaletteColorOptions,
  ThemeProvider,
  Theme,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomPalette {
    terciary: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    terciary: true;
  }
}

export const lightTheme: Theme = createTheme({
  typography: {
    fontFamily: "Albert Sans",
  },
  palette: {
    primary: {
      main: COLORS_PORTFOLIO.uiPurple.uiPurple500.main,
    },
    secondary: {
      main: COLORS_PORTFOLIO.uiBlue.uiBlue500.main,
    },
    terciary: {
      main: COLORS_PORTFOLIO.uiGreen.uiGreen500.main,
    },
  },
});
