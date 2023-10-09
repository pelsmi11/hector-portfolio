import { CardPortfolio } from "@/src/components";
import React from "react";

export const PortfolioSection = () => {
  return (
    <section className="bg-ui-gray-200 w-full py-8 px-6 min-h-[50vh]">
      <div className="container mx-auto">
        <CardPortfolio />
      </div>
    </section>
  );
};
