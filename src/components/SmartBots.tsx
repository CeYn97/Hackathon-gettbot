"use client";

import { useState } from "react";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";
import { AccordionItem, smartBotsData } from "@/data/smart-bots";

export default function SmartBots() {
  const { t } = useTranslation();
  const [accordionItems, setAccordionItems] =
    useState<AccordionItem[]>(smartBotsData);

  const toggleAccordion = (id: string) => {
    setAccordionItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <>
      <section className="hidden md:flex flex-col items-center w-full gap-12 px-[120px] py-20 bg-[#F9F9F9]">
        <h2 className="text-[#0C0B16] text-[52px] font-[600] leading-[1.23] text-center">
          <Trans
            i18nKey="smartBots.title"
            components={{
              highlight: <span className="text-[#3FC7C8]" />,
              break: <br />,
            }}
          />
        </h2>

        <div className="flex items-start w-full gap-5">
          <div className="flex flex-col w-[518px]">
            {accordionItems.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col justify-center p-8 bg-white rounded-[24px] ${
                  item.isOpen ? "gap-3 mb-3" : "mb-3"
                }`}
              >
                <div
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <h3 className="text-[#0C0B16] text-[24px] font-[600] leading-[1.17] text-left flex-1">
                    {t(item.titleKey)}
                  </h3>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div
                      className={`transition-transform duration-300 ease-in-out ${
                        item.isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      {item.isOpen ? (
                        <Image
                          src="/images/icon.svg"
                          alt="Opened"
                          width={32}
                          height={32}
                          className="w-8 h-8"
                        />
                      ) : (
                        <Image
                          src="/images/icon-1.svg"
                          alt="Closed"
                          width={32}
                          height={32}
                          className="w-8 h-8"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    item.isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#828A9D] text-[20px] font-[500] leading-[1.2] text-left">
                    {t(item.contentKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 h-[734px] rounded-[24px] overflow-hidden">
            <Image
              src="/images/smartbots-image-1d2a07.png"
              alt="Smart Bots Dashboard"
              width={1588}
              height={1590}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="flex md:hidden flex-col items-center w-full gap-12 px-5 py-8 bg-[#F9F9F9]">
        <h2 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-center">
          <Trans
            i18nKey="smartBots.title"
            components={{
              highlight: <span className="text-[#3FC7C8]" />,
              break: <br />,
            }}
          />
        </h2>

        <div className="flex flex-col w-full gap-2">
          {accordionItems.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col bg-white rounded-[12px] ${
                item.isOpen ? "gap-8 p-5" : "p-5"
              }`}
            >
              {item.isOpen ? (
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    <h3 className="text-[#0C0B16] text-[18px] font-[600] leading-[1.22] text-left flex-1">
                      {t(item.titleKey)}
                    </h3>

                    <div
                      className="w-8 h-8 flex items-center justify-center cursor-pointer"
                      onClick={() => toggleAccordion(item.id)}
                    >
                      <Image
                        src="/images/icon.svg"
                        alt="Close"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                  </div>

                  <p className="text-[#828A9D] text-[14px] font-[500] leading-[1.29] text-left">
                    {t(item.contentKey)}
                  </p>

                  {item.id === accordionItems[0].id && (
                    <div className="w-full h-[280px] rounded-[8px] overflow-hidden">
                      <Image
                        src="/images/smartbots-image-1d2a07.png"
                        alt="Smart Bots Dashboard"
                        width={400}
                        height={280}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <h3 className="text-[#0C0B16] text-[18px] font-[600] leading-[1.22] text-left flex-1">
                    {t(item.titleKey)}
                  </h3>

                  <div className="w-8 h-8 flex items-center justify-center">
                    <div
                      className={`transition-transform duration-300 ease-in-out ${
                        item.isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <Image
                        src="/images/icon-1.svg"
                        alt="Arrow down"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
