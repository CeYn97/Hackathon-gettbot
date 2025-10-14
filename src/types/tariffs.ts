export type Period = '1month' | '6months' | '12months';

export interface TariffPlan {
  id: string;
  name: string;
  planType: 'Start' | 'Base' | 'Advanced' | 'Pro';
  bots: number;
  prices: {
    [K in Period]: {
      current: number;
      original?: number;
      condition: string;
      economy?: string;
    };
  };
}

export interface TabConfig {
  id: Period;
  label: string;
  badge?: {
    text: string;
    color: string;
  };
}

export interface TariffsState {
  selectedPeriod: Period;
  selectedPlan: string | null;
}
