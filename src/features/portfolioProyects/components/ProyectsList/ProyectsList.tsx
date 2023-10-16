import React from "react";
import { useProyect } from "../..";
import { CardPortfolio, DotLoader } from "@/src/components";

export const ProyectsList = () => {
  const { proyectsQuery } = useProyect();

  if (proyectsQuery.isLoading)
    return (
      <div className="w-full grid place-items-center">
        <DotLoader />
      </div>
    );

  if (proyectsQuery.error) return <p>error</p>;

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {proyectsQuery.data?.data.data.map((proyect) => (
          <CardPortfolio key={proyect.id} proyect={proyect} />
        ))}
      </div>
    </div>
  );
};
