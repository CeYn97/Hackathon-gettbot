"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Period, TariffsState } from "@/types/tariffs";
import { tabsConfig, tariffPlans } from "@/data/tariffs";
import Image from "next/image";

export default function Tariffs() {
  const { t } = useTranslation();
  const [state, setState] = useState<TariffsState>({
    selectedPeriod: "6months",
    selectedPlan: null,
  });

  const handlePeriodChange = (period: Period) => {
    setState((prev) => ({
      ...prev,
      selectedPeriod: period,
      selectedPlan: null,
    }));
  };

  const handlePlanSelect = (planId: string) => {
    setState((prev) => ({
      ...prev,
      selectedPlan: prev.selectedPlan === planId ? null : planId,
    }));
  };

  return (
    <>
      <section className="hidden md:flex flex-col items-center w-full gap-12 px-[120px] py-20 bg-[#F9F9F9]">
        <div className="flex items-center gap-6 w-full">
          <h2 className="text-[#0C0B16] text-[52px] font-[600] leading-[1.23] text-left">
            {t("tariffs.heading")}
          </h2>
          
          <Image
            src="/images/Plate.svg"
            alt={t("tariffs.giftBadgeAlt")}
            width={238}
            height={34}
            className="w-auto h-auto -mt-[25px] -ml-[5px]"
          />
        </div>

        <div className="flex flex-col w-full gap-8">
        <div className="flex gap-1 p-1 bg-[#F4F4F4] border border-[#E2E2E2] border-[1px] rounded-[8px] w-fit">
          {tabsConfig.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handlePeriodChange(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-[8px] transition-all duration-200 ${
                state.selectedPeriod === tab.id
                  ? "bg-[#FFFFFF] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)]"
                  : "bg-transparent hover:bg-[#E9E9E9]"
              }`}
            >
              <span className="text-[#0C0B16] text-[16px] font-[500] leading-[1.25] text-center">
                {t(tab.label)}
              </span>
              
              {tab.badge && (
                <div className="flex justify-center items-center gap-1 px-1.5 py-0.5 bg-[#D1F2F2] border border-[#3FC7C8] border-[0.5px] rounded-[6px]">
                  <span className="text-[#3FC7C8] text-[12px] font-[600] leading-[1.33] text-center">
                    {t(tab.badge.text)}
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="flex justify-stretch items-stretch w-full gap-5">
          {tariffPlans.map((plan) => {
            const currentPrice = plan.prices[state.selectedPeriod];
            const isSelected = state.selectedPlan === plan.id;
            
            return (
              <div
                key={plan.id}
                className={`flex flex-col gap-6 p-5 rounded-[16px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] transition-all duration-300 ease-in-out w-[303px] h-[288px] ${
                  isSelected 
                    ? "bg-[#3FC7C8] transform scale-[1.02]" 
                    : "bg-[#FFFFFF] hover:transform hover:scale-[1.01]"
                }`}
              >
                <div className="flex justify-between items-center w-full gap-2">
                  <h3 className={`text-[28px] font-[600] leading-[1.14] text-left whitespace-nowrap transition-colors duration-300 flex-1 ${
                    isSelected ? "text-[#FFFFFF]" : "text-[#0C0B16]"
                  }`}>
                    {t(plan.name)}
                  </h3>
                  
                  <div className="flex justify-center items-center gap-2 px-4 py-2 bg-[#F4F4F4] rounded-[999px] transition-all duration-300 flex-shrink-0">
                    <span className="text-[#0C0B16] text-[14px] font-[500] leading-[1.29] text-center whitespace-nowrap">
                      {t(`tariffs.planTypes.${plan.planType.toLowerCase()}`)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center w-full gap-1">
                  <div className="flex w-full gap-2">
                    <span className={`text-[52px] font-[590] leading-[1.08] text-left transition-colors duration-300 ${
                      isSelected ? "text-[#FFFFFF]" : "text-[#0C0B16]"
                    }`}>
                      ${currentPrice.current}
                    </span>
                    
                    {currentPrice.original && (
                      <div className="flex flex-col justify-center items-center h-6 relative">
                        <span className={`text-[24px] font-[590] leading-[1.17] text-left transition-colors duration-300 ${
                          isSelected ? "text-[#A3E4E5]" : "text-[#AAB0C0]"
                        }`}>
                          ${currentPrice.original}
                        </span>
                        <div className={`absolute top-1/2 left-0 w-full h-[1px] transform -translate-y-1/2 transition-colors duration-300 ${
                          isSelected ? "bg-[#A3E4E5]" : "bg-[#AAB0C0]"
                        }`} />
                      </div>
                    )}
                  </div>
                  
                  <span className={`text-[14px] font-[510] leading-[1.29] text-left transition-colors duration-300 ${
                    isSelected ? "text-[#FFFFFF]" : "text-[#AAB0C0]"
                  }`}>
                    {t(currentPrice.condition)}
                  </span>
                </div>

                <div className="flex flex-col w-full">
                  <div className="h-8 flex items-center w-full gap-2 mb-5">
                    {currentPrice.economy && (
                      <>
                        <div className="w-4 h-4 transition-all duration-300">
                          <Image
                            src={isSelected ? "/images/icon-white.svg" : "/images/icon-sale.svg"}
                            alt="Sale icon"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                          />
                        </div>
                        
                        <span className={`text-[12px] font-[510] leading-[1.33] text-left transition-colors duration-300 ${
                          isSelected ? "text-[#FFFFFF]" : "text-[#0C0B16]"
                        }`}>
                          {t(currentPrice.economy)}
                        </span>
                      </>
                    )}
                  </div>

                  <button
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`flex justify-center items-center w-full py-[10px] px-4 rounded-[999px] transition-all duration-200 ${
                      isSelected
                        ? "bg-[#FFFFFF] text-[#0C0B16]"
                        : "bg-[#3FC7C8] text-[#FFFFFF] hover:bg-[#161616]"
                    }`}
                  >
                    <span className="text-[16px] font-[400] leading-[1.25] text-center">
                      {t("common.buttons.select")}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

      <section className="flex md:hidden flex-col w-full gap-8 px-5 py-8 bg-[#F9F9F9]">
        <div className="flex items-center gap-2 w-full">
          <h2 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-left">
            {t("tariffs.heading")}
          </h2>
          
          <Image
            src="/images/Plate.svg"
            alt={t("tariffs.giftBadgeAlt")}
            width={127}
            height={18}
            className="w-[127px] h-[18px]"
          />
        </div>

        <div className="flex flex-col w-full gap-5">
          <div className="flex gap-1 p-1 bg-[#F4F4F4] border border-[#E2E2E2] border-[0.5px] rounded-[4px] w-full">
            {tabsConfig.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handlePeriodChange(tab.id)}
                className={`flex items-center gap-1 px-2 py-2 rounded-[4px] transition-all duration-200 flex-1 ${
                  state.selectedPeriod === tab.id
                    ? "bg-[#FFFFFF] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)]"
                    : "bg-transparent hover:bg-[#E9E9E9]"
                }`}
              >
                <span className="text-[#0C0B16] text-[10px] font-[500] leading-[1.2] text-center">
                  {t(tab.label)}
                </span>
                
                {tab.badge && (
                  <div className="flex justify-center items-center gap-1 px-1.5 py-0.5 bg-[#D1F2F2] border border-[#3FC7C8] border-[0.6px] rounded-[4px]">
                    <span className="text-[#3FC7C8] text-[8px] font-[600] leading-[1.25] text-center">
                      {t(tab.badge.text)}
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-col w-full gap-2">
            {tariffPlans.map((plan) => {
              const currentPrice = plan.prices[state.selectedPeriod];
              const isSelected = state.selectedPlan === plan.id;
              
              return (
                <div
                  key={plan.id}
                  className={`flex flex-col gap-6 p-5 rounded-[16px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] transition-all duration-300 ease-in-out w-full ${
                    isSelected 
                      ? "bg-[#3FC7C8] transform scale-[1.02]" 
                      : "bg-[#FFFFFF] hover:transform hover:scale-[1.01]"
                  }`}
                >
                  <div className="flex justify-between items-start w-full gap-6">
                    <div className="flex flex-col gap-1 w-[90px]">
                      <span className={`text-[20px] font-[600] leading-[1.2] text-left transition-colors duration-300 ${
                        isSelected ? "text-[#FFFFFF]" : "text-[#0C0B16]"
                      }`}>
                        {t(plan.name)}
                      </span>
                      
                      <div className={`flex justify-center items-center gap-2 px-3 py-1 rounded-full transition-all duration-300 ${
                        isSelected ? "bg-[#F4F4F4]" : "bg-[#F4F4F4]"
                      }`}>
                        <span className="text-[#0C0B16] text-[12px] font-[500] leading-[1.33] text-center">
                          {t(`tariffs.planTypes.${plan.planType.toLowerCase()}`)}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center gap-1 w-[174px]">
                      <div className="flex w-full gap-1">
                        <span className={`text-[28px] font-[590] leading-[1.14] text-left transition-colors duration-300 ${
                          isSelected ? "text-[#FFFFFF]" : "text-[#0C0B16]"
                        }`}>
                          ${currentPrice.current}
                        </span>
                        
                        {currentPrice.original && (
                          <div className="flex flex-col justify-center items-center h-6 relative">
                            <span className={`text-[16px] font-[590] leading-[1.25] text-left transition-colors duration-300 ${
                              isSelected ? "text-[#A3E4E5]" : "text-[#AAB0C0]"
                            }`}>
                              ${currentPrice.original}
                            </span>
                            <div className={`absolute top-1/2 left-0 w-full h-[1px] transform -translate-y-1/2 transition-colors duration-300 ${
                              isSelected ? "bg-[#A3E4E5]" : "bg-[#AAB0C0]"
                            }`} />
                          </div>
                        )}
                      </div>
                      
                      <span className={`text-[12px] font-[510] leading-[1.33] text-left transition-colors duration-300 ${
                        isSelected ? "text-[#FFFFFF]" : "text-[#AAB0C0]"
                      }`}>
                        {t(currentPrice.condition)}
                      </span>
                    </div>
                  </div>

                  
                  <div className="flex flex-col w-full gap-4">
                   
                    {currentPrice.economy && (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 transition-all duration-300">
                          <Image
                            src={isSelected ? "/images/icon-white.svg" : "/images/icon-sale.svg"}
                            alt="Sale icon"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                          />
                        </div>
                        
                        <span className={`text-[12px] font-[510] leading-[1.33] text-left transition-colors duration-300 ${
                          isSelected ? "text-[#FFFFFF]" : "text-[#0C0B16]"
                        }`}>
                          {t(currentPrice.economy)}
                        </span>
                      </div>
                    )}

                   
                    <button
                      onClick={() => handlePlanSelect(plan.id)}
                      className={`flex justify-center items-center w-full py-2.5 px-4 rounded-full transition-all duration-200 ${
                        isSelected
                          ? "bg-[#FFFFFF] text-[#0C0B16]"
                          : "bg-[#3FC7C8] text-[#FFFFFF] hover:bg-[#161616]"
                      }`}
                    >
                      <span className="text-[16px] font-[400] leading-[1.25] text-center">
                        {t("common.buttons.select")}
                      </span>
                    </button>
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
