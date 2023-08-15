import { Albert_Sans } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";

const inter = Albert_Sans({ subsets: ["latin"] });

export default function Home(props: any) {
  console.log(props);
  const { t } = useTranslation();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>{t("HELLO_WORLD")}</h1>
    </main>
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
