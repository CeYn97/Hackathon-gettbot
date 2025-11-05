"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-8 md:gap-12 px-5 md:px-[120px] py-8 md:py-20 bg-[#F9F9F9]">
      <div className="flex flex-col items-center w-full gap-4">
        <h1 className="text-[#3FC7C8] text-[40px] md:text-[96px] font-[600] leading-[1.2] md:leading-[1.17] text-center">
          404
        </h1>
        <h2 className="text-[#0C0B16] text-[28px] md:text-[52px] font-[600] leading-[1.14] md:leading-[1.23] text-center">
          {t("notFound.title")}
        </h2>
      </div>

      <Link
        href="/"
        className="flex justify-center items-center px-4 py-[10px] bg-[#3FC7C8] text-[#FFFFFF] rounded-full hover:bg-[#161616] transition-colors duration-200"
      >
        <span className="text-[16px] font-[400] leading-[1.25] text-center">
          {t("notFound.backButton")}
        </span>
      </Link>
    </div>
  );
}

