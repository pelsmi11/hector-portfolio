import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SSRConfig, useTranslation } from "next-i18next";
import { NextPage, GetStaticProps } from "next";
import { MainLayout } from "@/src/components";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroHome,
  PortfolioSection,
} from "@/src/features/informationHub";

interface Props {
  locale: string;
  _nextI18Next: SSRConfig;
}

const Home: NextPage<Props> = () => {
  const { t } = useTranslation();
  return (
    <MainLayout
      description={t("META.DESCRIPTION")}
      title="Hector Martinez"
      keywords={t("META.KEYWORDS")}
    >
      <div
        className={`flex min-h-screen flex-col items-center overflow-hidden`}
      >
        <HeroHome />
        <AboutSection />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />
      </div>
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
