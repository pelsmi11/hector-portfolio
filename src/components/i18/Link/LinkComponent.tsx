import React, { FC } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface Props extends LinkProps {
  children: JSX.Element | JSX.Element[];
  skipLocaleHandling: boolean;
}

const LinkComponent: FC<Props> = ({
  children,
  skipLocaleHandling = false,
  href = "",
  ...rest
}) => {
  const router = useRouter();

  const locale = Array.isArray(router.query.locale)
    ? router.query.locale[0]
    : router.query.locale || "";

  let toHref: string = typeof href === "string" ? href : router.asPath;

  if (toHref.startsWith("http")) skipLocaleHandling = true;

  if (locale && !skipLocaleHandling) {
    toHref = toHref
      ? `/${locale}${toHref}`
      : router.pathname.replace("[locale]", locale);
  }

  return (
    <Link href={toHref} {...rest}>
      {children}
    </Link>
  );
};

export default LinkComponent;
