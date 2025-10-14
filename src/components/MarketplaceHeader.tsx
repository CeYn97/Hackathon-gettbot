"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface MarketplaceHeaderProps {
  activeTab: "spot" | "futures";
  onTabChange: (tab: "spot" | "futures") => void;
  activeSegment: "hit" | "all";
  onSegmentChange: (segment: "hit" | "all") => void;
}

export default function MarketplaceHeader({
  activeTab,
  onTabChange,
  activeSegment,
  onSegmentChange,
}: MarketplaceHeaderProps) {
  const [activeIcon, setActiveIcon] = useState<"icon1" | "icon2">("icon1");
  const { t } = useTranslation();

  const handleSegmentChange = (segment: "hit" | "all") => {
    onSegmentChange(segment);
  };

  const handleIconChange = (icon: "icon1" | "icon2") => {
    setActiveIcon(icon);
  };
  return (
    <div className="hidden md:flex justify-between items-center w-full gap-3.5 px-3 py-2">
      <div className="flex justify-center items-center gap-3.5 flex-shrink-0">
        <h1 className="text-[#0C0B16] text-[28px] font-[590] leading-[1.29] text-left whitespace-nowrap">
          {t("marketplace.header.title")}
        </h1>
      </div>

      <div className="flex gap-4 flex-shrink-0">
        <div className="flex flex-col items-center">
          <button
            onClick={() => onTabChange("spot")}
            className={`text-[18px] font-[590] leading-[1.33] text-left transition-colors whitespace-nowrap ${
              activeTab === "spot" ? "text-[#0C0B16]" : "text-[#686E7E]"
            }`}
          >
            {t("marketplace.header.tabs.spot")}
          </button>
          {activeTab === "spot" && (
            <div className="w-7 h-0 border-b-4 border-[#3FC7C8] mt-1 rounded-full"></div>
          )}
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={() => onTabChange("futures")}
            className={`text-[18px] font-[590] leading-[1.33] text-left transition-colors whitespace-nowrap ${
              activeTab === "futures" ? "text-[#0C0B16]" : "text-[#686E7E]"
            }`}
          >
            {t("marketplace.header.tabs.futures")}
          </button>
          {activeTab === "futures" && (
            <div className="w-7 h-0 border-b-4 border-[#3FC7C8] mt-1 rounded-full"></div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex items-center gap-0.5 p-0.5 bg-[#EDEFF2] border border-[#CED4DA] rounded-[19px]">
          <div
            className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] bg-white border border-[#EDEFF2] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.1)] rounded-2xl transition-all duration-300 ease-in-out ${
              activeSegment === "hit" ? "left-0.5" : "left-[calc(50%+2px)]"
            }`}
          />

          <button
            onClick={() => handleSegmentChange("hit")}
            className="relative z-10 flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-2xl bg-transparent h-8"
          >
            <span className="text-[#696F7F] text-[14px] font-[590] leading-[1.43] text-left">
              {t("marketplace.header.segments.hit")}
            </span>
          </button>

          <button
            onClick={() => handleSegmentChange("all")}
            className="relative z-10 flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-2xl bg-transparent h-8"
          >
            <span className="text-[#696F7F] text-[14px] font-[590] leading-[1.43] text-left">
              {t("marketplace.header.segments.all")}
            </span>
          </button>
        </div>

        <div className="relative flex items-center gap-0.5 p-0.5 bg-[#EDEFF2] border border-[#CED4DA] rounded-[19px]">
          <div
            className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] bg-white border border-[#EDEFF2] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.1)] rounded-2xl transition-all duration-300 ease-in-out ${
              activeIcon === "icon1" ? "left-0.5" : "left-[calc(50%+2px)]"
            }`}
          />

          <button
            onClick={() => handleIconChange("icon1")}
            className="relative z-10 flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-2xl bg-transparent h-8"
          >
            <Image
              src="/images/icon-market-1.svg"
              alt="Market icon"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </button>

          <button
            onClick={() => handleIconChange("icon2")}
            className="relative z-10 flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-2xl bg-transparent h-8"
          >
            <Image
              src="/images/icon-market-2.svg"
              alt="Market icon"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
