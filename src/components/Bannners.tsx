"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

type TextBannerContent = {
  type: "text";
  headingKey: string;
  textKey: string;
};

type ContactBannerContent = {
  type: "contact";
  emailKey: string;
  addressKey: string;
};

type BannerContent = TextBannerContent | ContactBannerContent;

interface AboutBannerProps {
  backgroundImage: string;
  backgroundImageAltKey: string;
  content: BannerContent;
  bannerHeight?: string;
  contentWidth?: string;
  contentBorderRadius?: string;
}

export default function AboutBanner({
  backgroundImage,
  backgroundImageAltKey,
  content,
  bannerHeight = "h-[678px]",
  contentWidth = "w-[722px]",
  contentBorderRadius = "rounded-[16px]",
}: AboutBannerProps) {
  const { t } = useTranslation();

  return (
    <>
      <section className="hidden md:flex flex-col items-center w-full gap-12 px-[120px] py-16 pb-20 bg-[#F9F9F9]">
      <div className="flex flex-col items-center w-full gap-12">
        <div className={`flex flex-col justify-end w-full ${bannerHeight} gap-[10px] p-8 rounded-[24px] relative overflow-hidden`}>
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={backgroundImage}
              alt={t(backgroundImageAltKey)}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className={`relative z-10 flex flex-col gap-6 p-12 bg-[#FFFFFF] ${contentBorderRadius} ${contentWidth}`}>
            {content.type === "text" ? (
              <>
                <h1 className="text-[#0C0B16] text-[52px] font-[600] leading-[1.23] text-left">
                  {t(content.headingKey)}
                </h1>

                <p className="text-[#828A9D] text-[24px] font-[500] leading-[1.17] text-left">
                  {t(content.textKey)}
                </p>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12">
                    <Image
                      src="/images/mail-icon-48px.svg"
                      alt={t("banner.contact.mailAlt")}
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>

                  <span
                    className="text-[#0C0B16] text-[52px] font-[600] leading-[1.08] text-left"
                    style={{ borderBottom: "5px solid #0C0B16" }}
                  >
                    {t(content.emailKey)}
                  </span>
                </div>

                <p className="text-[#0C0B16] text-[44px] font-[600] leading-[1.18] text-left">
                  {t(content.addressKey)}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>

      <section className="flex md:hidden flex-col items-center w-full gap-12 px-5 py-8 bg-[#F9F9F9]">
        <div className="flex flex-col items-center w-full gap-12">
          <div className="flex flex-col justify-end w-full h-[496px] gap-[10px] p-2 rounded-[16px] relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={backgroundImage}
                alt={t(backgroundImageAltKey)}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative z-10 flex flex-col gap-3 p-5 bg-[#FFFFFF] rounded-[12px] w-full">
              {content.type === "text" ? (
                <>
                  <h1 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-left">
                    {t(content.headingKey)}
                  </h1>

                  <p className="text-[#828A9D] text-[16px] font-[500] leading-[1.25] text-left">
                    {t(content.textKey)}
                  </p>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-left"
                      style={{ borderBottom: "3px solid #0C0B16" }}
                    >
                      {t(content.emailKey)}
                    </span>
                  </div>

                  <p className="text-[#0C0B16] text-[16px] font-[500] leading-[1.25] text-left">
                    {t(content.addressKey)}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
