//Frameworks imports
import Head from "next/head";
import { FC } from "react";
import { Footer, Navbar, SpeedDialNetworks } from "../..";
import { DEFAULT_META } from "@/src/utils/constants";

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

        <meta name="author" content={DEFAULT_META.author} />
        {/* Open Graph */}
        <meta property="og:type" content={DEFAULT_META.type} />
        <meta property="og:site_name" content={DEFAULT_META.siteName} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta name="image" property="og:image" content={DEFAULT_META.image} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={DEFAULT_META.image} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <SpeedDialNetworks />
      <Footer />
    </>
  );
};
