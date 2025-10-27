"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ReferralButton() {
  const { t } = useTranslation();

  return (
    <>
      <div className="hidden md:flex justify-center w-full px-[120px]">
        <a
          href="https://app.gettbot.io/auth"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex justify-center items-center gap-1 p-1 bg-[#F4F4F4] border border-[#DFDFDF] rounded-[999px] hover:bg-[#161616] hover:border-[#161616] transition-colors"
        >
          <div className="flex justify-center items-center gap-1 px-4 py-[10px] bg-[#3FC7C8] rounded-[999px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] group-hover:bg-[#161616] transition-colors duration-200">
            <span className="text-[#F9F9F9] text-[16px] font-[500] leading-[1.25] text-center">
              {t("common.buttons.tryForFree")}
            </span>
          </div>
        </a>
      </div>

      <div className="flex md:hidden justify-center w-full px-5">
        <a
          href="https://app.gettbot.io/auth"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex justify-center items-center gap-1 p-1 bg-[#F4F4F4] border border-[#DFDFDF] border-[1px] rounded-[999px] hover:bg-[#161616] hover:border-[#161616] transition-colors"
        >
          <div className="flex justify-center items-center gap-1 px-4 py-2.5 bg-[#3FC7C8] rounded-[999px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] group-hover:bg-[#161616] transition-colors duration-200">
            <span className="text-[#F9F9F9] text-[12px] font-[500] leading-[1.33] text-center whitespace-nowrap">
              {t("common.buttons.tryForFree")}
            </span>
            <Image
              src="/images/chevron-right.svg"
              alt="Arrow right"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </div>
        </a>
      </div>
    </>
  );
}
