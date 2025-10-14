export interface StepCard {
  id: string;
  stepKey: string;
  titleKey: string;
  imageRef?: string;
  imageAlt?: string;
}

export const quickStartSteps: StepCard[] = [
  {
    id: "step1",
    stepKey: "quickStart.steps.step1.step",
    titleKey: "quickStart.steps.step1.title",
    imageRef: "780bccc9c83c5015ceac6234c9e417ba03476993",
    imageAlt: "Registration and subscription"
  },
  {
    id: "step2", 
    stepKey: "quickStart.steps.step2.step",
    titleKey: "quickStart.steps.step2.title",
    imageRef: "281aaecf5957b227af0425955c6de8a546a5ca27",
    imageAlt: "Choose suitable set"
  },
  {
    id: "step3",
    stepKey: "quickStart.steps.step3.step", 
    titleKey: "quickStart.steps.step3.title",
    imageRef: "109dcbb10fe3b05c9d68ade1dd9bca88f0598ecd",
    imageAlt: "Connect exchange account"
  },
  {
    id: "step4",
    stepKey: "quickStart.steps.step4.step",
    titleKey: "quickStart.steps.step4.title", 
    imageRef: "e7e0830d0a438f1cfe7ce21a0992f5707132dc5e",
    imageAlt: "Define trading deposit"
  }
];
