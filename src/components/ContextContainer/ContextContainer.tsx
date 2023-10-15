import React, { FC } from "react";

import { MuiThemeProvider, ReactQueryContext } from "@/src/lib";

interface Props {
  children: React.JSX.Element | React.JSX.Element[];
}
export const ContextContainer: FC<Props> = ({ children }) => {
  return (
    <MuiThemeProvider>
      <ReactQueryContext>{children}</ReactQueryContext>
    </MuiThemeProvider>
  );
};
