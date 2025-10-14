"use client";

import { useTranslation } from "react-i18next";
import Modal from "./Modal";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t("termsModal.title")}
      lastUpdatedKey="termsModal.lastUpdated"
    >
      <div className="flex flex-col gap-5">
        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left">
          {t("termsModal.paragraph1")}
        </p>

        <h3 className="text-[#0C0B16] text-[32px] font-[600] leading-[1.25] text-left uppercase">
          {t("termsModal.sectionHeading")}
        </h3>

        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left">
          {t("termsModal.paragraph2")}
        </p>

        <p className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25] text-left">
          {t("termsModal.paragraph3")}
        </p>
      </div>
    </Modal>
  );
}
