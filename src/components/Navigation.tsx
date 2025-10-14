"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

interface NavItem {
  href: string;
  labelKey: string;
}

const navItems: NavItem[] = [
  { href: "/about", labelKey: "navigation.about" },
  { href: "/marketplace", labelKey: "navigation.marketplace" },
  { href: "/tariffs", labelKey: "navigation.tariffs" },
  { href: "/faq", labelKey: "navigation.faq" },
  { href: "/referral", labelKey: "navigation.referral" },
];

export default function Navigation() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <nav className="flex gap-1 p-1 bg-[#F4F4F4] border border-[#DFDFDF] border-[0.5px] rounded-full flex-shrink-0">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex justify-center items-center gap-1 px-[10px] py-[6px] rounded-full transition-colors duration-200 flex-shrink-0 ${
              isActive
                ? 'bg-[#3FC7C8] text-[#FFFFFF]'
                : 'hover:bg-[#E9E9E9] text-[#0C0B16]'
            }`}
          >
            <span className="text-[14px] font-[400] leading-[1.14] text-center whitespace-nowrap">
              {t(item.labelKey)}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
