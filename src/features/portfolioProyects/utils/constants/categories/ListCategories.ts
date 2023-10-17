import { typeProjectCategory } from "../../..";

export interface ICategory {
  name: string;
  es: string;
  en: string;
  type: typeProjectCategory;
}

export const CATEGORIES: ICategory[] = [
  {
    name: "PORTFOLIO.ALL",
    es: "Todos",
    en: "All",
    type: "all",
  },
  {
    name: "PORTFOLIO.PRODUCTIVITY_APPS",
    es: "Aplicaciones de Productividad",
    en: "Productivity Apps",
    type: "productivityApps",
  },
  {
    name: "PORTFOLIO.ECOMMERCE_AND_TRANSACTIONS",
    es: "Comercio Electrónico y Transacciones",
    en: "E-commerce and Transactions",
    type: "eCommerceAndTransactions",
  },
  {
    name: "PORTFOLIO.PROMOTION_AND_EVENTS",
    es: "Promoción y Eventos",
    en: "Promotion and Events",
    type: "promotionAndEvents",
  },
  {
    name: "PORTFOLIO.WEBTOOLS_AND_SERVICES",
    es: "Herramientas y Servicios Web",
    en: "Web Tools and Services",
    type: "webToolsAndServices",
  },
  {
    name: "PORTFOLIO.GAMES_AND_ENTERTAINMENT",
    es: "Juegos y Entretenimiento",
    en: "Games and Entertainment",
    type: "gamesAndEntertainment",
  },
  {
    name: "PORTFOLIO.CLONES",
    es: "Clones",
    en: "Clones",
    type: "clones",
  },
];
