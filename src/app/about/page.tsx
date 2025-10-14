import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutBanner from "@/components/Bannners";
import PrincipalsBlock from "@/components/PrincipalsBlock";
import TeamBlock from "@/components/TeamBlock";
import RoadmapBlock from "@/components/RoadmapBlock";

export const metadata = {
  title: "О компании - GettBot",
  description: "Узнайте больше о GettBot - платформе для автоматической торговли криптовалютами",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Header />
          <main className="w-full max-w-[1512px] mx-auto">
            <AboutBanner 
              backgroundImage="/images/Banner.png"
              backgroundImageAltKey="about.banner.main.alt"
              content={{
                type: "text",
                headingKey: "about.banner.main.heading",
                textKey: "about.banner.main.text",
              }}
            />
            <PrincipalsBlock />
            <TeamBlock />
            <RoadmapBlock />
            <AboutBanner 
              backgroundImage="/images/contact-banner-bg.png"
              backgroundImageAltKey="about.banner.contact.alt"
              content={{
                type: "contact",
                emailKey: "about.banner.contact.email",
                addressKey: "about.banner.contact.address",
              }}
              bannerHeight="h-[620px]"
              contentWidth="w-[702px]"
              contentBorderRadius="rounded-[12px]"
            />
          </main>
      <Footer />
    </div>
  );
}
