import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { MainLayout } from "@/src/components";

export default function Home(props: any) {
  console.log(props);
  const { t } = useTranslation();
  return (
    <MainLayout description="Hector Martinez" title="Hector Martinez">
      <div
        className={`flex min-h-screen flex-col items-center justify-between p-24 `}
      >
        <h1>{t("HELLO_WORLD")}</h1>
      </div>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // extract the locale identifier from the URL
  const { locale } = ctx;
  if (!locale) return { props: {} };

  return {
    props: {
      // pass the translation props to the page component
      locale,
      ...(await serverSideTranslations(locale)),
    },
  };
};
