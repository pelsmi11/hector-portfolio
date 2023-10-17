// import { COLORS_PORTFOLIO } from "@/src/utils/constants";
import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";
import { useProyectsStore } from "../..";
import { type ICategory } from "../../utils/constants/categories/ListCategories";
import { useTranslation } from "next-i18next";

interface Props extends ButtonProps {
  category: ICategory;
}

export const ButtonCategory: FC<Props> = ({ sx, category, ...rest }) => {
  const { activeCategory, setActiveCategory } = useProyectsStore();
  const { i18n } = useTranslation();
  return (
    <Button
      variant={category.type === activeCategory ? "contained" : "outlined"}
      sx={{
        textTransform: "none",
        minWidth: "140px",
        fontWeight: 700,
        ...sx,
      }}
      {...rest}
      onClick={() => setActiveCategory(category.type)}
    >
      {i18n.language === "es" ? category.es : category.en}
    </Button>
  );
};
