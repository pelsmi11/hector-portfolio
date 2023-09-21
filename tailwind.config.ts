import type { Config } from "tailwindcss";
import { COLORS_PORTFOLIO } from "./src/utils/constants";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "ui-primary": COLORS_PORTFOLIO.primary,
      "ui-secondary": COLORS_PORTFOLIO.secondary,
      "ui-black": COLORS_PORTFOLIO.black,
      "ui-gray-200": COLORS_PORTFOLIO.gray.gray200,
      "ui-gray-400": COLORS_PORTFOLIO.gray.gray400,
      "ui-blue-500": {
        DEFAULT: COLORS_PORTFOLIO.uiBlue.uiBlue500.main,
        hover: COLORS_PORTFOLIO.uiBlue.uiBlue500.hover,
      },
      "ui-blue-400": {
        DEFAULT: COLORS_PORTFOLIO.uiBlue.uiBlue400.main,
        hover: COLORS_PORTFOLIO.uiBlue.uiBlue400.hover,
      },
      "ui-purple-500": {
        DEFAULT: COLORS_PORTFOLIO.uiPurple.uiPurple500.main,
        hover: COLORS_PORTFOLIO.uiPurple.uiPurple500.hover,
      },
      "ui-purple-400": {
        DEFAULT: COLORS_PORTFOLIO.uiPurple.uiPurple400.main,
        hover: COLORS_PORTFOLIO.uiPurple.uiPurple400.hover,
      },
      "ui-green-500": {
        DEFAULT: COLORS_PORTFOLIO.uiGreen.uiGreen500.main,
        hover: COLORS_PORTFOLIO.uiGreen.uiGreen500.hover,
      },
      "ui-green-700": {
        DEFAULT: COLORS_PORTFOLIO.uiGreen.uiGreen700.main,
        hover: COLORS_PORTFOLIO.uiGreen.uiGreen700.hover,
      },
      "back-brown-100": COLORS_PORTFOLIO.uiBrown.uiBrown100,
      "back-brown-200": COLORS_PORTFOLIO.uiBrown.uiBrown200,
      "back-brown-300": COLORS_PORTFOLIO.uiBrown.uiBrown300,
      "back-brown-400": COLORS_PORTFOLIO.uiBrown.uiBrown400,
      "back-brown-500": COLORS_PORTFOLIO.uiBrown.uiBrown500,
      "back-brown-600": COLORS_PORTFOLIO.uiBrown.uiBrown600,
      "back-brown-700": COLORS_PORTFOLIO.uiBrown.uiBrown700,
      "back-brown-800": COLORS_PORTFOLIO.uiBrown.uiBrown800,
      "back-brown-900": COLORS_PORTFOLIO.uiBrown.uiBrown900,
    },
  },
  plugins: [],
};
export default config;
