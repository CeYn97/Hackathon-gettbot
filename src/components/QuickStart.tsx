import Image from "next/image";
import { useTranslation } from "react-i18next";
import { StepCard, quickStartSteps } from "@/data/quick-start";

interface QuickStartProps {
  titleKey?: string;
  steps?: StepCard[];
  showImages?: boolean;
  cardHeight?: string;
  gap?: string;
  showStar?: boolean;
  starPosition?: {
    left: string;
    top: string;
    zIndex: number;
  };
  imagePath?: string;
}

export default function QuickStart({
  titleKey,
  steps = quickStartSteps,
  showImages = true,
  cardHeight = "h-[364px]",
  gap = "gap-5",
  showStar = false,
  starPosition = {
    left: "419px",
    top: "72px",
    zIndex: 0,
  },
  imagePath = "quick-start",
}: QuickStartProps) {
  const { t } = useTranslation();
  const heading = titleKey ? t(titleKey) : t("quickStart.defaultTitle");

  return (
    <>
      <section className="hidden md:flex flex-col w-[1512px] items-center px-[120px] py-16 bg-[#F9F9F9] relative">
        {showStar && (
          <div
            className="absolute"
            style={{
              left: starPosition.left,
              top: starPosition.top,
              zIndex: starPosition.zIndex,
            }}
          >
            <Image
              src="/images/star-6-main.svg"
              alt="Star 6 decorative element"
              width={674}
              height={560}
            />
          </div>
        )}

        <h2 className="text-[#0C0B16] text-[52px] font-[600] leading-[1.23] text-left w-full pb-16">
          {heading}
        </h2>

        <div
          className={`flex justify-stretch items-stretch w-full ${gap} relative z-10`}
        >
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex flex-col gap-10 px-4 pt-4 pb-6 bg-[#FFFFFF] rounded-[20px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] flex-1 ${cardHeight}`}
            >
              {showImages && step.imageRef && (
                <div className="w-full h-[196px] rounded-[16px] border border-[#E2E2E2] border-[1px] overflow-hidden">
                  <Image
                    src={`/images/${imagePath}-${step.id}.${
                      imagePath === "quick-start" ? "svg" : "png"
                    }`}
                    alt={step.imageAlt || ""}
                    width={400}
                    height={196}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-col gap-2">
                <span className="text-[#828A9D] text-[20px] font-[500] leading-[1.2] text-left">
                  {t(step.stepKey)}
                </span>

                <span className="text-[#0C0B16] text-[24px] font-[500] leading-[1.17] text-left">
                  {t(step.titleKey)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex md:hidden flex-col w-full gap-8 py-8 bg-[#F9F9F9]">
        <h2 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-left px-5">
          {heading}
        </h2>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 pl-5 pr-5">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col gap-6 p-4 pt-4 pb-6 bg-[#FFFFFF] rounded-[16px] border border-[#E2E2E2] border-[1px] w-[236px] flex-shrink-0"
            >
              {showImages && step.imageRef && (
                <div className="w-full h-[147px] rounded-[8px] border border-[#E2E2E2] border-[1px] overflow-hidden">
                  <Image
                    src={`/images/${imagePath}-${step.id}.${
                      imagePath === "quick-start" ? "svg" : "png"
                    }`}
                    alt={step.imageAlt || ""}
                    width={400}
                    height={147}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-col gap-1">
                <span className="text-[#828A9D] text-[14px] font-[500] leading-[1.29] text-left">
                  {t(step.stepKey)}
                </span>

                <span className="text-[#0C0B16] text-[18px] font-[500] leading-[1.22] text-left">
                  {t(step.titleKey)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
