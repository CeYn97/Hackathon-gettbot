"use client";

import { useTranslation } from "react-i18next";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const { t } = useTranslation();

  if (totalPages <= 1) {
    return null;
  }

  const getMobilePageNumbers = () => {
    const maxVisible = 3;
    const pages = [];
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pages.push(1, 2, 3);
        if (totalPages > 3) {
          pages.push('...');
          pages.push(totalPages);
        }
      } else if (currentPage >= totalPages - 1) {
        pages.push(1);
        if (totalPages > 3) {
          pages.push('...');
        }
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1, currentPage, currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <>
      <div className="flex md:hidden items-center justify-center gap-2 py-4 px-5 w-full">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-10 h-10 bg-white border border-[#CED4DA] rounded-lg text-[#0C0B16] text-[14px] font-[510] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F8F9FA] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="flex items-center gap-1">
          {getMobilePageNumbers().map((page, index) => (
            page === '...' ? (
              <span key={`dots-${index}`} className="px-2 text-[#6B7280] text-[14px] font-[510]">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => onPageChange(page as number)}
                className={`w-10 h-10 text-[14px] font-[510] rounded-lg transition-colors ${
                  currentPage === page
                    ? 'bg-[#3FC7C8] text-white'
                    : 'bg-white border border-[#CED4DA] text-[#0C0B16] hover:bg-[#F8F9FA]'
                }`}
              >
                {page}
              </button>
            )
          ))}
        </div>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-10 h-10 bg-white border border-[#CED4DA] rounded-lg text-[#0C0B16] text-[14px] font-[510] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F8F9FA] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="hidden md:flex justify-center items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-white border border-[#CED4DA] rounded-lg text-[#0C0B16] text-[14px] font-[510] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F8F9FA] transition-colors"
        >
          {t("marketplace.pagination.prev")}
        </button>
        
        <div className="flex gap-1">
          {Array.from({ length: totalPages }, (_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-3 py-2 text-[14px] font-[510] rounded-lg transition-colors ${
                  currentPage === page
                    ? 'bg-[#3FC7C8] text-white'
                    : 'bg-white border border-[#CED4DA] text-[#0C0B16] hover:bg-[#F8F9FA]'
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-white border border-[#CED4DA] rounded-lg text-[#0C0B16] text-[14px] font-[510] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F8F9FA] transition-colors"
        >
          {t("marketplace.pagination.next")}
        </button>
      </div>
    </>
  );
}
