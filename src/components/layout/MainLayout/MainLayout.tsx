//Frameworks imports
import Head from "next/head";
import { FC } from "react";
import { Footer, Navbar, SpeedDialNetworks } from "../..";

//programer imports

interface Props {
  // eslint-disable-next-line no-undef
  children: JSX.Element | JSX.Element[];
  description: string;
  keywords?: string;
  title: string;
}

export const MainLayout: FC<Props> = ({
  children,
  description,
  keywords,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        {keywords && <meta content={keywords} name="keywords" />}
        {/* Open Graph */}
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        {/* Twitter */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <SpeedDialNetworks />
      <Footer />
    </>
  );
};
