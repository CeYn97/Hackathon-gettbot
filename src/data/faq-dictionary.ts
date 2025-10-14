export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSection {
  id: string;
  title: string;
  items: FAQItem[];
}

export const faqDictionary: FAQSection[] = [
  {
    id: "general",
    title: "faq.dictionary.general.title",
    items: [
      {
        id: "what-is-gettbot",
        question: "faq.dictionary.general.items.what-is-gettbot.question",
        answer: "faq.dictionary.general.items.what-is-gettbot.answer"
      },
      {
        id: "how-works-gettbot",
        question: "faq.dictionary.general.items.how-works-gettbot.question",
        answer: "faq.dictionary.general.items.how-works-gettbot.answer"
      },
      {
        id: "who-suitable",
        question: "faq.dictionary.general.items.who-suitable.question",
        answer: "faq.dictionary.general.items.who-suitable.answer"
      },
      {
        id: "trading-experience",
        question: "faq.dictionary.general.items.trading-experience.question",
        answer: "faq.dictionary.general.items.trading-experience.answer"
      },
      {
        id: "free-tariff",
        question: "faq.dictionary.general.items.free-tariff.question",
        answer: "faq.dictionary.general.items.free-tariff.answer"
      }
    ]
  },
  {
    id: "getting-started",
    title: "faq.dictionary.getting-started.title",
    items: [
      {
        id: "how-register",
        question: "faq.dictionary.getting-started.items.how-register.question",
        answer: "faq.dictionary.getting-started.items.how-register.answer"
      },
      {
        id: "no-exchange-account",
        question: "faq.dictionary.getting-started.items.no-exchange-account.question",
        answer: "faq.dictionary.getting-started.items.no-exchange-account.answer"
      },
      {
        id: "connect-exchange",
        question: "faq.dictionary.getting-started.items.connect-exchange.question",
        answer: "faq.dictionary.getting-started.items.connect-exchange.answer"
      },
      {
        id: "available-strategies",
        question: "faq.dictionary.getting-started.items.available-strategies.question",
        answer: "faq.dictionary.getting-started.items.available-strategies.answer"
      },
      {
        id: "learning-materials",
        question: "faq.dictionary.getting-started.items.learning-materials.question",
        answer: "faq.dictionary.getting-started.items.learning-materials.answer"
      }
    ]
  },
  {
    id: "technical",
    title: "faq.dictionary.technical.title",
    items: [
      {
        id: "supported-exchanges",
        question: "faq.dictionary.technical.items.supported-exchanges.question",
        answer: "faq.dictionary.technical.items.supported-exchanges.answer"
      },
      {
        id: "bot-stopped-working",
        question: "faq.dictionary.technical.items.bot-stopped-working.question",
        answer: "faq.dictionary.technical.items.bot-stopped-working.answer"
      }
    ]
  },
  {
    id: "security",
    title: "faq.dictionary.security.title",
    items: [
      {
        id: "funds-security",
        question: "faq.dictionary.security.items.funds-security.question",
        answer: "faq.dictionary.security.items.funds-security.answer"
      },
      {
        id: "withdrawal-access",
        question: "faq.dictionary.security.items.withdrawal-access.question",
        answer: "faq.dictionary.security.items.withdrawal-access.answer"
      },
      {
        id: "registration-data",
        question: "faq.dictionary.security.items.registration-data.question",
        answer: "faq.dictionary.security.items.registration-data.answer"
      },
      {
        id: "security-measures",
        question: "faq.dictionary.security.items.security-measures.question",
        answer: "faq.dictionary.security.items.security-measures.answer"
      }
    ]
  },
  {
    id: "financial",
    title: "faq.dictionary.financial.title",
    items: [
      {
        id: "tariff-plans",
        question: "faq.dictionary.financial.items.tariff-plans.question",
        answer: "faq.dictionary.financial.items.tariff-plans.answer"
      },
      {
        id: "profit-accrual",
        question: "faq.dictionary.financial.items.profit-accrual.question",
        answer: "faq.dictionary.financial.items.profit-accrual.answer"
      },
      {
        id: "referral-withdrawal",
        question: "faq.dictionary.financial.items.referral-withdrawal.question",
        answer: "faq.dictionary.financial.items.referral-withdrawal.answer"
      },
      {
        id: "withdrawal-methods",
        question: "faq.dictionary.financial.items.withdrawal-methods.question",
        answer: "faq.dictionary.financial.items.withdrawal-methods.answer"
      }
    ]
  },
  {
    id: "referral",
    title: "faq.dictionary.referral.title",
    items: [
      {
        id: "what-is-referral",
        question: "faq.dictionary.referral.items.what-is-referral.question",
        answer: "faq.dictionary.referral.items.what-is-referral.answer"
      },
      {
        id: "get-referral-link",
        question: "faq.dictionary.referral.items.get-referral-link.question",
        answer: "faq.dictionary.referral.items.get-referral-link.answer"
      },
      {
        id: "referral-rewards",
        question: "faq.dictionary.referral.items.referral-rewards.question",
        answer: "faq.dictionary.referral.items.referral-rewards.answer"
      },
      {
        id: "referral-withdrawal-timing",
        question: "faq.dictionary.referral.items.referral-withdrawal-timing.question",
        answer: "faq.dictionary.referral.items.referral-withdrawal-timing.answer"
      }
    ]
  }
];

export const getAllFAQItems = (): FAQItem[] => {
  return faqDictionary.flatMap(section => section.items);
};

export const getFAQItemsBySection = (sectionId: string): FAQItem[] => {
  const section = faqDictionary.find(s => s.id === sectionId);
  return section ? section.items : [];
};

export const getAllFAQSections = (): FAQSection[] => {
  return faqDictionary;
};
