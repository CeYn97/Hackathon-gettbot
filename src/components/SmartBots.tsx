"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";
import { AccordionItem, smartBotsData } from "@/data/smart-bots";

interface CircularProgressProps {
  progress: number; // 0-100
  size?: number;
}

function CircularProgress({ progress, size = 32 }: CircularProgressProps) {
  const pathLength = 2 * Math.PI * 10.5;
  const strokeDashoffset = pathLength - (progress / 100) * pathLength;

  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <svg
        className="trading-trigger__loader"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
      >
        <circle
          cx="12"
          cy="12"
          r="10.5"
          stroke="#F4F4F4"
          strokeWidth="3"
        />
        <path
          className="loader-running-line transition-all duration-100 ease-linear"
          d="M22.5 12C22.5 13.3789 22.2284 14.7443 21.7007 16.0182C21.1731 17.2921 20.3996 18.4496 19.4246 19.4246C18.4496 20.3996 17.2921 21.1731 16.0182 21.7007C14.7443 22.2284 13.3789 22.5 12 22.5C10.6211 22.5 9.25574 22.2284 7.98183 21.7007C6.70791 21.1731 5.55039 20.3996 4.57538 19.4246C3.60036 18.4496 2.82694 17.2921 2.29927 16.0182C1.77159 14.7443 1.5 13.3789 1.5 12C1.5 10.6211 1.77159 9.25574 2.29926 7.98182C2.82694 6.70791 3.60036 5.55039 4.57538 4.57538C5.55039 3.60036 6.7079 2.82694 7.98182 2.29927C9.25574 1.77159 10.6211 1.5 12 1.5C13.3789 1.5 14.7443 1.77159 16.0182 2.29926C17.2921 2.82694 18.4496 3.60036 19.4246 4.57538C20.3996 5.55039 21.1731 6.70791 21.7007 7.98182C22.2284 9.25574 22.5 10.6211 22.5 12L22.5 12Z"
          stroke="#3FC7C8"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={pathLength}
          strokeDashoffset={strokeDashoffset}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "12px 12px",
          }}
        />
      </svg>
    </div>
  );
}

export default function SmartBots() {
  const { t } = useTranslation();
  const [accordionItems, setAccordionItems] = useState<AccordionItem[]>(() => {
    return smartBotsData.map((item, index) => ({
      ...item,
      isOpen: index === 0,
    }));
  });
  
  const [currentProgress, setCurrentProgress] = useState(0);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const openItemIdRef = useRef<string | null>(null);


  useEffect(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    setCurrentProgress(0);
    startTimeRef.current = Date.now();

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min((elapsed / 15000) * 100, 100);
      setCurrentProgress(progress);

        if (progress >= 100) {
          setAccordionItems((prev) => {
            const currentIndex = prev.findIndex((item) => item.isOpen);
            const nextIndex = (currentIndex + 1) % prev.length;
            
            return smartBotsData.map((sourceItem, index) => ({
              ...sourceItem,
              isOpen: index === nextIndex,
            }));
          });
        
        startTimeRef.current = Date.now();
        setCurrentProgress(0);
      }
    }, 50);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);
  useEffect(() => {
    const openItem = accordionItems.find((item) => item.isOpen);
    const currentOpenId = openItem?.id || null;
    
    if (openItemIdRef.current !== currentOpenId) {
      openItemIdRef.current = currentOpenId;
      setCurrentProgress(0);
      startTimeRef.current = Date.now();
    }
  }, [accordionItems]);

  const toggleAccordion = (id: string) => {
    setAccordionItems((prev) => {
      const clickedItem = prev.find((item) => item.id === id);
      const isCurrentlyOpen = clickedItem?.isOpen;
      
      if (isCurrentlyOpen) {
        return smartBotsData.map((sourceItem) => ({
          ...sourceItem,
          isOpen: false,
        }));
      }
      
      return smartBotsData.map((sourceItem) => ({
        ...sourceItem,
        isOpen: sourceItem.id === id,
      }));
    });
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
                    {item.isOpen ? (
                      <CircularProgress progress={currentProgress} size={32} />
                    ) : (
                      <div
                        className={`transition-transform duration-300 ease-in-out ${
                          item.isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <Image
                          src="/images/icon-1.svg"
                          alt="Closed"
                          width={32}
                          height={32}
                          className="w-8 h-8"
                        />
                      </div>
                    )}
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
            {(() => {
              const openItem = accordionItems.find((item) => item.isOpen) || accordionItems[0];
              const sourceItem = smartBotsData.find((item) => item.id === openItem.id) || smartBotsData[0];
              const imageRef = openItem.imageRef || sourceItem?.imageRef;
              
              if (!imageRef) return null;
              
              return (
                <Image
                  src={`/images/${imageRef}`}
                  alt={t(openItem.titleKey)}
                  width={1588}
                  height={1590}
                  className="w-full h-full object-cover"
                />
              );
            })()}
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
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <h3 className="text-[#0C0B16] text-[18px] font-[600] leading-[1.22] text-left flex-1">
                      {t(item.titleKey)}
                    </h3>

                    
                  </div>

                  <p className="text-[#828A9D] text-[14px] font-[500] leading-[1.29] text-left">
                    {t(item.contentKey)}
                  </p>

                  {item.isOpen && (() => {
                    const sourceItem = smartBotsData.find((s) => s.id === item.id);
                    const imageRef = item.imageRef || sourceItem?.imageRef;
                    
                    if (!imageRef) return null;
                    
                    return (
                      <div className="w-full h-[280px] rounded-[8px] overflow-hidden">
                        <Image
                          src={`/images/${imageRef}`}
                          alt={t(item.titleKey)}
                          width={400}
                          height={280}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    );
                  })()}
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
