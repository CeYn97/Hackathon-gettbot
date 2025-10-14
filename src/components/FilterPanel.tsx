"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MarketplaceFilters,
  SUPPORTED_CURRENCIES,
  INVESTMENT_RANGES,
  Provider,
  OrderBy,
  OrderDirection,
} from "@/types/marketplace";

interface FilterPanelProps {
  onFiltersChange?: (filters: MarketplaceFilters) => void;
  activeSegment?: "hit" | "all";
  onSegmentChange?: (segment: "hit" | "all") => void;
}

const exchangeOptions = [
  { value: "all", labelKey: "marketplace.filters.exchange.all" },
  { value: "Binance", labelKey: "marketplace.filters.exchange.binance" },
  { value: "Okx", labelKey: "marketplace.filters.exchange.okx" },
] as const;

type ExchangeValue = (typeof exchangeOptions)[number]["value"];

const currencyOptions = ["all", ...SUPPORTED_CURRENCIES] as const;
type CurrencyValue = (typeof currencyOptions)[number] | "placeholder";

const sortOptions = [
  { id: "name", labelKey: "marketplace.filters.sort.name" },
  {
    id: "cryptocurrencies",
    labelKey: "marketplace.filters.sort.cryptocurrencies",
  },
  { id: "popularity", labelKey: "marketplace.filters.sort.popularity" },
  { id: "totalYield", labelKey: "marketplace.filters.sort.totalYield" },
  { id: "drawdown", labelKey: "marketplace.filters.sort.drawdown" },
  { id: "runtime", labelKey: "marketplace.filters.sort.runtime" },
  { id: "minInvestment", labelKey: "marketplace.filters.sort.minInvestment" },
] as const;

type SortOptionId = (typeof sortOptions)[number]["id"];

const botsOptions = [
  { value: "all", labelKey: "marketplace.filters.bots.all" },
  { value: "1", labelKey: "marketplace.filters.bots.one" },
  { value: "2", labelKey: "marketplace.filters.bots.two" },
  { value: "3", labelKey: "marketplace.filters.bots.three" },
  { value: "4", labelKey: "marketplace.filters.bots.four" },
  { value: "5+", labelKey: "marketplace.filters.bots.fivePlus" },
] as const;

type BotsValue = (typeof botsOptions)[number]["value"];

export default function FilterPanel({
  onFiltersChange,
  activeSegment = "all",
  onSegmentChange,
}: FilterPanelProps) {
  const { t } = useTranslation();

  const [isExchangeOpen, setIsExchangeOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isMinInvestmentOpen, setIsMinInvestmentOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const [selectedExchange, setSelectedExchange] =
    useState<ExchangeValue>("all");
  const [selectedCurrency, setSelectedCurrency] =
    useState<CurrencyValue>("placeholder");
  const [selectedMinInvestmentKey, setSelectedMinInvestmentKey] =
    useState<string>(INVESTMENT_RANGES[0].labelKey);
  const [selectedBotsCount, setSelectedBotsCount] = useState<BotsValue>("all");
  const [selectedSort, setSelectedSort] = useState<SortOptionId>("runtime");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchQuery, setSearchQuery] = useState("");

  const exchangeRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);
  const minInvestmentRef = useRef<HTMLDivElement>(null);

  const handleExchangeSelect = (value: ExchangeValue) => {
    setSelectedExchange(value);
    setIsExchangeOpen(false);
  };

  const handleCurrencySelect = (value: CurrencyValue) => {
    setSelectedCurrency(value);
    setIsCurrencyOpen(false);
  };

  const handleMinInvestmentSelect = (labelKey: string) => {
    setSelectedMinInvestmentKey(labelKey);
    setIsMinInvestmentOpen(false);
  };

  const handleBotsCountSelect = (value: BotsValue) => {
    setSelectedBotsCount(value);
  };

  const handleSortSelect = (id: SortOptionId) => {
    setSelectedSort(id);
  };

  const handleSortDirectionToggle = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleSearch = () => {
    if (!onFiltersChange) {
      return;
    }
    triggerFiltersUpdate();
  };

  const handleMobileFilterToggle = () => {
    setIsMobileFilterOpen((prev) => !prev);
    if (!isMobileFilterOpen) {
      setIsExchangeOpen(false);
      setIsCurrencyOpen(false);
      setIsMinInvestmentOpen(false);
      setIsSortOpen(false);
    }
  };

  const handleMobileFilterClose = () => {
    setIsMobileFilterOpen(false);
  };

  const handleMobileFilterApply = () => {
    triggerFiltersUpdate();
    setIsMobileFilterOpen(false);
  };

  const handleMobileFilterReset = () => {
    setSelectedExchange("all");
    setSelectedCurrency("placeholder");
    setSelectedMinInvestmentKey(INVESTMENT_RANGES[0].labelKey);
    setSelectedBotsCount("all");
    setSearchQuery("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileFilterOpen) {
        const target = event.target as Element;
        if (!target.closest(".mobile-filter-dropdown")) {
          setIsExchangeOpen(false);
          setIsCurrencyOpen(false);
          setIsMinInvestmentOpen(false);
        }
      }
    };

    if (isMobileFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMobileFilterOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current) {
        const target = event.target as Element;
        const isInsideSortRef = sortRef.current.contains(target);
        const isSortDropdown = target.closest(".sort-dropdown");

        if (!isInsideSortRef && !isSortDropdown) {
          setIsSortOpen(false);
        }
      }
    };

    if (isSortOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isSortOpen]);

  const triggerFiltersUpdate = () => {
    if (!onFiltersChange) {
      return;
    }

    let orderBy: OrderBy = "Name";
    let orderDirection: OrderDirection =
      sortDirection === "asc" ? "Asc" : "Desc";

    switch (selectedSort) {
      case "name":
        orderBy = "Name";
        orderDirection = sortDirection === "asc" ? "Asc" : "Desc";
        break;
      case "cryptocurrencies":
        orderBy = "Cryptocurrencies";
        orderDirection = sortDirection === "asc" ? "Desc" : "Asc";
        break;
      case "popularity":
        orderBy = "TotalYield";
        orderDirection = sortDirection === "asc" ? "Desc" : "Asc";
        break;
      case "totalYield":
        orderBy = "TotalYield";
        orderDirection = sortDirection === "asc" ? "Desc" : "Asc";
        break;
      case "drawdown":
        orderBy = "MaxDrawdown";
        orderDirection = sortDirection === "asc" ? "Asc" : "Desc";
        break;
      case "runtime":
        orderBy = "Runtime";
        orderDirection = sortDirection === "asc" ? "Desc" : "Asc";
        break;
      case "minInvestment":
        orderBy = "MinInvestment";
        orderDirection = sortDirection === "asc" ? "Desc" : "Asc";
        break;
    }

    const providerFilter =
      selectedExchange === "all" ? undefined : (selectedExchange as Provider);

    const currencyFilter =
      selectedCurrency === "placeholder" || selectedCurrency === "all"
        ? undefined
        : [selectedCurrency];

    const botsAmount =
      selectedBotsCount === "all"
        ? undefined
        : parseInt(selectedBotsCount.replace("+", ""), 10);

    const selectedRange = INVESTMENT_RANGES.find(
      (range) => range.labelKey === selectedMinInvestmentKey
    );

    const filters: MarketplaceFilters = {
      limit: 16,
      offset: 0,
      orderBy,
      orderDirection,
      searchString: searchQuery.trim() || undefined,
      providerFilter,
      currencies: currencyFilter,
      botsAmount,
    };

    if (selectedRange?.min !== undefined) {
      filters.minInvestment = selectedRange.min;
    }

    if (selectedRange?.max !== undefined) {
      filters.maxInvestment = selectedRange.max;
    }

    onFiltersChange(filters);
  };

  useEffect(() => {
    triggerFiltersUpdate();
  }, [
    selectedExchange,
    selectedCurrency,
    selectedMinInvestmentKey,
    selectedBotsCount,
    selectedSort,
    sortDirection,
    searchQuery,
  ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        exchangeRef.current &&
        !exchangeRef.current.contains(event.target as Node)
      ) {
        setIsExchangeOpen(false);
      }
      if (
        currencyRef.current &&
        !currencyRef.current.contains(event.target as Node)
      ) {
        setIsCurrencyOpen(false);
      }
      if (
        minInvestmentRef.current &&
        !minInvestmentRef.current.contains(event.target as Node)
      ) {
        setIsMinInvestmentOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getExchangeLabel = (value: ExchangeValue) =>
    t(
      exchangeOptions.find((option) => option.value === value)?.labelKey ??
        exchangeOptions[0].labelKey
    );

  const getCurrencyLabel = (value: CurrencyValue) => {
    if (value === "placeholder") {
      return t("marketplace.filters.currency.placeholder");
    }

    if (value === "all") {
      return t("marketplace.filters.currency.all");
    }

    return value;
  };

  const getMinInvestmentLabel = (labelKey: string) =>
    t(
      INVESTMENT_RANGES.find((range) => range.labelKey === labelKey)
        ?.labelKey ?? INVESTMENT_RANGES[0].labelKey
    );

  return (
    <>
      <div className="hidden md:flex items-end gap-3 px-3 py-2">
        <div
          className="flex flex-col gap-1 w-[200px] relative"
          ref={exchangeRef}
        >
          <div className="flex items-center gap-2 px-3">
            <label className="text-[#AAB0C0] text-[12px] font-[510] leading-[1.33] text-left">
              {t("marketplace.filters.exchange.label")}
            </label>
          </div>
          <button
            onClick={() => setIsExchangeOpen((prev) => !prev)}
            className="flex justify-between items-center gap-0.5 p-3 bg-white border border-[#CED4DA] rounded-xl hover:border-[#3FC7C8] transition-colors"
          >
            <span className="text-[#0C0B16] text-[14px] font-[510] leading-[1.43] text-left">
              {getExchangeLabel(selectedExchange)}
            </span>
            <Image
              src="/images/dropdown-icon.svg"
              alt={t("marketplace.filters.common.dropdownAlt")}
              width={24}
              height={24}
              className={`w-6 h-6 transition-transform ${
                isExchangeOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isExchangeOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#CED4DA] rounded-xl shadow-lg z-10">
              {exchangeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleExchangeSelect(option.value)}
                  className={`w-full px-3 py-2 text-left text-[14px] font-[510] leading-[1.43] hover:bg-[#F8F9FA] first:rounded-t-xl last:rounded-b-xl ${
                    selectedExchange === option.value
                      ? "text-[#3FC7C8] bg-[#F8F9FA]"
                      : "text-[#0C0B16]"
                  }`}
                >
                  {t(option.labelKey)}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1 flex-1 relative" ref={currencyRef}>
          <div className="flex items-center gap-2 px-3">
            <label className="text-[#AAB0C0] text-[12px] font-[510] leading-[1.33] text-left">
              {t("marketplace.filters.currency.label")}
            </label>
          </div>
          <button
            onClick={() => setIsCurrencyOpen((prev) => !prev)}
            className="flex justify-between items-center gap-0.5 p-3 bg-white border border-[#CED4DA] rounded-xl hover:border-[#3FC7C8] transition-colors"
          >
            <span
              className={`text-[14px] font-[510] leading-[1.43] text-left ${
                selectedCurrency === "placeholder"
                  ? "text-[#AFB7BF]"
                  : "text-[#0C0B16]"
              }`}
            >
              {getCurrencyLabel(selectedCurrency)}
            </span>
            <Image
              src="/images/dropdown-icon-2.svg"
              alt={t("marketplace.filters.common.dropdownAlt")}
              width={24}
              height={24}
              className={`w-6 h-6 transition-transform ${
                isCurrencyOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isCurrencyOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#CED4DA] rounded-xl shadow-lg z-10 max-h-[200px] overflow-y-auto">
              <button
                key="placeholder"
                onClick={() => handleCurrencySelect("placeholder")}
                className={`w-full px-3 py-2 text-left text-[14px] font-[510] leading-[1.43] hover:bg-[#F8F9FA] first:rounded-t-xl ${
                  selectedCurrency === "placeholder"
                    ? "text-[#3FC7C8] bg-[#F8F9FA]"
                    : "text-[#0C0B16]"
                }`}
              >
                {t("marketplace.filters.currency.placeholder")}
              </button>
              {currencyOptions.map((option, index) => (
                <button
                  key={option}
                  onClick={() => handleCurrencySelect(option)}
                  className={`w-full px-3 py-2 text-left text-[14px] font-[510] leading-[1.43] hover:bg-[#F8F9FA] ${
                    index === currencyOptions.length - 1
                      ? "last:rounded-b-xl"
                      : ""
                  } ${
                    selectedCurrency === option
                      ? "text-[#3FC7C8] bg-[#F8F9FA]"
                      : "text-[#0C0B16]"
                  }`}
                >
                  {option === "all"
                    ? t("marketplace.filters.currency.all")
                    : option}
                </button>
              ))}
            </div>
          )}
        </div>

        <div
          className="flex flex-col gap-1 w-[200px] relative"
          ref={minInvestmentRef}
        >
          <div className="flex items-center gap-2 px-3">
            <label className="text-[#AAB0C0] text-[12px] font-[510] leading-[1.33] text-left">
              {t("marketplace.filters.investment.label")}
            </label>
          </div>
          <button
            onClick={() => setIsMinInvestmentOpen((prev) => !prev)}
            className="flex justify-between items-center gap-0.5 p-3 bg-white border border-[#CED4DA] rounded-xl hover:border-[#3FC7C8] transition-colors"
          >
            <span className="text-[#0C0B16] text-[14px] font-[510] leading-[1.43] text-left">
              {getMinInvestmentLabel(selectedMinInvestmentKey)}
            </span>
            <Image
              src="/images/dropdown-icon-3.svg"
              alt={t("marketplace.filters.common.dropdownAlt")}
              width={24}
              height={24}
              className={`w-6 h-6 transition-transform ${
                isMinInvestmentOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isMinInvestmentOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#CED4DA] rounded-xl shadow-lg z-10">
              {INVESTMENT_RANGES.map((range, index) => (
                <button
                  key={range.labelKey}
                  onClick={() => handleMinInvestmentSelect(range.labelKey)}
                  className={`w-full px-3 py-2 text-left text-[14px] font-[510] leading-[1.43] hover:bg-[#F8F9FA] ${
                    index === 0 ? "first:rounded-t-xl" : ""
                  } ${
                    index === INVESTMENT_RANGES.length - 1
                      ? "last:rounded-b-xl"
                      : ""
                  } ${
                    selectedMinInvestmentKey === range.labelKey
                      ? "text-[#3FC7C8] bg-[#F8F9FA]"
                      : "text-[#0C0B16]"
                  }`}
                >
                  {t(range.labelKey)}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 px-3">
            <label className="text-[#AAB0C0] text-[12px] font-[510] leading-[1.33] text-left">
              {t("marketplace.filters.bots.label")}
            </label>
          </div>
          <div className="flex items-center">
            {botsOptions.map((option, index) => (
              <button
                key={option.value}
                onClick={() => handleBotsCountSelect(option.value)}
                className={`flex justify-center items-center gap-1 px-4 py-3.5 w-[45.33px] h-12 border border-[#CED4DA] transition-all duration-300 ease-in-out ${
                  index === 0 ? "rounded-l-xl" : "border-l-0"
                } ${index === botsOptions.length - 1 ? "rounded-r-xl" : ""} ${
                  selectedBotsCount === option.value
                    ? "bg-[#F8F9FA] text-[#0C0B16]"
                    : "bg-white text-[#AAB0C0] hover:bg-[#F8F9FA] hover:text-[#0C0B16]"
                }`}
              >
                <span className="text-[14px] font-[590] leading-[1.43] text-left">
                  {t(option.labelKey)}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1 flex-1">
          <div className="flex items-center gap-2 px-3">
            <label className="text-[#AAB0C0] text-[12px] font-[510] leading-[1.33] text-left">
              {t("marketplace.filters.search.label")}
            </label>
          </div>
          <div className="flex justify-between items-center gap-0.5 p-3 bg-white border border-[#CED4DA] rounded-xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("marketplace.filters.search.placeholder")}
              className="flex-1 text-[#0C0B16] text-[14px] font-[510] leading-[1.43] text-left bg-transparent border-none outline-none placeholder:text-[#AFB7BF]"
              style={{ height: "auto", minHeight: "10px" }}
            />
            <button
              onClick={handleSearch}
              className="hover:bg-[#F8F9FA] rounded transition-colors"
            >
              <Image
                src="/images/search-icon.svg"
                alt={t("marketplace.filters.search.alt")}
                width={24}
                height={24}
                className="w-5.5 h-5.5"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1 relative" ref={sortRef}>
          <button
            onClick={() => setIsSortOpen((prev) => !prev)}
            className="relative flex justify-center items-center gap-1 h-12 w-12 bg-white border border-[#CED4DA] rounded-xl hover:border-[#3FC7C8] transition-colors p-3.5"
            aria-label={t("marketplace.filters.sort.ariaLabel")}
          >
            <Image
              src="/images/icon-market-4.svg"
              alt={t("marketplace.filters.sort.iconAlt")}
              width={16}
              height={16}
              className="w-4 h-4"
            />
            {selectedSort !== "name" && (
              <Image
                src="/images/Indicator.svg"
                alt={t("marketplace.filters.sort.indicatorAlt")}
                width={6}
                height={6}
                className="absolute top-1.5 right-1.5 w-1.5 h-1.5"
              />
            )}
          </button>

          {isSortOpen && (
            <div className="absolute top-full right-0 mt-1 bg-white border border-[#CED4DA] rounded-xl shadow-lg z-20 w-[320px] sort-dropdown">
              <div className="px-3.5 py-2 text-[#AAB0C0] text-[14px] font-[510] leading-[1.43]">
                {t("marketplace.filters.sort.title")}
              </div>
              {sortOptions.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => {
                    if (selectedSort === option.id) {
                      handleSortDirectionToggle();
                    } else {
                      handleSortSelect(option.id);
                    }
                  }}
                  className={`w-full flex justify-between items-center px-3.5 py-2 text-left text-[14px] font-[510] leading-[1.43] hover:bg-[#F8F9FA] ${
                    index === sortOptions.length - 1 ? "last:rounded-b-xl" : ""
                  } ${
                    selectedSort === option.id
                      ? "bg-[#F8F9FA]"
                      : "text-[#0C0B16]"
                  }`}
                >
                  <span className="text-[#0C0B16]">{t(option.labelKey)}</span>
                  {selectedSort === option.id && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <path
                        d="M3 8.99999L7 4.99999M7 4.99999L11 8.99999M7 4.99999V19"
                        stroke={sortDirection === "asc" ? "#39B3B4" : "#E0E4E8"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 15L17 19M17 19L13 15M17 19V4.99999"
                        stroke={
                          sortDirection === "desc" ? "#39B3B4" : "#E0E4E8"
                        }
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex md:hidden items-center gap-3 py-2 w-full">
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex justify-between items-center gap-2 p-3 bg-white border border-[#CED4DA] rounded-[12px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ID сета"
              className="flex-1 text-[#AFB7BF] text-[14px] font-[510] leading-[1.43] text-left bg-transparent border-none outline-none placeholder:text-[#AFB7BF]"
            />
            <button
              onClick={handleSearch}
              className="hover:bg-[#F8F9FA] rounded transition-colors"
            >
              <Image
                src="/images/search-icon.svg"
                alt={t("marketplace.filters.search.alt")}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        <button
          onClick={handleMobileFilterToggle}
          className="flex justify-center items-center gap-1 px-4 py-3.5 h-12 bg-white border border-[#CED4DA] rounded-[12px] hover:border-[#3FC7C8] transition-colors"
        >
          <Image
            src="/images/filter-icon-movbile.svg"
            alt="Filter"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </button>

        <div className="relative" ref={sortRef}>
          <button
            onClick={() => setIsSortOpen((prev) => !prev)}
            className="flex justify-center items-center gap-1 px-4 py-3.5 h-12 bg-white border border-[#CED4DA] rounded-[12px] hover:border-[#3FC7C8] transition-colors"
            aria-label={t("marketplace.filters.sort.ariaLabel")}
          >
            <Image
              src="/images/icon-market-4.svg"
              alt={t("marketplace.filters.sort.iconAlt")}
              width={16}
              height={16}
              className="w-4 h-4"
            />
            {selectedSort !== "name" && (
              <Image
                src="/images/Indicator.svg"
                alt={t("marketplace.filters.sort.indicatorAlt")}
                width={6}
                height={6}
                className="absolute top-1.5 right-1.5 w-1.5 h-1.5"
              />
            )}
          </button>

          {isSortOpen && (
            <div className="absolute top-full right-0 mt-1 bg-white border border-[#EDEFF2] rounded-[20px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)] z-20 w-[320px] md:w-[280px] md:border-[#CED4DA] md:rounded-xl md:shadow-lg sort-dropdown">
              <div className="px-1 py-1 md:px-0 md:py-0">
                <div className="flex justify-between items-center px-3.5 py-2 md:px-3.5 md:py-2">
                  <div className="text-[#AAB0C0] text-[14px] font-[510] leading-[1.43]">
                    {t("marketplace.filters.sort.title")}
                  </div>
                  <button
                    onClick={() => setIsSortOpen(false)}
                    className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors md:hidden"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L6 18M6 6L18 18"
                        stroke="#686E7E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                {sortOptions.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      if (selectedSort === option.id) {
                        handleSortDirectionToggle();
                      } else {
                        handleSortSelect(option.id);
                      }
                    }}
                    className={`w-full flex justify-between items-center px-3.5 py-2.5 text-left text-[14px] font-[510] leading-[1.43] hover:bg-[#F8F9FA] rounded ${
                      index === sortOptions.length - 1
                        ? "md:last:rounded-b-xl"
                        : ""
                    } ${
                      selectedSort === option.id
                        ? "bg-[#F8F9FA]"
                        : "text-[#0C0B16]"
                    }`}
                  >
                    <span className="text-[#0C0B16]">{t(option.labelKey)}</span>
                    {selectedSort === option.id && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                      >
                        <path
                          d="M3 8.99999L7 4.99999M7 4.99999L11 8.99999M7 4.99999V19"
                          stroke={
                            sortDirection === "asc" ? "#39B3B4" : "#E0E4E8"
                          }
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 15L17 19M17 19L13 15M17 19V4.99999"
                          stroke={
                            sortDirection === "desc" ? "#39B3B4" : "#E0E4E8"
                          }
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-10"
            onClick={handleMobileFilterClose}
          />

          <div className="absolute top-0 left-0 w-full h-full bg-[#F3F4F6] flex flex-col">
            <div className="flex justify-end items-center p-2 px-5 bg-white">
              <button
                onClick={handleMobileFilterClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
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
                    stroke="#686E7E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex flex-col gap-4 p-5 bg-white">
              <div className="flex items-center gap-0.5 p-0.5 bg-[#EDEFF2] border border-[#CED4DA] rounded-[19px] w-fit">
                <button
                  onClick={() => onSegmentChange?.("hit")}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-2xl h-8 ${
                    activeSegment === "hit"
                      ? "bg-white border border-[#EDEFF2] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.1)]"
                      : "bg-transparent"
                  }`}
                >
                  <span className="text-[#696F7F] text-[14px] font-[590] leading-[1.43]">
                    HIT
                  </span>
                </button>
                <button
                  onClick={() => onSegmentChange?.("all")}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-2xl h-8 ${
                    activeSegment === "all"
                      ? "bg-white border border-[#EDEFF2] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.1)]"
                      : "bg-transparent"
                  }`}
                >
                  <span className="text-[#696F7F] text-[14px] font-[590] leading-[1.43]">
                    Все
                  </span>
                </button>
              </div>

              <div
                className="flex flex-col gap-1 relative mobile-filter-dropdown"
                ref={exchangeRef}
              >
                <div className="flex items-center gap-2 px-3">
                  <label className="text-[#AAB0C0] text-[12px] font-[510] leading-[1.33]">
                    Биржа
                  </label>
                </div>
                <button
                  onClick={() => setIsExchangeOpen((prev) => !prev)}
                  className="flex justify-between items-center p-3 bg-[#FAFBFB] border border-[#CED4DA] rounded-[12px]"
                >
                  <span className="text-[#0C0B16] text-[14px] font-[510] leading-[1.43]">
                    {getExchangeLabel(selectedExchange)}
                  </span>
                  <Image
                    src="/images/dropdown-icon.svg"
                    alt="Dropdown"
                    width={24}
                    height={24}
                    className={`w-6 h-6 transition-transform ${
                      isExchangeOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isExchangeOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#CED4DA] rounded-xl shadow-lg z-20">
                    {exchangeOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleExchangeSelect(option.value)}
                        className={`w-full px-3 py-2 text-left text-[14px] font-[510] leading-[1.43] hover:bg-[#F8F9FA] first:rounded-t-xl last:rounded-b-xl ${
                          selectedExchange === option.value
                            ? "text-[#3FC7C8] bg-[#F8F9FA]"
                            : "text-[#0C0B16]"
                        }`}
                      >
                        {t(option.labelKey)}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="flex flex-col gap-1 relative mobile-filter-dropdown"
                ref={currencyRef}
              >
                <div className="flex items-center gap-2 px-3">
                  <label className="text-[#AAB0C0] text-[12px] font-[510] leading-[1.33]">
                    Валюта
                  </label>
                </div>
                <button
                  onClick={() => setIsCurrencyOpen((prev) => !prev)}
                  className="flex justify-between items-center p-3 bg-[#FAFBFB] border border-[#CED4DA] rounded-[12px]"
                >
                  <span
                    className={`text-[14px] font-[510] leading-[1.43] ${
                      selectedCurrency === "placeholder"
                        ? "text-[#AFB7BF]"
                        : "text-[#0C0B16]"
                    }`}
                  >
                    {getCurrencyLabel(selectedCurrency)}
                  </span>
                  <Image
                    src="/images/dropdown-icon-2.svg"
                    alt="Dropdown"
                    width={24}
                    height={24}
                    className={`w-6 h-6 transition-transform ${
                      isCurrencyOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isCurrencyOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#CED4DA] rounded-xl shadow-lg z-20 max-h-[200px] overflow-y-auto">
                    <button
                      key="placeholder"
                      onClick={() => handleCurrencySelect("placeholder")}
                      className={`w-full px-3 py-2 text-left text-[14px] font-[510] leading-[1.43] hover:bg-[#F8F9FA] first:rounded-t-xl ${
                        selectedCurrency === "placeholder"
                          ? "text-[#3FC7C8] bg-[#F8F9FA]"
                          : "text-[#0C0B16]"
                      }`}
                    >
                      {t("marketplace.filters.currency.placeholder")}
                    </button>
                    {currencyOptions.map((option, index) => (
                      <button
                        key={option}
                        onClick={() => handleCurrencySelect(option)}
                        className={`w-full px-3 py-2 text-left text-[14px] font-[510] leading-[1.43] hover:bg-[#F8F9FA] ${
                          index === currencyOptions.length - 1
                            ? "last:rounded-b-xl"
                            : ""
                        } ${
                          selectedCurrency === option
                            ? "text-[#3FC7C8] bg-[#F8F9FA]"
                            : "text-[#0C0B16]"
                        }`}
                      >
                        {option === "all"
                          ? t("marketplace.filters.currency.all")
                          : option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="flex flex-col gap-1 relative mobile-filter-dropdown"
                ref={minInvestmentRef}
              >
                <div className="flex items-center gap-2 px-3">
                  <label className="text-[#AAB0C0] text-[12px] font-[510] leading-[1.33]">
                    Мин. инвестиции
                  </label>
                </div>
                <button
                  onClick={() => setIsMinInvestmentOpen((prev) => !prev)}
                  className="flex justify-between items-center p-3 bg-[#FAFBFB] border border-[#CED4DA] rounded-[12px]"
                >
                  <span className="text-[#0C0B16] text-[14px] font-[510] leading-[1.43]">
                    {getMinInvestmentLabel(selectedMinInvestmentKey)}
                  </span>
                  <Image
                    src="/images/dropdown-icon-3.svg"
                    alt="Dropdown"
                    width={24}
                    height={24}
                    className={`w-6 h-6 transition-transform ${
                      isMinInvestmentOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMinInvestmentOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#CED4DA] rounded-xl shadow-lg z-20">
                    {INVESTMENT_RANGES.map((range, index) => (
                      <button
                        key={range.labelKey}
                        onClick={() =>
                          handleMinInvestmentSelect(range.labelKey)
                        }
                        className={`w-full px-3 py-2 text-left text-[14px] font-[510] leading-[1.43] hover:bg-[#F8F9FA] ${
                          index === 0 ? "first:rounded-t-xl" : ""
                        } ${
                          index === INVESTMENT_RANGES.length - 1
                            ? "last:rounded-b-xl"
                            : ""
                        } ${
                          selectedMinInvestmentKey === range.labelKey
                            ? "text-[#3FC7C8] bg-[#F8F9FA]"
                            : "text-[#0C0B16]"
                        }`}
                      >
                        {t(range.labelKey)}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 px-3">
                  <label className="text-[#AAB0C0] text-[12px] font-[510] leading-[1.33]">
                    Количество ботов в сете
                  </label>
                </div>
                <div className="flex items-stretch">
                  {botsOptions.map((option, index) => (
                    <button
                      key={option.value}
                      onClick={() => handleBotsCountSelect(option.value)}
                      className={`flex justify-center items-center gap-1 px-4 py-3.5 h-12 border border-[#CED4DA] transition-all duration-300 ease-in-out ${
                        index === 0 ? "rounded-l-xl" : "border-l-0"
                      } ${
                        index === botsOptions.length - 1 ? "rounded-r-xl" : ""
                      } ${
                        selectedBotsCount === option.value
                          ? "bg-[#F8F9FA] text-[#0C0B16]"
                          : "bg-white text-[#AAB0C0] hover:bg-[#F8F9FA] hover:text-[#0C0B16]"
                      }`}
                    >
                      <span className="text-[14px] font-[590] leading-[1.43]">
                        {t(option.labelKey)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 p-3 px-5 bg-white">
              <button
                onClick={handleMobileFilterReset}
                className="flex-1 flex justify-center items-center px-4 py-2.5 bg-white border border-[#CED4DA] rounded-full hover:bg-gray-50 transition-colors"
              >
                <span className="text-[#0C0B16] text-[16px] font-[400] leading-[1.25]">
                  Сбросить
                </span>
              </button>
              <button
                onClick={handleMobileFilterApply}
                className="flex-1 flex justify-center items-center px-4 py-2.5 bg-[#3FC7C8] rounded-full hover:bg-[#36B3B4] transition-colors"
              >
                <span className="text-white text-[16px] font-[400] leading-[1.25]">
                  Применить
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
