"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  lastUpdatedKey?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  lastUpdatedKey,
}: ModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useTranslation();

  const getLastUpdated = () => {
    if (!lastUpdatedKey) {
      return t("modal.lastUpdatedDefault");
    }
    if (lastUpdatedKey.startsWith("privacyModal.") || lastUpdatedKey.startsWith("cookiesModal.")) {
      return t(lastUpdatedKey, { lng: 'en' });
    }
    return t(lastUpdatedKey);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      document.addEventListener("keydown", handleEscape);
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY.replace('-', ''), 10));
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY.replace('-', ''), 10));
      }
    };
  }, [isOpen, onClose]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const maxScroll = scrollHeight - clientHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
      />
      
      <div 
        className="relative bg-white rounded-[24px] shadow-[0px_4px_24px_0px_rgba(15,15,15,0.12)] w-[842px] h-[675px] mx-4 overflow-hidden z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-8 pt-8 pb-5">
          <div className="flex flex-col gap-0">
            <h2 className="text-[#0C0B16] text-[16px] font-[600] leading-[1.25] text-left">
              {title}
            </h2>
            <p 
              className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left"
              dangerouslySetInnerHTML={{ __html: getLastUpdated() }}
            />
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-6 h-6 hover:bg-[#F4F4F4] transition-colors rounded"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#0C0B16"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div
          ref={scrollRef}
          className="px-8 pb-8 overflow-y-auto h-[calc(675px-120px)] relative scrollbar-hide"
          onScroll={handleScroll}
        >
          <div className="absolute right-0 top-0 w-0 h-[516px] border-r-[6px] border-[#AAB0C0] opacity-50"></div>
          <div
            className="absolute right-0 w-0 border-r-[6px] border-[#3FC7C8]"
            style={{
              top: `${(scrollProgress / 100) * (516 - 80)}px`,
              height: "80px",
            }}
          ></div>

          {children}
        </div>
      </div>
    </div>
  );
}
