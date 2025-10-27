"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Calculator() {
  const { t } = useTranslation();
  const [friendsCount, setFriendsCount] = useState(75);

  const revenue = friendsCount * 18;

  const handleSliderChange = (value: number) => {
    setFriendsCount(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setFriendsCount(Math.min(100, Math.max(10, value)));
  };

  return (
    <>
      <section className="hidden md:flex flex-col w-[1512px] px-[120px] py-20 bg-[#F9F9F9] relative">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/calculator-bg.svg"
            alt="Calculator background"
            width={1512}
            height={625}
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute"
          style={{
            left: "1px",
            top: "-230px",
            zIndex: 10,
          }}
        >
          <Image
            src="/images/star-6-calculator.svg"
            alt="Star 6 decorative element"
            width={800}
            height={589}
            className="w-full h-full"
          />
        </div>

        <div className="flex w-full gap-6 p-15 bg-[rgba(255,255,255,0.52)] backdrop-blur-[13px]  rounded-[16px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] relative z-10">
          <div className="flex flex-col gap-10 w-[674px]">
            <h2 className="text-[#0C0B16] text-[52px] font-[600] leading-[1.23] text-left">
              {t("calculator.title")}
            </h2>

            <p className="text-[#828A9D] text-[24px] font-[500] leading-[1.17] text-left">
              {t("calculator.subtitle")}
            </p>
          </div>

          <div className="flex flex-col items-center gap-2.5 flex-1">
            <div className="flex flex-col gap-6 p-8 bg-[#FFFFFF] rounded-[16px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 w-[308px]">
                  <div className="flex flex-col gap-1 p-2 px-4 h-16 bg-[#FFFFFF] border border-[#DFDFDF] rounded-[8px]">
                    <div className="flex flex-col gap-1">
                      <span className="text-[#A2ADC3] text-[12px] font-[600] leading-[1.33] text-left">
                        {t("calculator.friendsLabel")}
                      </span>
                      <input
                        type="number"
                        value={friendsCount}
                        onChange={handleInputChange}
                        min="10"
                        max="100"
                        className="text-[#0C0B16] text-[20px] font-[500] leading-[1.4] text-left bg-transparent border-none outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="relative w-full h-2 bg-[#E2E2E2] rounded-full">
                      <div
                        className="absolute top-0 left-0 h-2 bg-[#3FC7C8] rounded-full flex items-center justify-end"
                        style={{
                          width: `${((friendsCount - 10) / 90) * 100}%`,
                        }}
                      >
                        <div className="w-5 h-5 bg-[#fff] border-4 border-[#3FC7C8] rounded-full shadow-sm transform translate-x-1/2"></div>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={friendsCount}
                        onChange={(e) =>
                          handleSliderChange(parseInt(e.target.value))
                        }
                        className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
                      />
                    </div>

                    <div className="flex justify-between w-full">
                      <span className="text-[#A2ADC3] text-[12px] font-[600] leading-[1.33] text-left">
                        10
                      </span>
                      <span className="text-[#A2ADC3] text-[12px] font-[600] leading-[1.33] text-left">
                        25
                      </span>
                      <span className="text-[#A2ADC3] text-[12px] font-[600] leading-[1.33] text-center">
                        50
                      </span>
                      <span className="text-[#A2ADC3] text-[12px] font-[600] leading-[1.33] text-center">
                        75
                      </span>
                      <span className="text-[#A2ADC3] text-[12px] font-[600] leading-[1.33] text-right">
                        100
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex flex-col gap-1 p-2 px-4 h-16 bg-[#FFFFFF] border border-[#DFDFDF] rounded-[8px]">
                    <div className="flex flex-col gap-1">
                      <span className="text-[#A2ADC3] text-[12px] font-[600] leading-[1.33] text-left">
                        {t("calculator.friendsLabel")}
                      </span>
                      <span className="text-[#0C0B16] text-[20px] font-[500] leading-[1.4] text-left">
                        {revenue} USDT
                      </span>
                    </div>
                  </div>

                  <span className="text-[#AAB0C0] text-[12px] font-[600] leading-[1.33] text-left">
                    {t("calculator.disclaimer")}
                  </span>
                </div>
              </div>

              <a
                href="https://app.gettbot.io/auth"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex justify-center items-center gap-1 p-1 bg-[#F4F4F4] border border-[#DFDFDF] rounded-[999px] hover:bg-[#161616] hover:border-[#161616] transition-colors w-full"
              >
                <div className="flex justify-center items-center gap-1 px-4 py-[10px] bg-[#3FC7C8] rounded-[999px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] group-hover:bg-[#161616] transition-colors duration-200 w-full">
                  <span className="text-[#F9F9F9] text-[16px] font-[500] leading-[1.25] text-center">
                    {t("calculator.cta")}
                  </span>
                  <div className="w-4 h-4 flex items-center justify-center">
                    <Image
                      src="/images/chevron-right.svg"
                      alt="Arrow right"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex md:hidden flex-col w-full px-5 py-8 bg-[#F9F9F9] relative">
        <div className="absolute top-[-50px] left-0 w-full h-full">
          <Image
            src="/images/mobile-bg-calcupator.svg"
            alt="Mobile calculator background"
            width={360}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-8 w-full relative z-10">
          <div className="flex flex-col items-center gap-6 p-6 bg-[#FFFFFF] rounded-[16px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)]">
            <div className="flex flex-col gap-6">
              <h2 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-left">
                {t("calculator.title")}
              </h2>

              <p className="text-[#828A9D] text-[14px] font-[500] leading-[1.43] text-left">
                {t("calculator.subtitle")}
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-col gap-1 p-2 px-4 h-16 bg-[#FFFFFF] border border-[#DFDFDF] rounded-[8px]">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#A2ADC3] text-[12px] font-[600] leading-[1.33] text-left">
                      {t("calculator.friendsLabel")}
                    </span>
                    <input
                      type="number"
                      value={friendsCount}
                      onChange={handleInputChange}
                      min="10"
                      max="100"
                      className="text-[#0C0B16] text-[20px] font-[500] leading-[1.4] text-left bg-transparent border-none outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="relative w-full h-2 bg-[#E2E2E2] rounded-full">
                    <div
                      className="absolute top-0 left-0 h-2 bg-[#3FC7C8] rounded-full flex items-center justify-end"
                      style={{ width: `${((friendsCount - 10) / 90) * 100}%` }}
                    >
                      <div className="w-5 h-5 bg-[#fff] border-4 border-[#3FC7C8] rounded-full shadow-sm transform translate-x-1/2"></div>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={friendsCount}
                      onChange={(e) =>
                        handleSliderChange(parseInt(e.target.value))
                      }
                      className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
                    />
                  </div>

                  <div className="flex justify-between w-full">
                    <span className="text-[#A2ADC3] text-[12px] font-[600] leading-[1.33] text-left">
                      10
                    </span>
                    <span className="text-[#A2ADC3] text-[12px] font-[600] leading-[1.33] text-left">
                      25
                    </span>
                    <span className="text-[#A2ADC3] text-[12px] font-[600] leading-[1.33] text-center">
                      50
                    </span>
                    <span className="text-[#A2ADC3] text-[12px] font-[600] leading-[1.33] text-center">
                      75
                    </span>
                    <span className="text-[#A2ADC3] text-[12px] font-[600] leading-[1.33] text-right">
                      100
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1 p-2 px-4 h-16 bg-[#FFFFFF] border border-[#DFDFDF] rounded-[8px]">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#A2ADC3] text-[12px] font-[600] leading-[1.33] text-left">
                      {t("calculator.friendsLabel")}
                    </span>
                    <span className="text-[#0C0B16] text-[20px] font-[500] leading-[1.4] text-left">
                      {revenue} USDT
                    </span>
                  </div>
                </div>

                <span className="text-[#AAB0C0] text-[12px] font-[600] leading-[1.33] text-left">
                  {t("calculator.disclaimer")}
                </span>
              </div>
            </div>

            <a
              href="https://app.gettbot.io/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-center items-center gap-1 p-1 bg-[#F4F4F4] border border-[#DFDFDF] rounded-[999px] hover:bg-[#161616] hover:border-[#161616] transition-colors w-full"
            >
              <div className="flex justify-center items-center gap-1 px-4 py-[10px] bg-[#3FC7C8] rounded-[999px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] group-hover:bg-[#161616] transition-colors duration-200 w-full">
                <span className="text-[#F9F9F9] text-[16px] font-[500] leading-[1.25] text-center">
                  {t("calculator.cta")}
                </span>
                <div className="w-4 h-4 flex items-center justify-center">
                  <Image
                    src="/images/chevron-right.svg"
                    alt="Arrow right"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
