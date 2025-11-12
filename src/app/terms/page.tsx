"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function TermsPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
    
    if (scrollHeight <= clientHeight) {
      setScrollProgress(0);
      return;
    }

    const maxScroll = scrollHeight - clientHeight;
    const progress = (scrollTop / maxScroll) * 100;
    const clampedProgress = Math.min(100, Math.max(0, progress));
    
    setScrollProgress(clampedProgress);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const calculateProgress = () => {
      handleScroll();
    };

    const timeoutId1 = setTimeout(calculateProgress, 100);
    const timeoutId2 = setTimeout(calculateProgress, 300);

    const onResize = () => {
      setTimeout(calculateProgress, 100);
    };

    window.addEventListener("resize", onResize);
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex md:hidden flex-col w-full min-h-screen bg-[#F9F9F9]">
      <div
        className="sticky top-0 z-10 flex items-center gap-3 bg-white"
        style={{ padding: "8px 20px" }}
      >
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center w-6 h-6"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_130_4431)">
              <path
                d="M5 12H19"
                stroke="#0C0B16"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12L9 16"
                stroke="#0C0B16"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12L9 8"
                stroke="#0C0B16"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_130_4431">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <div className="flex flex-col justify-center flex-1">
          <h1 className="text-[#0C0B16] text-[16px] font-[600] leading-[1.25] text-left">
            {t("termsModal.title")}
          </h1>
        </div>
      </div>

      <div className="sticky top-[40px] z-10 w-full h-[4px] bg-transparent relative">
        <div className="absolute top-0 left-0 w-full h-[4px] bg-[#AAB0C0] opacity-50"></div>
        <div
          className="absolute top-0 left-0 h-[4px] bg-[#3FC7C8] transition-all duration-100 ease-linear"
          style={{
            width: `${scrollProgress}%`,
          }}
        ></div>
      </div>

      <div
        ref={scrollRef}
        className="overflow-y-auto scrollbar-hide"
        style={{ 
          padding: "20px 20px 32px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          height: "calc(100vh - 44px)",
          maxHeight: "calc(100vh - 44px)"
        } as React.CSSProperties}
        onScroll={handleScroll}
      >
        <div className="flex flex-col gap-5">
          <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left">
            {t("termsModal.lastUpdated")}
          </p>

          <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left">
            {t("termsModal.paragraph1")}
          </p>

          <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
            {t("termsModal.sectionHeading")}
          </h3>

          <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line">
            {t("termsModal.paragraph2")}
          </p>

          <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left">
            {t("termsModal.paragraph3")}
          </p>
        </div>
      </div>
    </div>
  );
}
