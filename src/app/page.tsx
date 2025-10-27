"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import HeroBlock from "@/components/HeroBlock";
import Advantages from "@/components/Advantages";
import Exchanges from "@/components/Exchanges";
import SmartBots from "@/components/SmartBots";
import Tariffs from "@/components/Tariffs";
import QuickStart from "@/components/QuickStart";
import VideoGuideBlock from "@/components/VideoGuide";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { mainPageAdvantages, mainPageSmallCards } from "@/data/advantages";

const mainPageFAQItems = [
  {
    id: "how-start-gettbot",
    question: "Как начать пользоваться GettBot?",
    answer: "Зарегистрируйтесь на платформе, подключите API вашей биржи, выберите подходящий сэт смарт-ботов и начните автоматизированную торговлю. Весь процесс займет не более 10 минут."
  },
  {
    id: "trading-expertise",
    question: "Нужно ли мне быть экспертом в трейдинге, чтобы использовать GettBot?",
    answer: "Нет, не нужно! Наши смарт-боты полностью готовы к работе и не требуют специальных знаний. Просто подключите API биржи и выберите подходящий сэт - боты начнут торговать автоматически."
  },
  {
    id: "funds-security",
    question: "Насколько безопасны мои средства при использовании GettBot?",
    answer: "Ваши средства остаются на вашей бирже. GettBot использует только API-ключи для торговли без права вывода средств. Мы не имеем доступа к вашим деньгам и не можем их вывести."
  },
  {
    id: "first-results",
    question: "Сколько времени нужно для того, чтобы увидеть первые результаты?",
    answer: "Первые результаты можно увидеть уже в течение первых часов работы ботов. Однако для получения стабильной прибыли рекомендуется использовать ботов в течение нескольких недель."
  }
];

export default function Home() {
  const router = useRouter();

  const handleFAQClick = () => {
    router.push('/faq');
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] max-w-[1512px]">
      <Header />
      <main className="w-full max-w-[1512px] mx-auto">
        <HeroBlock />
        <Advantages 
          bigCard={mainPageAdvantages}
          smallCards={mainPageSmallCards}
          starPosition={{
            left: '407px',
            top: '157px',
            zIndex: 0
          }}
        />
        <Exchanges />
        <SmartBots />
        <div id="tariffs">
          <Tariffs />
        </div>
        <QuickStart />
        <VideoGuideBlock />
        <FAQ 
          items={mainPageFAQItems} 
          onButtonClick={handleFAQClick}
        />
      </main>
      <Footer />
    </div>
  );
}
