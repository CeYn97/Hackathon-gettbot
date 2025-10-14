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

export interface FAQProps {
  items?: FAQItem[];
  sections?: FAQSection[];
  titleKey?: string;
  subtitleKey?: string;
  buttonTextKey?: string;
  onButtonClick?: () => void;
  showSections?: boolean;
}
