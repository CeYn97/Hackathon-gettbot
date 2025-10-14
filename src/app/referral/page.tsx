"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReferralPromoBlock from "@/components/ReferralPromoBlock";
import ReferralFAQBlock from "@/components/ReferralFAQBlock";
import ReferralButton from "@/components/ReferralButton";
import Calculator from "@/components/Calculator";
import QuickStart from "@/components/QuickStart";
import Advantages from "@/components/Advantages";
import FAQ from "@/components/FAQ";
import { referralSteps } from "@/data/referral-steps";
import { withdrawalSteps } from "@/data/withdrawal-steps";
import { referralPageAdvantages, referralPageSmallCards, dashboardPageAdvantages, dashboardPageSmallCards } from "@/data/advantages";
import { referralFAQItems } from "@/data/referral-faq";

export default function ReferralPage() {
  const router = useRouter();

  const handleFAQClick = () => {
    router.push('/faq');
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Header />
      <main className="w-full max-w-[1512px] mx-auto">
        <ReferralPromoBlock />
        <ReferralFAQBlock />
        
        <ReferralButton />
        
             <Calculator />

             <QuickStart
               titleKey="referral.quickStart.emptyTitle"
               steps={referralSteps}
               showImages={false}
               cardHeight="h-auto"
               gap="gap-5"
             />

             <Advantages
               titleKey="referral.advantages.programTitle"
               bigCard={referralPageAdvantages}
               smallCards={referralPageSmallCards}
               starPosition={{
                 left: '407px',
                 top: '157px',
                 zIndex: 0
               }}
             />

             <Advantages
               titleKey="referral.advantages.dashboardTitle"
               bigCard={dashboardPageAdvantages}
               smallCards={dashboardPageSmallCards}
               starPosition={{
                 left: '407px',
                 top: '-83px',
                 zIndex: 0
               }}
             />

             <QuickStart
               titleKey="referral.withdrawal.title"
               steps={withdrawalSteps}
               showImages={true}
               cardHeight="h-[448px]"
               gap="gap-5"
               showStar={true}
               starPosition={{
                 left: '419px',
                 top: '1px',
                 zIndex: 0
               }}
               imagePath="withdrawal-step"
             />

             <FAQ 
               items={referralFAQItems}
               onButtonClick={handleFAQClick}
             />
      </main>
      <Footer />
    </div>
  );
}
