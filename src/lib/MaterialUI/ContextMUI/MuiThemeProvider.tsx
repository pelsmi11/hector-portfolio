//fameworks imports
import React, { FC } from "react";

//libs imports
import { CssBaseline, ThemeProvider } from "@mui/material";

//Programer imports
import { lightTheme } from "../theme";

interface Props {
  children: React.JSX.Element[] | React.JSX.Element;
}

export const MuiThemeProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
