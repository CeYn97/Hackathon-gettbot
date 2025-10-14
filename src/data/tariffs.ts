import { TariffPlan, TabConfig } from '@/types/tariffs';

export const tabsConfig: TabConfig[] = [
  {
    id: '1month',
    label: 'tariffs.tabs.1month',
  },
  {
    id: '6months',
    label: 'tariffs.tabs.6months',
    badge: {
      text: 'tariffs.badges.discount',
      color: '#3FC7C8',
    },
  },
  {
    id: '12months',
    label: 'tariffs.tabs.12months',
    badge: {
      text: 'tariffs.badges.discountGift',
      color: '#3FC7C8',
    },
  },
];

export const tariffPlans: TariffPlan[] = [
  {
    id: 'start',
    name: 'tariffs.plans.start.name',
    planType: 'Start',
    bots: 2,
    prices: {
      '1month': {
        current: 14,
        condition: 'tariffs.plans.start.prices.1month.condition',
      },
      '6months': {
        current: 13,
        original: 14,
        condition: 'tariffs.plans.start.prices.6months.condition',
        economy: 'tariffs.plans.start.prices.6months.economy',
      },
      '12months': {
        current: 12,
        original: 14,
        condition: 'tariffs.plans.start.prices.12months.condition',
        economy: 'tariffs.plans.start.prices.12months.economy',
      },
    },
  },
  {
    id: 'base',
    name: 'tariffs.plans.base.name',
    planType: 'Base',
    bots: 5,
    prices: {
      '1month': {
        current: 30,
        condition: 'tariffs.plans.base.prices.1month.condition',
      },
      '6months': {
        current: 26,
        original: 30,
        condition: 'tariffs.plans.base.prices.6months.condition',
        economy: 'tariffs.plans.base.prices.6months.economy',
      },
      '12months': {
        current: 24,
        original: 30,
        condition: 'tariffs.plans.base.prices.12months.condition',
        economy: 'tariffs.plans.base.prices.12months.economy',
      },
    },
  },
  {
    id: 'advanced',
    name: 'tariffs.plans.advanced.name',
    planType: 'Advanced',
    bots: 15,
    prices: {
      '1month': {
        current: 79,
        condition: 'tariffs.plans.advanced.prices.1month.condition',
      },
      '6months': {
        current: 68,
        original: 79,
        condition: 'tariffs.plans.advanced.prices.6months.condition',
        economy: 'tariffs.plans.advanced.prices.6months.economy',
      },
      '12months': {
        current: 61,
        original: 79,
        condition: 'tariffs.plans.advanced.prices.12months.condition',
        economy: 'tariffs.plans.advanced.prices.12months.economy',
      },
    },
  },
  {
    id: 'pro',
    name: 'tariffs.plans.pro.name',
    planType: 'Pro',
    bots: 30,
    prices: {
      '1month': {
        current: 147,
        condition: 'tariffs.plans.pro.prices.1month.condition',
      },
      '6months': {
        current: 126,
        original: 147,
        condition: 'tariffs.plans.pro.prices.6months.condition',
        economy: 'tariffs.plans.pro.prices.6months.economy',
      },
      '12months': {
        current: 111,
        original: 147,
        condition: 'tariffs.plans.pro.prices.12months.condition',
        economy: 'tariffs.plans.pro.prices.12months.economy',
      },
    },
  },
];
