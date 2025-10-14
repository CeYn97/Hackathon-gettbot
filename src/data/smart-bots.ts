export interface AccordionItem {
  id: string;
  titleKey: string;
  contentKey: string;
  isOpen: boolean;
}

export const smartBotsData: AccordionItem[] = [
  {
    id: "1",
    titleKey: "smartBots.items.automaticTrading.title",
    contentKey: "smartBots.items.automaticTrading.content",
    isOpen: false
  },
  {
    id: "2", 
    titleKey: "smartBots.items.advancedStrategies.title",
    contentKey: "smartBots.items.advancedStrategies.content",
    isOpen: false
  },
  {
    id: "3",
    titleKey: "smartBots.items.transparency.title", 
    contentKey: "smartBots.items.transparency.content",
    isOpen: false
  },
  {
    id: "4",
    titleKey: "smartBots.items.security.title",
    contentKey: "smartBots.items.security.content",
    isOpen: false
  },
  {
    id: "5",
    titleKey: "smartBots.items.exchanges.title",
    contentKey: "smartBots.items.exchanges.content",
    isOpen: false
  },
  {
    id: "6",
    titleKey: "smartBots.items.stats.title",
    contentKey: "smartBots.items.stats.content",
    isOpen: false
  }
];
