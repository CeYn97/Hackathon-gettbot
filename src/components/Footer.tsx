"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import TermsModal from "./TermsModal";

export default function Footer() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const { t } = useTranslation();

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTermsModalOpen(true);
  };

  return (
    <>
      <footer className="hidden md:flex flex-col w-full gap-[90px] px-[120px] py-12 bg-[#FFFFFF]">
        <div
          className="flex justify-between items-stretch"
          style={{ marginRight: "110px" }}
        >
          <div className="flex flex-col gap-4">
            <div className="w-[178px] h-[64px]">
              <Image
                src="/images/gettbot-logo.svg"
                alt={t("footer.logoAlt")}
                width={178}
                height={64}
                className="w-full h-full"
              />
            </div>

            <div className="flex gap-3">
              <div className="w-12 h-12 border border-[#E2E2E2] rounded-lg flex items-center justify-center hover:opacity-50 transition-opacity duration-200">
                <Image
                  src="/images/tg.svg"
                  alt={t("footer.telegramAlt")}
                  width={22}
                  height={19}
                  className=""
                />
              </div>
              <div className="w-12 h-12 border border-[#E2E2E2] rounded-lg flex items-center justify-center hover:opacity-50 transition-opacity duration-200">
                <Image
                  src="/images/Subtract.svg"
                  alt={t("footer.socialAlt")}
                  width={28}
                  height={20}
                  className=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-8">
            <div className="flex items-center w-full gap-3">
              <div className="w-12 h-12 flex items-center justify-center hover:opacity-50 transition-opacity duration-200">
                <Image
                  src="/images/mail.svg"
                  alt={t("footer.mailAlt")}
                  width={48}
                  height={48}
                  className="w-full h-full"
                />
              </div>

              <span
                className=" text-[#0C0B16] text-[52px] font-[600] leading-[1.08] text-left"
                style={{ borderBottom: "5px solid #0C0B16" }}
              >
                {t("footer.email")}
              </span>
            </div>

            <div className="flex justify-start w-full gap-3">
              <div className="w-12"></div>

              <span className="text-[#0C0B16] text-[16px] font-[500] leading-[1.25] tracking-[-0.02em] text-left">
                {t("footer.address.line1")}
                <br />
                {t("footer.address.line2")}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-[1272px] gap-6">
          <div className="w-[1272px] h-[109px]">
            <Image
              src="/images/footer-slogan.svg"
              alt={t("footer.sloganAlt")}
              width={1272}
              height={109}
              className="w-full h-full"
            />
          </div>

          <div className="flex justify-between items-center w-[1272px]">
            <a
              href="/cookies"
              className="text-[#0C0B16] text-[16px] font-[500] leading-[1.25] text-left hover:underline hover:underline-offset-4 transition-all duration-200"
            >
              {t("footer.links.cookies")}
            </a>
            <a
              href="/privacy"
              className="text-[#0C0B16] text-[16px] font-[500] leading-[1.25] tracking-[-0.02em] text-center hover:underline hover:underline-offset-4 transition-all duration-200"
            >
              {t("footer.links.privacy")}
            </a>
            <button
              onClick={handleTermsClick}
              className="text-[#0C0B16] text-[16px] font-[500] leading-[1.25] tracking-[-0.02em] text-right hover:underline hover:underline-offset-4 transition-all duration-200 cursor-pointer"
            >
              {t("footer.links.terms")}
            </button>
          </div>
        </div>

        <TermsModal
          isOpen={isTermsModalOpen}
          onClose={() => setIsTermsModalOpen(false)}
        />
      </footer>

      <footer className="flex md:hidden flex-col w-full gap-10 px-5 py-8 pb-12 bg-[#FFFFFF]">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-6">
            <div className="w-[133px] h-[48px]">
              <Image
                src="/images/gettbot-logo.svg"
                alt={t("footer.logoAlt")}
                width={133}
                height={48}
                className="w-full h-full"
              />
            </div>

            <div className="flex gap-2">
              <div className="w-10 h-10 border border-[#E2E2E2] border-[1px] rounded-lg flex items-center justify-center hover:opacity-50 transition-opacity duration-200">
                <Image
                  src="/images/tg.svg"
                  alt={t("footer.telegramAlt")}
                  width={18}
                  height={16}
                  className=""
                />
              </div>
              <div className="w-10 h-10 border border-[#E2E2E2] border-[1px] rounded-lg flex items-center justify-center hover:opacity-50 transition-opacity duration-200">
                <Image
                  src="/images/Subtract.svg"
                  alt={t("footer.socialAlt")}
                  width={23}
                  height={16}
                  className=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center hover:opacity-50 transition-opacity duration-200">
                <Image
                  src="/images/mail.svg"
                  alt={t("footer.mailAlt")}
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </div>

              <span className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-left">
                {t("footer.email")}
              </span>
            </div>

            <span className="text-[#0C0B16] text-[12px] font-[500] leading-[1.33] tracking-[-0.02em] text-center">
              {t("footer.address.line1")}
              <br />
              {t("footer.address.line2")}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="w-[320px] h-[27px]">
            <Image
              src="/images/footer-slogan.svg"
              alt={t("footer.sloganAlt")}
              width={320}
              height={27}
              className="w-full h-full"
            />
          </div>

          <div className="flex justify-center items-center flex-wrap gap-3">
            <a
              href="/cookies"
              className="text-[#0C0B16] text-[12px] font-[500] leading-[1.17] text-left hover:underline hover:underline-offset-4 transition-all duration-200"
            >
              {t("footer.links.cookies")}
            </a>
            <a
              href="/privacy"
              className="text-[#0C0B16] text-[12px] font-[500] leading-[1.17] text-left hover:underline hover:underline-offset-4 transition-all duration-200"
            >
              {t("footer.links.privacy")}
            </a>
            <button
              onClick={handleTermsClick}
              className="text-[#0C0B16] text-[12px] font-[500] leading-[1.17] text-left hover:underline hover:underline-offset-4 transition-all duration-200 cursor-pointer"
            >
              {t("footer.links.terms")}
            </button>
          </div>
        </div>

        <TermsModal
          isOpen={isTermsModalOpen}
          onClose={() => setIsTermsModalOpen(false)}
        />
      </footer>
    </>
  );
}
