"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { SetItem } from "@/types/marketplace";
import { LineChart, Line, ResponsiveContainer } from "recharts";

interface SetCardProps {
  set: SetItem;
  onClick?: (set: SetItem) => void;
}

export default function SetCard({ set, onClick }: SetCardProps) {
  const { t } = useTranslation();
  const handleClick = () => {
    if (onClick) {
      onClick(set);
    }
  };

  const formatProfit = (profit: number) => {
    const sign = profit >= 0 ? "+" : "";
    return `${sign}${profit.toFixed(2)}%`;
  };

  const formatInvestment = (amount: number) => {
    return t("marketplace.card.minInvestmentValue", {
      amount: amount.toFixed(0),
    });
  };

  const formatDays = (days: number) => {
    return t("marketplace.card.days", { count: days });
  };

  const getProviderLogo = (provider: string) => {
    switch (provider.toLowerCase()) {
      case "binance":
        return "/images/binance-logo.svg";
      case "okx":
        return "/images/okx-logo.svg";
      default:
        return "/images/default-exchange-logo.svg";
    }
  };

  const getCurrencyIcon = (currency: string) => {
    const currencyLower = currency.toLowerCase();

    const currencyIcons: Record<string, string> = {
      btc: "/images/btc-icon.svg",
      eth: "/images/eth-icon.svg",
      usdt: "/images/usdt-icon.svg",
      bnb: "/images/bnb-icon.svg",
      avax: "/images/avax-icon.svg",
      floki: "/images/floki-icon.svg",
      flr: "/images/currencies/flr-icon.svg",
      ens: "/images/currencies/ens-icon.svg",
      wif: "/images/currencies/wif-icon.svg",
      mew: "/images/currencies/mew-icon.svg",
      xaut: "/images/currencies/xaut-icon.svg",
      tia: "/images/currencies/tia-icon.svg",
      babydoge: "/images/currencies/babydoge-icon.svg",
      bonk: "/images/currencies/bonk-icon.svg",
      pepe: "/images/currencies/pepe-icon.svg",
      jup: "/images/currencies/jup-icon.svg",
      om: "/images/currencies/om-icon.svg",
      ape: "/images/currencies/ape-icon.svg",
      arb: "/images/currencies/arb-icon.svg",
      dydx: "/images/currencies/dydx-icon.svg",
      pol: "/images/currencies/matic-icon.svg",
      apt: "/images/currencies/apt-icon.svg",
      ron: "/images/currencies/ron-icon.svg",
      xch: "/images/currencies/xch-icon.svg",
      metis: "/images/currencies/metis-icon.svg",
      astr: "/images/currencies/astr-icon.svg",
      sui: "/images/currencies/sui-icon.svg",
      cfx: "/images/currencies/cfx-icon.svg",
      chz: "/images/currencies/chz-icon.svg",
      xrp: "/images/currencies/xrp-icon.svg",
      uni: "/images/currencies/uni-icon.svg",
      hbar: "/images/currencies/hbar-icon.svg",
      sol: "/images/currencies/sol-icon.svg",
      near: "/images/currencies/near-icon.svg",
      mkr: "/images/currencies/mkr-icon.svg",
      atom: "/images/currencies/atom-icon.svg",
      ltc: "/images/currencies/ltc-icon.svg",
      dot: "/images/currencies/dot-icon.svg",
      theta: "/images/currencies/theta-icon.svg",
      egld: "/images/currencies/egld-icon.svg",
      okb: "/images/currencies/okb-icon.svg",
      icp: "/images/currencies/icp-icon.svg",
      etc: "/images/currencies/etc-icon.svg",
      storj: "/images/currencies/storj-icon.svg",
      doge: "/images/currencies/doge-icon.svg",
      comp: "/images/currencies/comp-icon.svg",
      link: "/images/currencies/link-icon.svg",
      mina: "/images/currencies/mina-icon.svg",
      xlm: "/images/currencies/xlm-icon.svg",
      zrx: "/images/currencies/zrx-icon.svg",
      ada: "/images/currencies/ada-icon.svg",
      aave: "/images/currencies/aave-icon.svg",
      crv: "/images/currencies/crv-icon.svg",
      trb: "/images/currencies/trb-icon.svg",
      bch: "/images/currencies/bch-icon.svg",
      stx: "/images/currencies/stx-icon.svg",
      inj: "/images/currencies/inj-icon.svg",
      flow: "/images/currencies/flow-icon.svg",
      op: "/images/currencies/op-icon.svg",
      leo: "/images/currencies/leo-icon.svg",
      trx: "/images/currencies/trx-icon.svg",
      ray: "/images/currencies/ray-icon.svg",
      sand: "/images/currencies/sand-icon.svg",
      imx: "/images/currencies/imx-icon.svg",
      algo: "/images/currencies/algo-icon.svg",
      ton: "/images/currencies/ton-icon.svg",
      fil: "/images/currencies/fil-icon.svg",
      ksm: "/images/currencies/ksm-icon.svg",
      cro: "/images/currencies/cro-icon.svg",
      xtz: "/images/currencies/xtz-icon.svg",
      eos: "/images/currencies/eos-icon.svg",
      ldo: "/images/currencies/ldo-icon.svg",
      strk: "/images/currencies/strk-icon.svg",
      ftm: "/images/currencies/ftm-icon.svg",
      mana: "/images/currencies/mana-icon.svg",
      pyth: "/images/currencies/pyth-icon.svg",
      ar: "/images/currencies/ar-icon.svg",
    };

    if (currencyIcons[currencyLower]) {
      return currencyIcons[currencyLower];
    }

    return "/images/default-currency-icon.svg";
  };

  return (
    <div
      className="bg-white border border-[#EDEFF2] rounded-[20px] p-5 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="relative w-[38px] h-[38px]">
            <div className="w-[38px] h-[38px] rounded-[20px] border border-[#EDEFF2] flex items-center justify-center">
              <Image
                src={getProviderLogo(set.provider)}
                alt={set.provider}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>

            {set.clientStatus === "Popular" && (
              <div className="absolute top-6 z-1">
                <Image
                  src="/images/hit-icon.svg"
                  alt="HIT badge"
                  width={62}
                  height={15}
                  className="w-[62px] h-[15px]"
                />
              </div>
            )}
          </div>

          <div>
            <h3 className="text-[#0C0B16] text-[16px] font-[590] leading-[1.5]">
              {set.name}{" "}
              <span className="text-[#686E7E]">
                {t("marketplace.card.botCount", { count: set.slotsCount })}
              </span>
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-[#686E7E] text-[12px] font-[590] leading-[1.33]">
            145
          </span>
          <Image
            src="/images/smile-icon.svg"
            alt={t("marketplace.card.ratingAlt")}
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </div>
      </div>

      <div className="flex justify-between items-stretch gap-8 mb-6">
        <div className="flex flex-col justify-center gap-0.5 flex-1">
          <span className="text-[#686E7E] text-[10px] font-[590] leading-[1.4]">
            {t("marketplace.card.profitability")}
          </span>
          <span className="text-[#0EB38B] text-[14px] font-[590] leading-[1.43]">
            {formatProfit(set.totalPeriodProfitPercent)}
          </span>
        </div>

        <div className="flex flex-col justify-center gap-0.5 flex-1">
          <span className="text-[#686E7E] text-[10px] font-[590] leading-[1.4]">
            {t("marketplace.card.drawdown")}
          </span>
          <span className="text-[#0C0B16] text-[14px] font-[590] leading-[1.43]">
            {formatProfit(-set.maxDrawDown)}
          </span>
        </div>

        <div className="flex flex-col justify-center gap-0.5 flex-1">
          <span className="text-[#686E7E] text-[10px] font-[590] leading-[1.4]">
            {t("marketplace.card.runtime")}
          </span>
          <span className="text-[#0C0B16] text-[14px] font-[590] leading-[1.43]">
            {formatDays(set.daysDuration)}
          </span>
        </div>
      </div>

      <div className="w-full h-[74px] mb-6 pt-5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={set.profitPoints.slice(-30)}>
            <Line
              type="monotone"
              dataKey="DecimalVal"
              stroke="#0EB38B"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 3, fill: "#0EB38B" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-1.5 mb-6">
        {set.tradingPairs.slice(0, 4).map((pair, index) => {
          const [base, quote] = pair.split("-");
          return (
            <div
              key={index}
              className="flex items-center gap-2 px-1 py-0.5 bg-[#F3F4F6] rounded-2xl"
            >
              <div className="flex items-center -space-x-2.5">
                <Image
                  src={getCurrencyIcon(base)}
                  alt={base}
                  width={26}
                  height={26}
                  className="w-[26px] h-[26px] border border-[#EDEFF2] rounded-full"
                />
                <Image
                  src={getCurrencyIcon(quote)}
                  alt={quote}
                  width={26}
                  height={26}
                  className="w-[26px] h-[26px] border border-[#EDEFF2] rounded-full"
                />
              </div>
            </div>
          );
        })}

        {set.tradingPairs.length > 4 && (
          <div className="flex items-center justify-center w-8 h-8 bg-[#F3F4F6] rounded-2xl">
            <span className="text-[#000000] text-[10px] font-[600] leading-[1.6] text-center">
              +{set.tradingPairs.length - 4}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 py-2">
        <div className="flex flex-col flex-1">
          <span className="text-[#686E7E] text-[12px] font-[510] leading-[1.33]">
            {t("marketplace.card.minInvestment")}
          </span>
          <span className="text-[#0C0B16] text-[16px] font-[510] leading-[1.5] whitespace-nowrap">
            {formatInvestment(set.minimalStartSumUsdt)}
          </span>
        </div>

        <button className="bg-[#3FC7C8] text-white px-4 py-2.5 rounded-full text-[16px] font-[600] leading-[1.25] hover:bg-[#3AC1C2] transition-colors">
          {t("marketplace.card.activate")}
        </button>
      </div>
    </div>
  );
}
