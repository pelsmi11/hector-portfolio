import { useEffect, useState } from "react";
import { useProyect } from "..";
import {
  CATEGORIES,
  Datum,
  ICategory,
  typeProjectCategory,
  useProyectsStore,
} from "../..";

export const useProyectsData = () => {
  const [buttonCategories, setButtonCategories] = useState<ICategory[]>([]);
  const { proyectsQuery } = useProyect();
  const proyectsStore = useProyectsStore();
  const { setProyects, setCurrentProyects, activeCategory, proyects } =
    proyectsStore;

  const filterButtonCategories = (dataCategories: Datum[]) => {
    // Create a set with the unique categories present in dataCategories
    const categoriesInData = new Set(
      dataCategories.map((datum) => datum.attributes.category)
    );

    // Filter CATEGORIES to include only those categories that are in the set
    const newButtonsCategories = CATEGORIES.filter((category) => {
      return category.type === "all" || categoriesInData.has(category.type);
    });

    // Here you can update the state or return newButtonsCategories as needed
    setButtonCategories(newButtonsCategories);
  };

  const filterProyectsByTypeProjectCategory = (
    category: typeProjectCategory
  ) => {
    const newCurrentProyects =
      category === "all"
        ? proyects
        : proyects.filter(
            (proyect) => proyect.attributes.category === category
          );
    setCurrentProyects(newCurrentProyects);
  };

  useEffect(() => {
    if (proyectsQuery.data && proyectsStore.currentProyects.length === 0) {
      setProyects(proyectsQuery.data.data.data);
      setCurrentProyects(proyectsQuery.data.data.data);
      filterButtonCategories(proyectsQuery.data.data.data);
    }
  }, [
    proyectsQuery.data,
    proyectsStore.currentProyects.length,
    setProyects,
    setCurrentProyects,
  ]);

  useEffect(() => {
    filterProyectsByTypeProjectCategory(activeCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  return {
    proyectsQuery,
    proyectsStore,
    buttonCategories,
    filterProyectsByTypeProjectCategory,
  };
};
