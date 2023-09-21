import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SSRConfig } from "next-i18next";
import { NextPage, GetStaticProps } from "next";
import { MainLayout } from "@/src/components";
import { HeroHome } from "@/src/features/informationHub";

interface Props {
  locale: string;
  _nextI18Next: SSRConfig;
}

const Home: NextPage<Props> = () => {
  return (
    <MainLayout description="Hector Martinez" title="Hector Martinez">
      <HeroHome />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { locale } = ctx;
  if (!locale) return { props: {} };

  return {
    props: {
      // pass the translation props to the page component
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Home;
