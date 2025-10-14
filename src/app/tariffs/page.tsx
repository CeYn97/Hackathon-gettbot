import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Tariffs from "@/components/Tariffs";

export const metadata = {
  title: "Тарифы - GettBot",
  description: "Выберите подходящий тарифный план для торговли с GettBot",
};

export default function TariffsPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Header />
      <main className="w-full max-w-[1512px] mx-auto">
        <Tariffs />
      </main>
      <Footer />
    </div>
  );
}
