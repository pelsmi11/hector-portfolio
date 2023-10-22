import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FaEarthAmericas } from "react-icons/fa6";

export const LinkTranslation = () => {
  const { i18n } = useTranslation();

  if (i18n.language === "en") {
    return (
      <Link
        href="/"
        locale="es"
        className="text-2xl text-white font-bold no-underline uppercase"
      >
        <div className="flex items-center gap-2">
          <FaEarthAmericas /> <p>es</p>
        </div>
      </Link>
    );
  }
  return (
    <Link
      href="/"
      locale="en"
      className="text-2xl text-white font-bold no-underline uppercase"
    >
      <div className="flex items-center gap-2">
        <FaEarthAmericas /> <p>en</p>
      </div>
    </Link>
  );
};
