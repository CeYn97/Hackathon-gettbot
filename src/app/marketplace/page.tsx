"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarketplaceHeader from "@/components/MarketplaceHeader";
import FilterPanel from "@/components/FilterPanel";
import SetCard from "@/components/SetCard";
import { marketplaceApi } from "@/services/marketplaceApi";
import {
  SetItem,
  MarketplaceFilters,
  MarketplaceData,
} from "@/types/marketplace";

export default function MarketplacePage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"spot" | "futures">("spot");
  const [activeSegment, setActiveSegment] = useState<"hit" | "all">("all");

  const [sets, setSets] = useState<SetItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [itemsPerPage] = useState(16);
  const [filters, setFilters] = useState<MarketplaceFilters>({
    limit: itemsPerPage,
    offset: 0,
    orderBy: "Name",
    orderDirection: "Asc",
  });
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement | null>(null);

  const handleTabChange = (tab: "spot" | "futures") => {
    setActiveTab(tab);
  };

  const handleSegmentChange = (segment: "hit" | "all") => {
    setActiveSegment(segment);

    if (segment === "hit") {
      setFilters((prev) => ({
        ...prev,
        clientStatusFilter: "Popular",
        offset: 0,
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        clientStatusFilter: undefined,
        offset: 0,
      }));
    }
    setSets([]);
    setHasMore(true);
  };

  const handleFiltersChange = (newFilters: MarketplaceFilters) => {
    setFilters((prev) => ({
      ...newFilters,
      clientStatusFilter: prev.clientStatusFilter,
      offset: 0,
    }));
    setSets([]);
    setHasMore(true);
  };

  const handleSetClick = (set: SetItem) => {
    console.log("Set clicked:", set);
  };

  const loadMoreData = useCallback(async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    setError(null);

    try {
      const currentOffset = sets.length;
      const newFilters = {
        ...filters,
        offset: currentOffset,
      };

      const data: MarketplaceData = await marketplaceApi.getSets(newFilters);

      if (data.items.length === 0) {
        setHasMore(false);
      } else {
        setSets((prev) => {
          const existingIds = new Set(prev.map((item) => item.id));
          const newItems = data.items.filter(
            (item) => !existingIds.has(item.id)
          );
          return [...prev, ...newItems];
        });

        const totalLoaded = currentOffset + data.items.length;
        if (totalLoaded >= data.totalItems) {
          setHasMore(false);
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "LOAD_ERROR");
      console.error("Error loading more sets:", err);
    } finally {
      setLoadingMore(false);
    }
  }, [filters, sets.length, loadingMore, hasMore]);

  useEffect(() => {
    let isMounted = true;

    const loadInitialSets = async () => {
      setLoading(true);
      setError(null);
      setSets([]);
      setHasMore(true);

      try {
        const data: MarketplaceData = await marketplaceApi.getSets(filters);
        if (!isMounted) return;

        setSets(data.items);

        if (
          data.items.length < itemsPerPage ||
          data.items.length >= data.totalItems
        ) {
          setHasMore(false);
        }

        setTimeout(() => {
          const contentElement = document.querySelector("main");
          if (contentElement) {
            contentElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      } catch (err) {
        if (!isMounted) return;
        setError(err instanceof Error ? err.message : "LOAD_ERROR");
        console.error("Error loading sets:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void loadInitialSets();

    return () => {
      isMounted = false;
    };
  }, [filters, itemsPerPage]);

  useEffect(() => {
    if (!loadingRef.current || !hasMore || loadingMore) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          loadMoreData();
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(loadingRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, loadingMore, loadMoreData]);

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Header />
      <main className="w-full max-w-[1512px] mx-auto">
        <div className="flex flex-col w-full gap-8 px-5 md:px-[120px] py-6 pb-10">
          <MarketplaceHeader
            activeTab={activeTab}
            onTabChange={handleTabChange}
            activeSegment={activeSegment}
            onSegmentChange={handleSegmentChange}
          />

          <FilterPanel
            onFiltersChange={handleFiltersChange}
            activeSegment={activeSegment}
            onSegmentChange={handleSegmentChange}
          />

          <div className="w-full">
            {loading && (
              <div className="flex justify-center items-center py-8">
                <div className="text-[#686E7E] text-[16px] font-[510]">
                  {t("marketplace.messages.loading")}
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-center items-center py-8">
                <div className="text-red-500 text-[16px] font-[510]">
                  {error === "LOAD_ERROR"
                    ? t("marketplace.messages.loadError")
                    : error}
                </div>
              </div>
            )}

            {!loading && !error && sets.length === 0 && (
              <div className="flex justify-center items-center py-8">
                <div className="text-[#686E7E] text-[16px] font-[510]">
                  {t("marketplace.messages.empty")}
                </div>
              </div>
            )}

            {!loading && !error && sets.length > 0 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
                  {sets.map((set) => (
                    <SetCard key={set.id} set={set} onClick={handleSetClick} />
                  ))}
                </div>

                {hasMore && (
                  <div
                    ref={loadingRef}
                    className="flex justify-center items-center py-8"
                  >
                    {loadingMore ? (
                      <div className="flex items-center gap-3">
                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-[#3FC7C8] border-t-transparent"></div>
                        <div className="text-[#686E7E] text-[16px] font-[500]">
                          {t("marketplace.messages.loading")}
                        </div>
                      </div>
                    ) : (
                      <div className="h-1"></div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
