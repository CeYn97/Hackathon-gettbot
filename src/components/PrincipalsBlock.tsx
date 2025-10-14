"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

const principalCards = [
  {
    titleKey: "principals.cards.reliability.title",
    textKey: "principals.cards.reliability.text",
    image: "/images/principals-card-1.png",
    altKey: "principals.cards.reliability.alt",
  },
  {
    titleKey: "principals.cards.evolution.title",
    textKey: "principals.cards.evolution.text",
    image: "/images/principals-card-2.png",
    altKey: "principals.cards.evolution.alt",
  },
  {
    titleKey: "principals.cards.openness.title",
    textKey: "principals.cards.openness.text",
    image: "/images/principals-card-3.png",
    altKey: "principals.cards.openness.alt",
  },
] as const;

export default function PrincipalsBlock() {
  const { t } = useTranslation();

  return (
    <>
      <section className="hidden md:flex flex-col items-center w-full gap-12 px-[120px] bg-[#F9F9F9] pb-20">
      <div className="flex flex-col items-center w-full gap-12">
        <h2 className="text-[#0C0B16] text-[52px] font-[600] leading-[1.23] text-center">
          {t("principals.heading.prefix")}{" "}
          <span className="text-[#3FC7C8]">{t("principals.heading.highlight")}</span>
        </h2>

        <div className="flex justify-stretch items-stretch w-full gap-5">
          {principalCards.map((card) => (
            <div
              key={card.titleKey}
              className="flex flex-col px-5 pt-6 pb-0 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-[24px] shadow-[0px_1.62px_9.72px_rgba(15,15,15,0.12)] flex-1 h-[420px]"
            >
              <div className="flex flex-col gap-4 flex-grow">
                <h3 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-left">
                  {t(card.titleKey)}
                </h3>
                <p className="text-[#828A9D] text-[18px] font-[500] leading-[1.22] text-left">
                  {t(card.textKey)}
                </p>
              </div>

              <div className="w-full h-[240px] rounded-[24px] overflow-hidden mt-8">
                <Image
                  src={card.image}
                  alt={t(card.altKey)}
                  width={400}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="flex md:hidden flex-col items-center w-full gap-8 px-5 py-8 bg-[#F9F9F9]">
        <div className="flex flex-col items-center w-full gap-8">
          <h2 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-center w-[320px]">
            {t("principals.heading.prefix")}{" "}
            <span className="text-[#3FC7C8]">{t("principals.heading.highlight")}</span>
          </h2>

          <div className="flex flex-col w-full gap-3">
            {principalCards.map((card) => (
              <div
                key={card.titleKey}
                className="flex flex-col px-5 pt-6 pb-0 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-[16px] shadow-[0px_1.62px_9.72px_rgba(15,15,15,0.12)]"
              >
                <div className="flex flex-col gap-3 mb-[76px]">
                  <h3 className="text-[#0C0B16] text-[20px] font-[600] leading-[1.2] text-left">
                    {t(card.titleKey)}
                  </h3>
                  <p className="text-[#828A9D] text-[14px] font-[500] leading-[1.14] text-left">
                    {t(card.textKey)}
                  </p>
                </div>

                <div className="w-full h-[180px] rounded-[16px] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={t(card.altKey)}
                    width={400}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
