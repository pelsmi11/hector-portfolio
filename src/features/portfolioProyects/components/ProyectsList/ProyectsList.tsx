import React from "react";
import { ButtonCategory, useProyectsData, useProyectsStore } from "../..";
import { CardPortfolio, DotLoader } from "@/src/components";
import { motion } from "framer-motion";

export const ProyectsList = () => {
  const { proyectsQuery, buttonCategories } = useProyectsData();
  const { currentProyects } = useProyectsStore();

  if (proyectsQuery.isLoading)
    return (
      <div className="w-full grid place-items-center">
        <DotLoader />
      </div>
    );

  if (proyectsQuery.error) return <p>error</p>;

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex overflow-x-auto whitespace-nowrap gap-4 my-6 ">
          {buttonCategories.map((buttonCategory) => (
            <ButtonCategory
              className="flex-shrink-0 px-4"
              key={buttonCategory.type}
              category={buttonCategory}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center min-h-[60vh]">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-start "
        >
          {currentProyects.map((proyect) => (
            <CardPortfolio key={proyect.id} proyect={proyect} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
