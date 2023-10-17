import { create } from "zustand";
import { Datum, typeProjectCategory } from "../..";

type IProyectState = {
  proyects: Datum[];
  currentProyects: Datum[];
  activeCategory: typeProjectCategory;
  filterProyects: () => void;
  // eslint-disable-next-line no-unused-vars
  setProyects: (proyects: Datum[]) => void;
  // eslint-disable-next-line no-unused-vars
  setCurrentProyects: (proyects: Datum[]) => void;
  // eslint-disable-next-line no-unused-vars
  setActiveCategory: (category: typeProjectCategory) => void;
};

export const useProyectsStore = create<IProyectState>()((set) => ({
  proyects: [],
  currentProyects: [],
  activeCategory: "all",
  filterProyects: () => set((state) => ({ currentProyects: state.proyects })),
  setProyects: (proyects) => set(() => ({ proyects: proyects })),
  setCurrentProyects: (proyects) => set(() => ({ currentProyects: proyects })),
  setActiveCategory: (category) => set(() => ({ activeCategory: category })),
}));
