"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Exchanges() {
  const { t } = useTranslation();
  const [isBinanceHovered, setIsBinanceHovered] = useState(false);

  return (
    <>
      <section className="hidden md:flex flex-col justify-start items-center w-full gap-6 px-[120px] py-16 pb-20 bg-[#F9F9F9]">
        <h2 className="text-[#AAB0C0] text-[24px] font-[500] leading-[1.17] text-left w-full">
          {t("exchanges.title")}
        </h2>

        <div className="flex justify-between items-end w-full gap-10">
          <div 
            className="flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setIsBinanceHovered(true)}
            onMouseLeave={() => setIsBinanceHovered(false)}
          >
            <Image
              src={isBinanceHovered ? "/images/exchange2.svg" : "/images/binance-logo.svg"}
              alt="Binance"
              width={200}
              height={40}
              className="w-[200px] h-[40px] transition-opacity duration-200"
            />
          </div>

          <div className="flex flex-col items-center gap-[10px] pb-1">
            <Image
              src="/images/okx-logo-1.svg"
              alt="OKX"
              width={92}
              height={28}
              className="w-[92px] h-[28px]"
            />
          </div>

          <div className="flex flex-col items-end gap-[-4px] pb-1">
            <div
              className="flex justify-center items-center gap-[10px] px-3 py-1 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-full shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)]"
              style={{ marginRight: "-2rem" }}
            >
              <span className="text-[#3FC7C8] text-[12px] font-[600] leading-[1.33] tracking-[-0.02em] text-center">
                {t("common.badges.soon")}
              </span>
            </div>

            <div className="flex justify-end">
              <Image
                src="/images/bybit-logo.svg"
                alt="Bybit"
                width={104}
                height={36}
                className="w-[104px] h-[36px] opacity-60"
              />
            </div>
          </div>

          <div className="flex flex-col items-end gap-[-4px] pb-1">
            <div
              className="flex justify-center items-center gap-[10px] px-3 py-1 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-full shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)]"
              style={{ marginRight: "-2rem" }}
            >
              <span className="text-[#3FC7C8] text-[12px] font-[600] leading-[1.33] tracking-[-0.02em] text-center">
                {t("common.badges.soon")}
              </span>
            </div>

            <div className="flex justify-end">
              <Image
                src="/images/gateio-logo.svg"
                alt="Gate.io"
                width={153}
                height={36}
                className="w-[153px] h-[36px] opacity-60"
              />
            </div>
          </div>

          <div className="flex flex-col items-end gap-[-4px]">
            <div
              className="flex justify-center items-center gap-[10px] px-3 py-1 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-full shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)]"
              style={{ marginRight: "-2rem" }}
            >
              <span className="text-[#3FC7C8] text-[12px] font-[600] leading-[1.33] tracking-[-0.02em] text-center">
                {t("common.badges.soon")}
              </span>
            </div>

            <div className="flex justify-end pb-1">
              <Image
                src="/images/htx-logo.svg"
                alt="HTX"
                width={94}
                height={36}
                className="w-[94px] h-[36px] opacity-60"
              />
            </div>
          </div>

          <div className="flex flex-col items-end gap-[-4px] pb-1">
            <div
              className="flex justify-center items-center gap-[10px] px-3 py-1 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-full shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)]"
              style={{ marginRight: "-2rem" }}
            >
              <span className="text-[#3FC7C8] text-[12px] font-[600] leading-[1.33] tracking-[-0.02em] text-center">
                {t("common.badges.soon")}
              </span>
            </div>

            <div className="flex justify-end w-[152px]">
              <Image
                src="/images/bitget-logo.svg"
                alt="Bitget"
                width={120}
                height={36}
                className="w-[120px] h-[36px] opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex md:hidden flex-col w-full gap-4 pl-5 pr-0 py-6 pb-8 bg-[#F9F9F9]">
        <h2 className="text-[#AAB0C0] text-[16px] font-[500] leading-[1.25] text-left">
          {t("exchanges.title")}
        </h2>

        <div className="flex items-end gap-6 overflow-x-auto scrollbar-hide pb-2">
          <div 
            className="flex flex-col items-center flex-shrink-0 cursor-pointer"
            onMouseEnter={() => setIsBinanceHovered(true)}
            onMouseLeave={() => setIsBinanceHovered(false)}
          >
            <Image
              src={isBinanceHovered ? "/images/exchange2.svg" : "/images/binance-logo.svg"}
              alt="Binance"
              width={120}
              height={24}
              className="w-[120px] h-[24px] transition-opacity duration-200"
            />
          </div>

          <div className="flex flex-col items-center flex-shrink-0 pb-1">
            <Image
              src="/images/okx-logo-1.svg"
              alt="OKX"
              width={52}
              height={16}
              className="w-[52px] h-[16px]"
            />
          </div>

          <div className="flex flex-col items-end flex-shrink-0 pb-1">
            <div className="flex justify-center items-center gap-[10px] px-3 py-1 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-full shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] mb-1">
              <span className="text-[#3FC7C8] text-[10px] font-[600] leading-[1.2] text-center">
                {t("common.badges.soon")}
              </span>
            </div>

            <div className="flex justify-end">
              <Image
                src="/images/bybit-logo.svg"
                alt="Bybit"
                width={70}
                height={24}
                className="w-[70px] h-[24px] opacity-60"
              />
            </div>
          </div>

          <div className="flex flex-col items-end flex-shrink-0 pb-1">
            <div className="flex justify-center items-center gap-[10px] px-3 py-1 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-full shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] mb-1">
              <span className="text-[#3FC7C8] text-[10px] font-[600] leading-[1.2] text-center">
                {t("common.badges.soon")}
              </span>
            </div>

            <div className="flex justify-end">
              <Image
                src="/images/gateio-logo.svg"
                alt="Gate.io"
                width={102}
                height={24}
                className="w-[102px] h-[24px] opacity-60"
              />
            </div>
          </div>

          <div className="flex flex-col items-end flex-shrink-0">
            <div className="flex justify-center items-center gap-[10px] px-3 py-1 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-full shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] mb-1">
              <span className="text-[#3FC7C8] text-[10px] font-[600] leading-[1.2] text-center">
                {t("common.badges.soon")}
              </span>
            </div>

            <div className="flex justify-end pb-1">
              <Image
                src="/images/htx-logo.svg"
                alt="HTX"
                width={62}
                height={24}
                className="w-[62px] h-[24px] opacity-60"
              />
            </div>
          </div>

          <div className="flex flex-col items-end flex-shrink-0 pb-1">
            <div className="flex justify-center items-center gap-[10px] px-3 py-1 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-full shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] mb-1">
              <span className="text-[#3FC7C8] text-[10px] font-[600] leading-[1.2] text-center">
                {t("common.badges.soon")}
              </span>
            </div>

            <div className="flex justify-end">
              <Image
                src="/images/bitget-logo.svg"
                alt="Bitget"
                width={80}
                height={24}
                className="w-[80px] h-[24px] opacity-60"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
