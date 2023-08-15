import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../../../next-i18next.config";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";

type I18nPath = {
  params: {
    locale: string;
  };
};

type I18nProps = {
  [key: string]: any; // Esto es una simplificación; puedes afinar más este tipo si conoces la estructura exacta que se devuelve.
};

export const getI18nPaths = (): I18nPath[] =>
  i18nextConfig.i18n.locales.map((lng) => ({
    params: {
      locale: lng,
    },
  }));

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export async function getI18nProps(
  ctx: GetStaticPropsContext,
  ns: string[] = ["common"]
): Promise<I18nProps> {
  const locale = ctx?.params?.locale as string;
  let props: I18nProps = {
    ...(await serverSideTranslations(locale, ns)),
  };
  return props;
}

export function makeStaticProps(
  ns: string[] = []
): (ctx: GetStaticPropsContext) => Promise<GetStaticPropsResult<I18nProps>> {
  return async function getStaticProps(ctx) {
    return {
      props: await getI18nProps(ctx, ns),
    };
  };
}
