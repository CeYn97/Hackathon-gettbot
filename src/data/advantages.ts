import { BigAdvantageCard, AdvantageCard } from "@/types/advantages";

export const mainPageAdvantages: BigAdvantageCard = {
  id: "main-big-card",
  titleKey: "advantages.main.primary.title",
  textKey: "advantages.main.primary.text",
  imageRef: "set-card-1.png",
  imageAlt: "Trading Bot Performance",
  buttonTextKey: "advantages.actions.startEarning",
  imageWidth: 450,
  imageHeight: 519,
  buttonMaxWidth: "max-w-[222px]"
};

export const mainPageSmallCards: AdvantageCard[] = [
  {
    id: "security",
    titleKey: "advantages.main.secondary.security.title",
    textKey: "advantages.main.secondary.security.text",
    imageRef: "security-icon.png",
    imageAlt: "Security and Protection",
    paddingBottom: "pb-18.5"
  },
  {
    id: "ease-of-use",
    titleKey: "advantages.main.secondary.ease.title",
    textKey: "advantages.main.secondary.ease.text",
    imageRef: "ease-of-use-icon.png",
    imageAlt: "Ease of Use",
    paddingBottom: "pb-18.5"
  }
];


export const referralPageAdvantages: BigAdvantageCard = {
  id: "referral-big-card",
  titleKey: "advantages.referral.primary.title",
  textKey: "advantages.referral.primary.text",
  imageRef: "referral-top.png",
  imageAlt: "High Rewards",
  buttonTextKey: "advantages.actions.referralSystem",
  imageWidth: 638,
  imageHeight: 340,
  buttonMaxWidth: "max-w-[231px]",
  cardHeight: "h-[430px]",
  textButtonGap: "gap-46"
};

export const referralPageSmallCards: AdvantageCard[] = [
  {
    id: "simplicity",
    titleKey: "advantages.referral.secondary.simplicity.title",
    textKey: "advantages.referral.secondary.simplicity.text",
    imageRef: "referral-people.png",
    imageAlt: "Simplicity",
    paddingBottom: "pb-8"
  },
  {
    id: "transparency",
    titleKey: "advantages.referral.secondary.transparency.title",
    textKey: "advantages.referral.secondary.transparency.text",
    imageRef: "referral-diagram.png",
    imageAlt: "Full Transparency",
    paddingBottom: "pb-8"
  }
];


export const dashboardPageAdvantages: BigAdvantageCard = {
  id: "dashboard-big-card",
  titleKey: "advantages.dashboard.primary.title",
  textKey: "advantages.dashboard.primary.text",
  buttonTextKey: "advantages.actions.startEarning",
  imageWidth: 0, 
  imageHeight: 0, 
  buttonMaxWidth: "max-w-[222px]",
  textButtonGap: "gap-16"
};

export const dashboardPageSmallCards: AdvantageCard[] = [
  {
    id: "referral-list",
    titleKey: "advantages.dashboard.secondary.list.title",
    textKey: "advantages.dashboard.secondary.list.text",
    paddingBottom: "pb-11.5",
    paddingTop: "pt-11.5"
  },
  {
    id: "referral-link",
    titleKey: "advantages.dashboard.secondary.link.title",
    textKey: "advantages.dashboard.secondary.link.text",
    paddingBottom: "pb-11.5",
    paddingTop: "pt-11.5"
  }
];
