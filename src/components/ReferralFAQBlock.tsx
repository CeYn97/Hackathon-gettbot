"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ReferralFAQBlock() {
  const { t } = useTranslation();

  return (
    <>
      <section className="hidden md:flex flex-col w-[1512px] px-[120px] py-20 bg-[#F9F9F9] relative">
        <div
          className="absolute"
          style={{
            left: "20px",
            top: "-230px",
            zIndex: 10,
          }}
        >
          <Image
            src="/images/star-6-referral.svg"
            alt="Star 6 decorative element"
            width={800}
            height={589}
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-col w-full gap-6 p-16 pl-12 pb-14 bg-[rgba(255,255,255,0.52)]  rounded-[16px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] relative z-10">
          <div className="flex flex-col w-full gap-10">
            <h2 className="text-[#0C0B16] text-[52px] font-[600] leading-[1.23] text-left">
              {t("referral.faqBlock.heading")}
            </h2>

            <p className="text-[#0C0B16] text-[20px] font-[500] leading-[1.4] text-left w-[1000px]">
              {t("referral.faqBlock.description")}
            </p>
          </div>
        </div>
      </section>

      <section className="flex md:hidden flex-col w-full px-5 py-8 bg-[#F9F9F9]">
        <div className="flex flex-col w-full gap-6 p-8 bg-[rgba(255,255,255,0.52)] rounded-[16px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)]">
          <h2 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-left">
            {t("referral.faqBlock.heading")}
          </h2>

          <p className="text-[#0C0B16] text-[14px] font-[500] leading-[1.43] text-left">
            {t("referral.faqBlock.description")}
          </p>
        </div>
      </section>
    </>
  );
}
