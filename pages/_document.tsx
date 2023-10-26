import { FAVICONS } from "@/src/utils/constants";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Favicons */}
        {FAVICONS.map((linkProps) => (
          <link key={linkProps.href} {...linkProps} />
        ))}
        {/* Accent color on supported browser */}
        <meta name="theme-color" content="#E15B5D" />
        {/* Open Graph */}
        <meta name="image" property="og:image" content="/images/mini-01.png" />
        {/* Twitter */}
        <meta name="twitter:image" content="/images/mini-01.png" />
        {/* lato font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
