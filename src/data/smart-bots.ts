export interface AccordionItem {
  id: string;
  titleKey: string;
  contentKey: string;
  imageRef: string;
  isOpen: boolean;
}

export const smartBotsData: AccordionItem[] = [
  {
    id: "1",
    titleKey: "smartBots.items.automaticTrading.title",
    contentKey: "smartBots.items.automaticTrading.content",
    imageRef: "smartbots-image-1d2a07.png",
    isOpen: false
  },
  {
    id: "2", 
    titleKey: "smartBots.items.advancedStrategies.title",
    contentKey: "smartBots.items.advancedStrategies.content",
    imageRef: "strategy.png",
    isOpen: false
  },
  {
    id: "3",
    titleKey: "smartBots.items.transparency.title", 
    contentKey: "smartBots.items.transparency.content",
    imageRef: "reporting.png",
    isOpen: false
  },
  {
    id: "4",
    titleKey: "smartBots.items.security.title",
    contentKey: "smartBots.items.security.content",
    imageRef: "safety.png",
    isOpen: false
  },
  {
    id: "5",
    titleKey: "smartBots.items.exchanges.title",
    contentKey: "smartBots.items.exchanges.content",
    imageRef: "oneplace.png",
    isOpen: false
  },
  {
    id: "6",
    titleKey: "smartBots.items.stats.title",
    contentKey: "smartBots.items.stats.content",
    imageRef: "statistics.png",
    isOpen: false
  }
];
