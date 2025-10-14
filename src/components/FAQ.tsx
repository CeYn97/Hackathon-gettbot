"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FAQProps } from "@/types/faq";
import { getAllFAQItems, getAllFAQSections } from "@/data/faq-dictionary";

export default function FAQ({
  items,
  sections,
  titleKey,
  subtitleKey,
  buttonTextKey,
  onButtonClick,
  showSections = false,
}: FAQProps) {
  const displayItems = items || getAllFAQItems();
  const displaySections = sections || getAllFAQSections();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const { t } = useTranslation();

  const heading = t(titleKey ?? "faq.defaultTitle");
  const description = t(subtitleKey ?? "faq.defaultSubtitle");
  const actionLabel = t(buttonTextKey ?? "faq.defaultCta");

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <>
      <section className="hidden md:flex flex-col items-center w-full px-[120px] py-20 bg-[#F9F9F9] relative">
        <div
          className="absolute"
          style={{
            left: "100px",
            top: "-80px",
            zIndex: 1,
          }}
        >
          <Image
            src="/images/star-6-faq.svg"
            alt="Star 6 decorative element"
            width={800}
            height={589}
            className="w-full h-full"
          />
        </div>

        <div className="flex justify-between items-start w-full gap-20 p-16 pb-14 pl-12 bg-[rgba(255,255,255,0.35)] backdrop-blur-[64px] rounded-[16px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] relative z-10">
          <div className="flex flex-col gap-8 w-[470px]">
            <div className="flex flex-col gap-10">
              <h2 className="text-[#0C0B16] text-[48px] font-[600] leading-[1.17] text-left whitespace-pre-line">
                {heading}
              </h2>

              <p className="text-[#0C0B16] text-[20px] font-[500] leading-[1.2] text-left w-[400px]">
                {description}
              </p>
            </div>

            <button
              onClick={onButtonClick}
              className="flex justify-center items-center gap-1 w-[240px] py-[10px] bg-[#3FC7C8] rounded-[999px] hover:bg-[#36B3B4] transition-colors duration-200"
            >
              <span className="text-[#FFFFFF] text-[16px] font-[400] leading-[1.25] text-center">
                {actionLabel}
              </span>
            </button>
          </div>

          <div className="flex flex-col gap-3 w-[678px]">
            {showSections
              ? displaySections.map((section) => (
                  <div key={section.id} className="flex flex-col gap-3">
                    <h3 className="text-[#0C0B16] text-[24px] font-[600] leading-[1.2] text-left mb-2">
                      {t(section.title)}
                    </h3>

                    {section.items.map((item) => {
                      const isOpen = openItems.has(item.id);

                      return (
                        <div
                          key={item.id}
                          className="flex flex-col bg-[#FFFFFF] rounded-[12px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(item.id)}
                            className="flex items-center justify-between w-full gap-4 px-8 py-6 text-left hover:bg-[#F9F9F9] transition-colors duration-200"
                          >
                            <span className="text-[#0C0B16] text-[20px] font-[500] leading-[1.2] text-left flex-1">
                              {t(item.question)}
                            </span>

                            <div className="w-4 h-4 flex items-center justify-center">
                              <div
                                className={`transition-transform duration-300 ease-in-out ${
                                  isOpen ? "rotate-180" : "rotate-0"
                                }`}
                              >
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
                              isOpen
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="px-8 pb-6">
                              <p className="text-[#0C0B16] text-[20px] font-[400] leading-[1.2] text-left">
                                {t(item.answer)}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))
              : displayItems.map((item) => {
                  const isOpen = openItems.has(item.id);

                  return (
                    <div
                      key={item.id}
                      className="flex flex-col bg-[#FFFFFF] rounded-[12px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="flex items-center justify-between w-full gap-4 px-8 py-6 text-left hover:bg-[#F9F9F9] transition-colors duration-200"
                      >
                        <span className="text-[#0C0B16] text-[20px] font-[500] leading-[1.2] text-left flex-1">
                          {t(item.question)}
                        </span>

                        <div className="w-4 h-4 flex items-center justify-center">
                          <div
                            className={`transition-transform duration-300 ease-in-out ${
                              isOpen ? "rotate-180" : "rotate-0"
                            }`}
                          >
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
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-8 pb-6">
                          <p className="text-[#0C0B16] text-[20px] font-[400] leading-[1.2] text-left">
                            {t(item.answer)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>

      <section className="flex md:hidden flex-col w-full px-5 py-8 bg-[#F9F9F9]">
        <div className="flex flex-col w-full gap-10 p-8 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-[12px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-6">
              <h2 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-left">
                {heading}
              </h2>

              <p className="text-[#0C0B16] text-[14px] font-[500] leading-[1.29] text-left">
                {description}
              </p>
            </div>

            <button
              onClick={onButtonClick}
              className="flex justify-center items-center gap-1 w-fit px-5 py-2 bg-[#3FC7C8] rounded-full hover:bg-[#36B3B4] transition-colors duration-200"
            >
              <span className="text-[#FFFFFF] text-[12px] font-[400] leading-[1.17] text-center">
                {actionLabel}
              </span>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {showSections
              ? displaySections.map((section) => (
                  <div key={section.id} className="flex flex-col gap-2">
                    <h3 className="text-[#0C0B16] text-[18px] font-[600] leading-[1.22] text-left mb-1">
                      {t(section.title)}
                    </h3>

                    {section.items.map((item) => {
                      const isOpen = openItems.has(item.id);

                      return (
                        <div
                          key={item.id}
                          className="flex flex-col bg-[#FFFFFF] rounded-[8px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(item.id)}
                            className="flex items-center justify-between w-full gap-4 px-4 py-4 text-left hover:bg-[#F9F9F9] transition-colors duration-200"
                          >
                            <span className="text-[#0C0B16] text-[14px] font-[500] leading-[1.29] text-left flex-1">
                              {t(item.question)}
                            </span>

                            <div className="w-4 h-4 flex items-center justify-center">
                              <div
                                className={`transition-transform duration-300 ease-in-out ${
                                  isOpen ? "rotate-180" : "rotate-0"
                                }`}
                              >
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
                              isOpen
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="px-4 pb-4">
                              <p className="text-[#0C0B16] text-[14px] font-[400] leading-[1.29] text-left">
                                {t(item.answer)}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))
              : displayItems.map((item) => {
                  const isOpen = openItems.has(item.id);

                  return (
                    <div
                      key={item.id}
                      className="flex flex-col bg-[#FFFFFF] rounded-[8px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="flex items-center justify-between w-full gap-4 px-4 py-4 text-left hover:bg-[#F9F9F9] transition-colors duration-200"
                      >
                        <span className="text-[#0C0B16] text-[14px] font-[500] leading-[1.29] text-left flex-1">
                          {t(item.question)}
                        </span>

                        <div className="w-4 h-4 flex items-center justify-center">
                          <div
                            className={`transition-transform duration-300 ease-in-out ${
                              isOpen ? "rotate-180" : "rotate-0"
                            }`}
                          >
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
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-4 pb-4">
                          <p className="text-[#0C0B16] text-[14px] font-[400] leading-[1.29] text-left">
                            {t(item.answer)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>
    </>
  );
}
