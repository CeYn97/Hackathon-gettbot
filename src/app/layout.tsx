import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/providers/I18nProvider";

export const metadata: Metadata = {
  title: "GettBot - Маркетплейс смарт-ботов для криптотрейдинга",
  description: "Торгуйте с минимальными усилиями, благодаря готовым стратегиям и простому интерфейсу. Автоматизированная торговля криптовалютами 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="preload"
          href="/font/SFProText-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/font/SFProText-Medium.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/font/SFProText-Semibold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/font/SFProText-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
