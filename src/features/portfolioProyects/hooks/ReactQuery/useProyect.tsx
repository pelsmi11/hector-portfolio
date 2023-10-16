import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "next-i18next";
import { getProyects } from "../../services";

export const useProyect = () => {
  const { i18n } = useTranslation();
  const proyectsQuery = useQuery(["proyects", i18n.language], () =>
    getProyects(i18n.language)
  );
  return { proyectsQuery };
};
