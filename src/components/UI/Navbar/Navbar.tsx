import { COLORS_PORTFOLIO } from "@/src/utils/constants";
import { AppBar, Toolbar } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: COLORS_PORTFOLIO.black }}>
      <Toolbar>
        <p>hello</p>
      </Toolbar>
    </AppBar>
  );
};
