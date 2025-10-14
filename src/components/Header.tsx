"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", labelKey: "languages.short.en", nameKey: "languages.full.en" },
    { code: "ru", labelKey: "languages.short.ru", nameKey: "languages.full.ru" }
  ];

  const handleLanguageSelect = (languageCode: string) => {
    void i18n.changeLanguage(languageCode);
    setIsDropdownOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const normalizedLanguage = (i18n.resolvedLanguage || i18n.language || "ru")
    .split("-")[0]
    .toLowerCase();
  const activeLanguage =
    languages.find((language) => language.code === normalizedLanguage) ?? languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="hidden md:flex justify-between items-center w-full gap-[132px] px-[120px] py-3 pb-[18px] bg-[#F9F9F9] border-b border-[#DFDFDF] border-[0.5px]">
        <Link href="/" className="flex flex-col gap-[10px] flex-shrink-0">
          <Image
            src="/images/gettbot-logo.svg"
            alt="GettBot Logo"
            width={122}
            height={44}
            className="w-[122px] h-[44px]"
            priority
          />
        </Link>

          <Navigation />

        <div className="flex justify-end items-center gap-8 flex-shrink-0">
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex justify-center items-center gap-2 px-3 py-[10px] rounded-full shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] hover:bg-[#F4F4F4] transition-all duration-200"
            aria-label={t("header.languageSwitcher")}
          >
            <span className="text-[#0C0B16] text-[14px] font-[400] leading-[1.14] text-center">
              {t(activeLanguage.labelKey)}
            </span>
            <div className={`w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="#0C0B16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          <div className={`absolute top-full right-0 mt-2 w-32 bg-[#FFFFFF] border border-[#DFDFDF] border-[0.5px] rounded-[12px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] overflow-hidden transition-all duration-200 z-15 ${
            isDropdownOpen 
              ? 'opacity-100 visible transform translate-y-0' 
              : 'opacity-0 invisible transform -translate-y-2'
          }`}>
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full px-3 py-2 text-left transition-colors duration-150 ${
                  activeLanguage.code === language.code
                    ? 'bg-[#3FC7C8] text-[#0C0B16]'
                    : 'bg-[#FFFFFF] text-[#0C0B16] hover:bg-[#F4F4F4]'
                }`}
              >
                <span className="text-[14px] font-[400] leading-[1.14]">
                  {t(language.labelKey)}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <a 
            href="https://app.gettbot.io/auth"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center px-3 py-[10px] transition-colors hover:bg-[#F4F4F4] rounded-full"
          >
            <span className="text-[#0C0B16] text-[14px] font-[400] leading-[1.14] text-center">
              {t("header.login")}
            </span>
          </a>
          <a 
            href="https://app.gettbot.io/auth"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center px-3 py-[10px] bg-[#3FC7C8] rounded-full shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] hover:bg-[#36B3B4] transition-colors"
          >
            <span className="text-[#FFFFFF] text-[14px] font-[400] leading-[1.14] text-center">
              {t("header.signup")}
            </span>
          </a>
        </div>
      </div>
    </header>

      <header className="flex md:hidden justify-between items-center w-full px-5 py-2 bg-[#F9F9F9] border-b border-[#DFDFDF] border-[0.6px]">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/gettbot-logo.svg"
            alt="GettBot Logo"
            width={66}
            height={24}
            className="w-[66px] h-[24px]"
            priority
          />
        </Link>

        <div className="flex items-center gap-2 relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex justify-center items-center px-3 py-2  rounded-full shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)]"
          >
            <span className="text-[#0C0B16] text-[12px] font-[400] leading-[1.33] text-center">
              {t(activeLanguage.labelKey)}
            </span>
            <div className={`w-3 h-3 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="#0C0B16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          <a 
            href="https://app.gettbot.io/auth"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center px-3 py-2 rounded-full shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)]"
          >
            <span className="text-[#0C0B16] text-[12px] font-[400] leading-[1.33] text-center">
              {t("header.login")}
            </span>
          </a>

          <button 
            onClick={handleMobileMenuToggle}
            className="flex justify-center items-center px-5 py-2 bg-[#F4F4F4] border border-[#DFDFDF] border-[0.5px] rounded-full transition-all duration-200"
          >
            {isMobileMenuOpen ? (
              <Image
                src="/images/x-icon.svg"
                alt="Close menu"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            ) : (
              <div className="w-4 h-4 flex flex-col justify-center items-center gap-1">
                <div className="w-4 h-0 border-b border-[#0C0B16] border-[1.5px]"></div>
                <div className="w-4 h-0 border-b border-[#0C0B16] border-[1.5px]"></div>
              </div>
            )}
          </button>

          <div className={`absolute top-full left-0 mt-2 w-[360px] bg-[#FFFFFF] border border-[#DFDFDF] border-[0.5px] rounded-[12px] shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] overflow-hidden transition-all duration-300 ease-in-out z-15 ${
            isDropdownOpen 
              ? 'opacity-100 visible transform translate-y-0 scale-100' 
              : 'opacity-0 invisible transform -translate-y-2 scale-95'
          }`}>
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full px-3 py-2 text-left transition-colors duration-150 ${
                  activeLanguage.code === language.code
                    ? 'bg-[#3FC7C8] text-[#0C0B16]'
                    : 'bg-[#FFFFFF] text-[#0C0B16] hover:bg-[#F4F4F4]'
                }`}
              >
                <span className="text-[12px] font-[400] leading-[1.33]">
                  {t(language.labelKey)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed top-12 w-full bg-white z-50 md:hidden shadow-lg">
          <div className="flex flex-col px-5 py-8">
            <h2 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-left mb-12">
              {t("navigation.about")}
            </h2>

            <div className="flex flex-col gap-6 mb-12">
              <Link 
                href="/about" 
                className="text-[#0C0B16] text-[16px] font-[500] leading-[1.25] text-left"
                onClick={handleMobileMenuToggle}
              >
                {t("navigation.about")}
              </Link>
              <Link 
                href="/marketplace" 
                className="text-[#0C0B16] text-[16px] font-[500] leading-[1.25] text-left"
                onClick={handleMobileMenuToggle}
              >
                {t("navigation.marketplace")}
              </Link>
              <Link 
                href="/tariffs" 
                className="text-[#0C0B16] text-[16px] font-[500] leading-[1.25] text-left"
                onClick={handleMobileMenuToggle}
              >
                {t("navigation.tariffs")}
              </Link>
              <Link 
                href="/faq" 
                className="text-[#0C0B16] text-[16px] font-[500] leading-[1.25] text-left"
                onClick={handleMobileMenuToggle}
              >
                {t("navigation.faq")}
              </Link>
              <Link 
                href="/referral" 
                className="text-[#0C0B16] text-[16px] font-[500] leading-[1.25] text-left"
                onClick={handleMobileMenuToggle}
              >
                {t("navigation.referral")}
              </Link>
            </div>

            <a 
              href="https://app.gettbot.io/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center px-4 py-2.5 bg-[#3FC7C8] rounded-full"
              onClick={handleMobileMenuToggle}
            >
              <span className="text-[#FFFFFF] text-[16px] font-[400] leading-[1.25] text-center">
                {t("header.signup")}
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
