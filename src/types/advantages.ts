export interface AdvantageCard {
  id: string;
  titleKey: string;
  textKey: string;
  imageRef?: string;
  imageAlt?: string;
  paddingBottom?: string;
  paddingTop?: string;
}

export interface BigAdvantageCard {
  id: string;
  titleKey: string;
  textKey: string;
  imageRef?: string;
  imageAlt?: string;
  buttonTextKey: string;
  imageWidth?: number;
  imageHeight?: number;
  buttonMaxWidth?: string;
  cardHeight?: string;
  textButtonGap?: string;
}

export interface AdvantagesProps {
  titleKey?: string;
  bigCard?: BigAdvantageCard;
  smallCards?: AdvantageCard[];
  showStar?: boolean;
  starPosition?: {
    left: string;
    top: string;
    zIndex: number;
  };
  sectionPadding?: string;
  sectionGap?: string;
}
