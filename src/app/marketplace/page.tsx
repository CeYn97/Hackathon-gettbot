"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarketplaceHeader from "@/components/MarketplaceHeader";
import FilterPanel from "@/components/FilterPanel";
import SetCard from "@/components/SetCard";
import Pagination from "@/components/Pagination";
import { marketplaceApi } from "@/services/marketplaceApi";
import { SetItem, MarketplaceFilters, MarketplaceData } from "@/types/marketplace";

export default function MarketplacePage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"spot" | "futures">("spot");
  const [activeSegment, setActiveSegment] = useState<"hit" | "all">("all");
  
  const [sets, setSets] = useState<SetItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(16);
  const [filters, setFilters] = useState<MarketplaceFilters>({
    limit: itemsPerPage,
    offset: 0,
    orderBy: "Name",
    orderDirection: "Asc"
  });

  const handleTabChange = (tab: "spot" | "futures") => {
    setActiveTab(tab);
  };

  const handleSegmentChange = (segment: "hit" | "all") => {
    setActiveSegment(segment);
    
    if (segment === "hit") {
      setFilters(prev => ({
        ...prev,
        clientStatusFilter: "Popular"
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        clientStatusFilter: undefined
      }));
    }
  };

  const handleFiltersChange = (newFilters: MarketplaceFilters) => {
    setFilters(prev => ({
      ...newFilters,
      clientStatusFilter: prev.clientStatusFilter
    }));
    setCurrentPage(1);
  };

  const handleSetClick = (set: SetItem) => {
    console.log("Set clicked:", set);
  };
  useEffect(() => {
    let isMounted = true;

    const loadSets = async () => {
      setLoading(true);
      setError(null);

      try {
        const data: MarketplaceData = await marketplaceApi.getSets(filters);
        if (!isMounted) return;
        setSets(data.items);
        setTotalItems(data.totalItems);
        
        setTimeout(() => {
          const contentElement = document.querySelector('main');
          if (contentElement) {
            contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

    void loadSets();

    return () => {
      isMounted = false;
    };
  }, [filters]);


  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setFilters(prev => ({
      ...prev,
      offset: (page - 1) * itemsPerPage
    }));
  };

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
                      {error === "LOAD_ERROR" ? t("marketplace.messages.loadError") : error}
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
                        <SetCard
                          key={set.id}
                          set={set}
                          onClick={handleSetClick}
                        />
                      ))}
                    </div>

                    
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                    />
                  </>
                )}
              </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
