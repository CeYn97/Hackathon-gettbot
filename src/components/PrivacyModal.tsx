"use client";

import { useTranslation } from "react-i18next";
import Modal from "./Modal";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  const { t } = useTranslation();

  const tEn = (key: string) => t(key, { lng: 'en' });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={tEn("privacyModal.title")}
      lastUpdatedKey="privacyModal.lastUpdated"
    >
      <div className="flex flex-col gap-5">
        <p 
          className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left"
          dangerouslySetInnerHTML={{ __html: tEn("privacyModal.intro") }}
        />

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("privacyModal.section1.title")}
        </h3>
        <p 
          className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: tEn("privacyModal.section1.content") }}
        />

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("privacyModal.section2.title")}
        </h3>
        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left">
          {tEn("privacyModal.section2.content")}
        </p>

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("privacyModal.section3.title")}
        </h3>
        <p 
          className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: tEn("privacyModal.section3.content") }}
        />

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("privacyModal.section4.title")}
        </h3>
        <p 
          className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: tEn("privacyModal.section4.content") }}
        />

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("privacyModal.section5.title")}
        </h3>
        <p 
          className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: tEn("privacyModal.section5.content") }}
        />

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("privacyModal.section6.title")}
        </h3>
        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line">
          {tEn("privacyModal.section6.content")}
        </p>

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("privacyModal.section7.title")}
        </h3>
        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line">
          {tEn("privacyModal.section7.content")}
        </p>

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("privacyModal.section8.title")}
        </h3>
        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line">
          {tEn("privacyModal.section8.content")}
        </p>

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("privacyModal.section9.title")}
        </h3>
        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line">
          {tEn("privacyModal.section9.content")}
        </p>

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("privacyModal.section10.title")}
        </h3>
        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line">
          {tEn("privacyModal.section10.content")}
        </p>

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("privacyModal.section11.title")}
        </h3>
        <p 
          className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: tEn("privacyModal.section11.content") }}
        />

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("privacyModal.section12.title")}
        </h3>
        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line">
          {tEn("privacyModal.section12.content")}
        </p>

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("privacyModal.section13.title")}
        </h3>
        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line">
          {tEn("privacyModal.section13.content")}
        </p>

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("privacyModal.section14.title")}
        </h3>
        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line">
          {tEn("privacyModal.section14.content")}
        </p>

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {tEn("privacyModal.section15.title")}
        </h3>
        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left whitespace-pre-line">
          {tEn("privacyModal.section15.content")}
        </p>
      </div>
    </Modal>
  );
}

