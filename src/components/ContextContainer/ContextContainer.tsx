import { FC } from "react";

import { MuiThemeProvider } from "@/src/lib";

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const ContextContainer: FC<Props> = ({ children }) => {
  return <MuiThemeProvider>{children}</MuiThemeProvider>;
};
