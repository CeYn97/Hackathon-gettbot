"use client";

import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { roadmapData } from "@/data/roadmap";

export default function RoadmapBlock() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  return (
    <>
      <section className="hidden md:flex flex-col items-center w-full px-[120px] py-20 bg-[#F9F9F9] relative">
        <div className="flex flex-col w-full relative">
          <div
            className="absolute w-[800px] h-[589px] opacity=100"
            style={{
              left: "-80px",
              top: "-150px",
              zIndex: 0,
            }}
          >
            <svg
              width="1088"
              height="878"
              viewBox="0 0 1088 878"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_85_15928)">
                <path
                  d="M544 144.143L652.036 359.101L944 438.643L652.036 518.185L544 733.143L435.964 518.185L144 438.643L435.964 359.101L544 144.143Z"
                  fill="#8DF1F2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_85_15928"
                  x="0"
                  y="0.143066"
                  width="1088"
                  height="877"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="72"
                    result="effect1_foregroundBlur_85_15928"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col gap-16 p-16 pb-12 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-[16px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] relative z-10">
            <div className="flex w-full gap-[256px]">
              <h2 className="text-[#0C0B16] text-[48px] font-[600] leading-[1.17] text-left flex-1">
                {t("roadmap.heading")}
              </h2>

              <p className="text-[#0C0B16] text-[20px] font-[500] leading-[1.6] text-left w-[380px]">
                {t("roadmap.description")}
              </p>
            </div>

            <div className="relative -mx-16">
              <div
                ref={scrollContainerRef}
                className="flex gap-3 overflow-x-auto scrollbar-hide px-16"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {roadmapData.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center gap-12 px-5 py-4 bg-[#FFFFFF] rounded-[16px] flex-shrink-0"
                  >
                    <h3 className="text-[52px] font-[600] leading-[1.23] text-left">
                      <span className="text-[#0C0B16]">
                        {item.year.slice(0, 2)}
                      </span>
                      <span className="text-[#3FC7C8]">
                        {item.year.slice(2)}
                      </span>
                    </h3>

                    <p className="text-[#0C0B16] text-[20px] font-[500] leading-[1.2] text-left whitespace-pre-line">
                      {t(item.textKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      <section className="flex md:hidden flex-col items-center w-full py-8 bg-[#F9F9F9]">
        <div className="flex flex-col w-full gap-16 p-8 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-[12px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)]">
          <div className="flex flex-col gap-6 px-5">
            <h2 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-left">
              {t("roadmap.heading")}
            </h2>

            <p className="text-[#0C0B16] text-[14px] font-[500] leading-[1.57] text-left">
              {t("roadmap.description")}
            </p>
          </div>

          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-8 px-8">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center gap-12 px-4 py-4 bg-[#FFFFFF] rounded-[12px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] flex-shrink-0"
              >
                <h3 className="text-[28px] font-[600] leading-[1.14] text-left">
                  <span className="text-[#0C0B16]">
                    {item.year.slice(0, 2)}
                  </span>
                  <span className="text-[#3FC7C8]">{item.year.slice(2)}</span>
                </h3>

                <p className="text-[#0C0B16] text-[14px] font-[500] leading-[1.43] text-left whitespace-pre-line">
                  {t(item.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
