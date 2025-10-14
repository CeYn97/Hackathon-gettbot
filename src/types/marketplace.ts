export interface ApiResponse<T> {
  data: T;
  errors: string[];
  status: number;
}

export interface MarketplaceData {
  items: SetItem[];
  totalItems: number;
}

export interface SetItem {
  id: string;
  publishCount: number;
  provider: string;
  name: string;
  slotsCount: number;
  activeInstances: number;
  userAmount: number;
  tradingPairs: string[];
  datePeriodStart: string;
  datePeriodEnd: string;
  daysDuration: number;
  profitPoints: ProfitPoint[];
  profitPercentsPoints: number[];
  balancePercentPoints: BalancePoint[];
  totalPeriodProfitPercent: number;
  totalPeriodProfitPercentAnnual: number;
  maxDrawDown: number;
  minimalStartSumUsdt: number;
  riskiness: Riskiness;
  status: string;
  isVisible: boolean;
  clientStatus: ClientStatus;
}

export interface ProfitPoint {
  DateTimeVal: string;
  DecimalVal: number;
}

export interface BalancePoint {
  DateTimeVal: string;
  DecimalVal: number;
}

export type Riskiness = "High" | "Medium" | "Low";
export type ClientStatus = "Default" | "Popular" | "Recommended";
export type Provider = "All" | "Binance" | "Okx";
export type OrderBy = "Cryptocurrencies" | "TotalYield" | "MaxDrawdown" | "Runtime" | "MinInvestment" | "Bots" | "Name" | "ActiveInstances";
export type OrderDirection = "Asc" | "Desc";

export interface MarketplaceFilters {
  limit: number;
  offset: number;
  orderBy: OrderBy;
  orderDirection: OrderDirection;
  searchString?: string;
  minInvestment?: number;
  maxInvestment?: number;
  botsAmount?: number;
  currencies?: string[];
  providerFilter?: Provider;
  riskinessFilter?: Riskiness | "Any";
  clientStatusFilter?: ClientStatus | "Any";
}

export const SUPPORTED_CURRENCIES = [
  'TON', 'BNB', 'CFX', 'CHZ', 'AVAX', 'ZRX', 'HBAR', 'ATOM', 'OP', 'IMX',
  'SOL', 'XRP', 'MKR', 'NEAR', 'SUI', 'UNI', 'LTC', 'DYDX', 'DOT', 'THETA',
  'ADA', 'XLM', 'COMP', 'LINK', 'APT', 'MINA', 'ETC', 'METIS', 'DOGE', 'ICP',
  'EGLD', 'XCH', 'STORJ', 'OKB', 'AAVE', 'ASTR', 'BLUR', 'MANA', 'TRX', 'ALGO',
  'BTC', 'ETH', 'ARB', 'POL', 'FTM', 'JUP', 'OM', 'FLOKI', 'ILV', 'SAND',
  'APE', 'PEPE', 'LDO', 'INJ', 'TIA', 'STRK', 'BABYDOGE', 'BONK', 'WIF', 'MEW',
  'USDT', 'FIL', 'FLOW', 'XAUT', 'XTZ', 'EOS', 'BCH', 'CRO', 'CRV', 'ENS',
  'FLR', 'KALA', 'KSM', 'LEO', 'PYTH', 'RAY', 'RON', 'STX', 'TRB', 'SSWP',
  'ZKJ', 'ZK', 'AR', 'DUCK', 'PENGU'
] as const;

export type SupportedCurrency = typeof SUPPORTED_CURRENCIES[number];

export interface InvestmentRange {
  labelKey: string;
  min?: number;
  max?: number;
}

export const INVESTMENT_RANGES: InvestmentRange[] = [
  { labelKey: "marketplace.filters.investment.all" },
  { labelKey: "marketplace.filters.investment.le99", max: 99 },
  { labelKey: "marketplace.filters.investment.b100_499", min: 100, max: 499 },
  { labelKey: "marketplace.filters.investment.b500_999", min: 500, max: 999 },
  { labelKey: "marketplace.filters.investment.b1000_2999", min: 1000, max: 2999 }
];
