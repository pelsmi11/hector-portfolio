import Link from "next/link";
import { FC, ReactNode } from "react";

interface NetworkIconWithUrlProps {
  href: string;
  children: ReactNode;
}

export const NetworkIconWithUrl: FC<NetworkIconWithUrlProps> = ({
  children,
  href,
}) => {
  return (
    <Link
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      title="github"
      className="flex items-center justify-center w-14 h-14 rounded-full bg-ui-primary"
    >
      {children}
    </Link>
  );
};
