"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBlock from "@/components/PromoBlock";


export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Header />
      <main className="w-full max-w-[1512px] mx-auto">
        <PromoBlock 
          onSupportClick={() => {
            window.open('mailto:admin@gettbot.io', '_blank');
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
