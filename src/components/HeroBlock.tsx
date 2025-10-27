import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";

export default function HeroBlock() {
  const { t } = useTranslation();
  const featureKeys = [
    "hero.features.noSetup",
    "hero.features.adaptiveStrategies",
    "hero.features.fullAutomation",
    "hero.features.security",
  ];

  return (
    <>
      <section className="hidden md:flex flex-col items-center w-full gap-12 px-[120px] py-16 pb-20">
        <h1 className="text-[#0C0B16] text-[52px] font-[600] leading-[1.23] text-center">
          <Trans
            i18nKey="hero.title"
            components={{
              highlight: <span className="text-[#3FC7C8]" />,
              break: <br />,
            }}
          />
        </h1>

        <div className="flex items-center w-full gap-12 px-[88px]">
          <div className="flex flex-col gap-4 w-[450px]">
            <p className="text-[#AAB0C0] text-[20px] font-[500] leading-[1.2] text-left">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col gap-3 pl-3">
              {featureKeys.map((featureKey, index) => (
                <div key={featureKey} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#3FC7C8] rounded-[11.43px] flex items-center justify-center">
                    <Image
                      src={`/images/check-icon${
                        index === 0 ? "" : `-${index + 1}`
                      }.svg`}
                      alt="Check"
                      width={12}
                      height={12}
                      className="w-12 h-12"
                    />
                  </div>
                  <span className="text-[#0C0B16] text-[24px] font-[600] leading-[1.67] text-left">
                    {t(featureKey)}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 ">
              <a
                href="https://app.gettbot.io/auth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-start items-center p-1 bg-[#F4F4F4] border border-[#DFDFDF] rounded-full hover:bg-[#E9E9E9] transition-colors w-fit"
              >
                <div className="flex justify-start items-center gap-1 px-4 py-[10px] bg-[#3FC7C8] rounded-full shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)]">
                  <span className="text-[#F9F9F9] text-[16px] font-[500] leading-[1.25] text-center whitespace-nowrap">
                    {t("hero.cta")}
                  </span>
                  <Image
                    src="/images/chevron-right.svg"
                    alt="Arrow right"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </div>
              </a>
              <p className="text-[#AAB0C0] text-[16px] font-[500] leading-[1.25] text-left">
                {t("hero.note")}
              </p>
            </div>
          </div>

          <div className="flex-1">
            <Image
              src="/images/hero-laptop.svg"
              alt="GettBot Dashboard"
              width={598}
              height={390}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section className="flex md:hidden flex-col gap-12 px-5 pt-8">
        <h1 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-center w-[320px] mx-auto">
          <Trans
            i18nKey="hero.title"
            components={{
              highlight: <span className="text-[#3FC7C8]" />,
              break: <br />,
            }}
          />
        </h1>

        <div className="flex flex-col gap-4">
          <div className="w-full">
            <Image
              src="/images/hero-laptop.svg"
              alt="GettBot Dashboard"
              width={320}
              height={208}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="flex flex-col gap-4 pr-12">
            <p className="text-[#AAB0C0] text-[12px] font-[500] leading-[1.33] text-left">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col gap-3 pl-3">
              {featureKeys.map((featureKey, index) => (
                <div key={featureKey} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#3FC7C8] rounded-[9.52px] flex items-center justify-center">
                    <Image
                      src={`/images/check-icon${
                        index === 0 ? "" : `-${index + 1}`
                      }.svg`}
                      alt="Check"
                      width={10}
                      height={10}
                      className="w-10 h-10"
                    />
                  </div>
                  <span className="text-[#0C0B16] text-[14px] font-[600] leading-[1.71] text-left">
                    {t(featureKey)}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://app.gettbot.io/auth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-1 p-1 bg-[#F4F4F4] border border-[#DFDFDF] border-[1px] rounded-full w-fit"
              >
                <div className="flex justify-center items-center gap-1 px-4 py-2.5 bg-[#3FC7C8] rounded-full shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)]">
                  <span className="text-[#F9F9F9] text-[12px] font-[500] leading-[1.33] text-center">
                    {t("hero.cta")}
                  </span>
                  <Image
                    src="/images/chevron-right.svg"
                    alt="Arrow right"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </div>
              </a>
              <p className="text-[#AAB0C0] text-[14px] font-[500] leading-[1.29] text-left">
                {t("hero.note")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
