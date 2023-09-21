import { COLORS_PORTFOLIO } from "@/src/utils/constants";
import { AppBar, Toolbar } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: COLORS_PORTFOLIO.uiBrown.uiBrown700 }}
    >
      <Toolbar>
        <p>hello</p>
      </Toolbar>
    </AppBar>
  );
};
