"use client";

import Image from "next/image";
import { useState, useMemo, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

type VideoVariant = "desktop" | "mobile";

export default function VideoGuideBlock() {
  const { t, i18n } = useTranslation();
  const [playingVariant, setPlayingVariant] = useState<VideoVariant | null>(
    null
  );
  const desktopIframeRef = useRef<HTMLIFrameElement>(null);
  const mobileIframeRef = useRef<HTMLIFrameElement>(null);

  const videoUrl = useMemo(() => {
    const currentLanguage = (
      i18n.resolvedLanguage ||
      i18n.language ||
      "ru"
    ).toLowerCase();
    if (currentLanguage.startsWith("ru")) {
      return "https://player.vimeo.com/video/1073517468?autoplay=1&title=0&byline=0&portrait=0";
    } else {
      return "https://www.youtube.com/embed/dJX_dtC3NEs?autoplay=1&rel=0&modestbranding=1&enablejsapi=1";
    }
  }, [i18n.resolvedLanguage, i18n.language]);

  const stopVideo = (iframe: HTMLIFrameElement | null, url: string) => {
    if (!iframe) return;
    try {
      if (iframe.contentWindow) {
        if (url.includes("youtube.com")) {
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"stopVideo","args":""}',
            "*"
          );
        }

        if (url.includes("vimeo.com")) {
          iframe.contentWindow.postMessage('{"method":"pause"}', "*");
        }
      }
    } catch {}
  };

  const handlePlayClick = (variant: VideoVariant) => {
    setPlayingVariant(variant);
  };

  const handleClose = () => {
    stopVideo(desktopIframeRef.current, videoUrl);
    stopVideo(mobileIframeRef.current, videoUrl);
    setPlayingVariant(null);
  };

  useEffect(() => {
    return () => {
      stopVideo(desktopIframeRef.current, videoUrl);
      stopVideo(mobileIframeRef.current, videoUrl);
    };
  }, [videoUrl]);

  useEffect(() => {
    setPlayingVariant(null);
  }, [videoUrl]);

  return (
    <>
      <section className="hidden md:flex flex-col w-full gap-12 px-[120px] py-20">
        <h2 className="text-[#0C0B16] text-[52px] font-[600] leading-[1.23]">
          {t("videoGuide.heading")}
        </h2>

        <div className="relative w-[1273px] h-[716px] mx-auto">
          {playingVariant !== "desktop" ? (
            <div
              className="relative w-full h-full cursor-pointer group"
              onClick={() => handlePlayClick("desktop")}
            >
              <Image
                src="/images/video-guide-poster.png"
                alt={t("videoGuide.thumbnailAlt")}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-200 rounded-lg" />
            </div>
          ) : (
            <div className="relative w-full h-full bg-black rounded-lg">
              <iframe
                ref={desktopIframeRef}
                key={`video-desktop-${videoUrl}`}
                src={videoUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
                title={t("videoGuide.iframeTitle")}
              ></iframe>
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-xl transition-colors z-10"
                aria-label={t("videoGuide.close")}
              >
                ×
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="flex md:hidden flex-col w-full gap-8 px-5 py-8">
        <h2 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-left">
          {t("videoGuide.heading")}
        </h2>

        <div className="relative w-full h-[180px]">
          {playingVariant !== "mobile" ? (
            <div
              className="relative w-full h-full cursor-pointer group"
              onClick={() => handlePlayClick("mobile")}
            >
              <Image
                src="/images/video-guide-poster.png"
                alt={t("videoGuide.thumbnailAlt")}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-200 rounded-lg" />
            </div>
          ) : (
            <div className="relative w-full h-full bg-black rounded-lg">
              <iframe
                ref={mobileIframeRef}
                key={`video-mobile-${videoUrl}`}
                src={videoUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
                title={t("videoGuide.iframeTitle")}
              ></iframe>
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 w-6 h-6 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-sm transition-colors z-10"
                aria-label={t("videoGuide.close")}
              >
                ×
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
