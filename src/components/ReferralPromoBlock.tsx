"use client";

import { useTranslation } from "react-i18next";

export default function ReferralPromoBlock() {
  const { t } = useTranslation();

  return (
    <>
      <section className="hidden md:flex flex-col items-center w-full gap-12 px-[120px] py-16 pb-20 bg-[#F9F9F9]">
      <div className="flex flex-col items-center w-full gap-12">
        <h1 className="text-[#0C0B16] text-[52px] font-[600] leading-[1.23] text-center">
          <span>Реферальная система </span>
          <span className="text-[#3FC7C8]">GettBot</span>
        </h1>

        <p className="text-[#0C0B16] text-[24px] font-[600] leading-[1.67] text-center">
          {t("referral.promo.subheading")}
        </p>

        <div className="flex justify-stretch items-stretch w-full gap-[10px] px-[136px]">
          <p className="text-[#828A9D] text-[20px] font-[500] leading-[1.2] text-center w-full">
            {t("referral.promo.description")}
          </p>
        </div>
      </div>
    </section>

      <section className="flex md:hidden flex-col items-center w-full gap-12 px-5 py-8 pb-12 bg-[#F9F9F9]">
        <h1 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-center w-[320px]">
          <span>Реферальная система </span>
          <span className="text-[#3FC7C8]">GettBot</span>
        </h1>

        <p className="text-[#0C0B16] text-[24px] font-[600] leading-[1.33] text-center">
          Добро пожаловать в реферальную программу
        </p>

        <p className="text-[#828A9D] text-[12px] font-[500] leading-[1.33] text-center">
          Это Ваш уникальный шанс зарабатывать вместе с нами, просто приглашая друзей и знакомых! Вы получите щедрые вознаграждения за каждую подписку, оформленную Вашими рефералами. Процесс настолько прост, что начать может любой.
        </p>
      </section>
    </>
  );
}
