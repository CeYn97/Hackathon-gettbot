"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Modal from "./Modal";

interface CookiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CookiesModal({ isOpen, onClose }: CookiesModalProps) {
  const { t } = useTranslation();

  const tEn = (key: string, options?: any): string => {
    const result = t(key, { lng: 'en', ...options });
    return typeof result === 'string' ? result : String(result);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={tEn("cookiesModal.title")}
      lastUpdatedKey="cookiesModal.lastUpdated"
    >
      <div className="flex flex-col gap-5">
        <p 
          className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left"
          dangerouslySetInnerHTML={{ __html: tEn("cookiesModal.intro") }}
        />

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("cookiesModal.section1.title")}
        </h3>
        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left">
          {tEn("cookiesModal.section1.intro")}
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-[#AAB0C0]">
            <thead>
              <tr className="border-b border-[#AAB0C0]">
                <th 
                  className="text-[#0C0B16] text-[16px] font-[600] leading-[1.25] text-left py-2 px-4 border-r border-[#AAB0C0] border-l border-[#AAB0C0]"
                  dangerouslySetInnerHTML={{ __html: tEn("cookiesModal.section1.tableHeader.type") }}
                />
                <th 
                  className="text-[#0C0B16] text-[16px] font-[600] leading-[1.25] text-left py-2 px-4 border-r border-[#AAB0C0]"
                  dangerouslySetInnerHTML={{ __html: tEn("cookiesModal.section1.tableHeader.purpose") }}
                />
              </tr>
            </thead>
            <tbody>
              {((t("cookiesModal.section1.tableRows", { lng: 'en', returnObjects: true }) as Array<{type: string, purpose: string}>)).map((row, index) => (
                <tr key={index} className="border-b border-[#AAB0C0]">
                  <td 
                    className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left py-2 px-4 align-top border-r border-[#AAB0C0] border-l border-[#AAB0C0]"
                    dangerouslySetInnerHTML={{ __html: row.type }}
                  />
                  <td 
                    className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left py-2 px-4 border-r border-[#AAB0C0]"
                    dangerouslySetInnerHTML={{ __html: row.purpose }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p 
          className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: tEn("cookiesModal.section1.content") }}
        />

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("cookiesModal.section2.title")}
        </h3>
        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line">
          {tEn("cookiesModal.section2.content")}
        </p>

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("cookiesModal.section3.title")}
        </h3>
        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line">
          {tEn("cookiesModal.section3.content")}
        </p>

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("cookiesModal.section4.title")}
        </h3>
        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line">
          {tEn("cookiesModal.section4.content")}
        </p>

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("cookiesModal.section5.title")}
        </h3>
        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line">
          {tEn("cookiesModal.section5.content")}
        </p>
        
        <h3 
          className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase"
          dangerouslySetInnerHTML={{ __html: tEn("cookiesModal.section5.annexTitle") }}
        />
        <p 
          className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left mb-4"
          dangerouslySetInnerHTML={{ __html: tEn("cookiesModal.section5.annexSubtitle") }}
        />
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-[#AAB0C0]">
            <thead>
              <tr className="border-b border-[#AAB0C0]">
                <th 
                  className="text-[#0C0B16] text-[16px] font-[600] leading-[1.25] text-left py-2 px-4 border-r border-[#AAB0C0] border-l border-[#AAB0C0]"
                  dangerouslySetInnerHTML={{ __html: tEn("cookiesModal.section5.annexTableHeader.title") }}
                />
                <th 
                  className="text-[#0C0B16] text-[16px] font-[600] leading-[1.25] text-left py-2 px-4 border-r border-[#AAB0C0]"
                  dangerouslySetInnerHTML={{ __html: tEn("cookiesModal.section5.annexTableHeader.origins") }}
                />
                <th 
                  className="text-[#0C0B16] text-[16px] font-[600] leading-[1.25] text-left py-2 px-4 border-r border-[#AAB0C0]"
                  dangerouslySetInnerHTML={{ __html: tEn("cookiesModal.section5.annexTableHeader.appointment") }}
                />
                <th 
                  className="text-[#0C0B16] text-[16px] font-[600] leading-[1.25] text-left py-2 px-4 border-r border-[#AAB0C0]"
                  dangerouslySetInnerHTML={{ __html: tEn("cookiesModal.section5.annexTableHeader.storageTime") }}
                />
              </tr>
            </thead>
            <tbody>
              {((t("cookiesModal.section5.annexCategories", { lng: 'en', returnObjects: true }) as Array<{name: string, cookies: Array<{title: string, origins: string, appointment: string, storageTime: string}>}>)).map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <tr className="border-b border-[#AAB0C0]">
                    <td 
                      colSpan={4}
                      className="text-[#0C0B16] text-[16px] font-[600] leading-[1.25] text-left py-2 px-4 border-l border-[#AAB0C0] border-r border-[#AAB0C0]"
                      dangerouslySetInnerHTML={{ __html: category.name }}
                    />
                  </tr>
                  {category.cookies.length > 0 ? (
                    category.cookies.map((cookie, cookieIndex) => (
                      <tr key={cookieIndex} className="border-b border-[#AAB0C0]">
                        <td className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left py-2 px-4 border-r border-[#AAB0C0] border-l border-[#AAB0C0]">
                          {cookie.title}
                        </td>
                        <td className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left py-2 px-4 border-r border-[#AAB0C0]">
                          {cookie.origins}
                        </td>
                        <td className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left py-2 px-4 border-r border-[#AAB0C0]">
                          {cookie.appointment}
                        </td>
                        <td className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left py-2 px-4 border-r border-[#AAB0C0]">
                          {cookie.storageTime}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="border-b border-[#AAB0C0]">
                      <td colSpan={4} className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left py-2 px-4 border-l border-[#AAB0C0] border-r border-[#AAB0C0]">
                        &nbsp;
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
}

