import React, { FC } from "react";

import { MuiThemeProvider } from "@/src/lib";

interface Props {
  children: React.JSX.Element | React.JSX.Element[];
}
export const ContextContainer: FC<Props> = ({ children }) => {
  return <MuiThemeProvider>{children}</MuiThemeProvider>;
};
