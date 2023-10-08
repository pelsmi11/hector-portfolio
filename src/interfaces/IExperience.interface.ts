import { ReactNode } from "react";

export interface IExperience {
  icon: ReactNode;
  date: string;
  title: string;
  body: string;
  jobPosition?: string;
}
