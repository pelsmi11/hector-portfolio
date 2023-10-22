import { COLORS_PORTFOLIO } from "@/src/utils/constants";
import { AppBar, Toolbar } from "@mui/material";
import { LinkTranslation } from ".";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";

export const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: COLORS_PORTFOLIO.black }}>
      <Toolbar>
        <div className="container mx-auto flex justify-between items-center">
          <EnergySavingsLeafIcon className="h-10 w-10" />
          <LinkTranslation />
        </div>
      </Toolbar>
    </AppBar>
  );
};
