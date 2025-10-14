"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { getFAQItemsBySection } from "@/data/faq-dictionary";

interface PromoBlockProps {
  onSupportClick?: () => void;
}

export default function PromoBlock({ onSupportClick }: PromoBlockProps) {
  const [selectedSection, setSelectedSection] = useState<string>("general");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [isSectionDropdownOpen, setIsSectionDropdownOpen] = useState<boolean>(false);
  const sectionDropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const currentItems = getFAQItemsBySection(selectedSection);

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const sectionTitles: Record<string, string> = {
    general: "faq.dictionary.general.nav",
    "getting-started": "faq.dictionary.getting-started.nav", 
    financial: "faq.dictionary.financial.nav",
    referral: "faq.dictionary.referral.nav",
    security: "faq.dictionary.security.nav",
    technical: "faq.dictionary.technical.nav"
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sectionDropdownRef.current && !sectionDropdownRef.current.contains(event.target as Node)) {
        setIsSectionDropdownOpen(false);
      }
    };

    if (isSectionDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isSectionDropdownOpen]);

  return (
    <>
      <section className="hidden md:flex flex-col items-center w-full gap-12 px-[120px] py-16 pb-20 bg-[#F9F9F9]">
        <div className="flex flex-col items-center w-full gap-12">
          <h1 className="text-[#0C0B16] text-[52px] font-[600] leading-[1.23] text-center">
            {t("faq.promo.heading")}
          </h1>

          <div className="flex flex-col w-full gap-6 p-12 bg-[#FFFFFF] rounded-[24px]">
            <div className="flex gap-3 justify-center">
              {Object.entries(sectionTitles).map(([sectionId, title]) => (
                <button
                  key={sectionId}
                  onClick={() => setSelectedSection(sectionId)}
                  className={`flex justify-center items-center gap-1 px-4 py-[10px] rounded-[999px] transition-colors duration-200 whitespace-nowrap ${
                    selectedSection === sectionId
                      ? 'bg-[#3FC7C8] text-[#FFFFFF]'
                      : 'bg-[#F9F9F9] text-[#0C0B16] border border-[#DFDFDF] hover:bg-[#E9E9E9]'
                  }`}
                >
                  <span className="text-[16px] font-[500] leading-[1.25] text-center">
                    {t(title)}
                  </span>
                </button>
              ))}
            </div>

            <div className="w-full h-[1px] bg-[#EDEFF2]"></div>

            <div className="flex flex-col gap-3">
              {currentItems.map((item) => {
                const isOpen = openItems.has(item.id);
                
                return (
                  <div
                    key={item.id}
                    className="flex flex-col bg-[#F9F9F9] rounded-[12px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="flex items-center justify-between w-full gap-4 px-8 py-6 text-left hover:bg-[#E9E9E9] transition-colors duration-200"
                    >
                      <span className="text-[#0C0B16] text-[20px] font-[500] leading-[1.2] text-left flex-1">
                        {t(item.question)}
                      </span>

                      <div className="w-4 h-4 flex items-center justify-center">
                        <div className={`transition-transform duration-300 ease-in-out ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}>
                          <Image
                            src="/images/icon-2.svg"
                            alt="Arrow"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-8 py-6">
                        <p className="text-[#0C0B16] text-[20px] font-[400] leading-[1.2] text-left">
                          {t(item.answer)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col items-center gap-8 pt-6">
              <p className="text-[#0C0B16] text-[20px] font-[500] leading-[1.2] text-center">
                {t("faq.promo.supportText")}
              </p>

              <button
                onClick={onSupportClick}
                className="flex justify-center items-center gap-1 px-8 py-[10px] bg-[#3FC7C8] rounded-[999px] hover:bg-[#36B3B4] transition-colors duration-200"
              >
                <span className="text-[#FFFFFF] text-[16px] font-[400] leading-[1.25] text-center">
                  {t("faq.promo.supportButton")}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex md:hidden flex-col w-full gap-8 px-5 py-8 bg-[#F9F9F9]">
        <h1 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-center">
          {t("faq.promo.heading")}
        </h1>

        <div className="flex flex-col w-full gap-6 p-5 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-[12px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)]">
          <div className="relative" ref={sectionDropdownRef}>
            <button
              onClick={() => setIsSectionDropdownOpen(!isSectionDropdownOpen)}
              className="flex justify-between items-center w-full px-4 py-[10px] bg-[#3FC7C8] rounded-[999px] hover:bg-[#36B3B4] transition-colors duration-200"
            >
              <span className="text-[#FFFFFF] text-[16px] font-[400] leading-[1.25] text-center">
                {t(sectionTitles[selectedSection])}
              </span>
              <div className={`transition-transform duration-200 ${
                isSectionDropdownOpen ? 'rotate-180' : 'rotate-0'
              }`}>
                <Image
                  src="/images/icon-2.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </div>
            </button>

            {isSectionDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#CED4DA] rounded-xl shadow-lg z-20">
                <div className="py-1">
                  {Object.entries(sectionTitles).map(([sectionId, title]) => (
                    <button
                      key={sectionId}
                      onClick={() => {
                        setSelectedSection(sectionId);
                        setIsSectionDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-[14px] font-[500] hover:bg-[#F8F9FA] transition-colors ${
                        selectedSection === sectionId ? 'bg-[#F8F9FA] text-[#3FC7C8]' : 'text-[#0C0B16]'
                      }`}
                    >
                      {t(title)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="w-full h-[1px] bg-[#EDEFF2]"></div>

          <div className="flex flex-col gap-2">
            {currentItems.map((item) => {
              const isOpen = openItems.has(item.id);
              
              return (
                <div
                  key={item.id}
                  className="flex flex-col bg-[#F9F9F9] rounded-[8px] overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="flex items-center w-full gap-4 px-4 py-4 text-left hover:bg-[#E9E9E9] transition-colors duration-200"
                  >
                    <span className="text-[#0C0B16] text-[14px] font-[500] leading-[1.29] text-left flex-1">
                      {t(item.question)}
                    </span>
                    <div className={`transition-transform duration-300 ease-in-out ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}>
                      <Image
                        src="/images/icon-2.svg"
                        alt="Arrow"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 py-4">
                      <p className="text-[#0C0B16] text-[14px] font-[400] leading-[1.29] text-left">
                        {t(item.answer)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col w-full gap-4 pt-6">
            <p className="text-[#0C0B16] text-[14px] font-[500] leading-[1.29] text-center">
              {t("faq.promo.supportText")}
            </p>

            <button
              onClick={onSupportClick}
              className="flex justify-center items-center w-full px-5 py-2 bg-[#3FC7C8] rounded-[999px]"
            >
              <span className="text-[#FFFFFF] text-[12px] font-[400] leading-[1.17] text-center">
                {t("faq.promo.supportButton")}
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
