

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function VideoGuideBlock() {
  const { t, i18n } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  const getVideoUrl = () => {
    const currentLanguage = (i18n.resolvedLanguage || i18n.language || 'ru').toLowerCase();
    if (currentLanguage.startsWith("ru")) {
      return "https://player.vimeo.com/video/1073517468?autoplay=1&title=0&byline=0&portrait=0";
    } else {
      return "https://www.youtube.com/embed/dJX_dtC3NEs?autoplay=1&rel=0&modestbranding=1";
    }
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <section className="hidden md:flex flex-col w-full gap-12 px-[120px] py-20">
        <h2 className="text-[#0C0B16] text-[52px] font-[600] leading-[1.23]">
          {t('videoGuide.heading')}
        </h2>

        <div className="relative w-[1273px] h-[716px] mx-auto">
        {!isPlaying ? (
          <div className="relative w-full h-full cursor-pointer group" onClick={handlePlayClick}>
            <Image
              src="/images/video-guide-poster.png"
              alt={t('videoGuide.thumbnailAlt')}
              fill
              className="object-cover rounded-lg"
            />
            
             <div className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-black/20 transition-colors duration-200">
              <div className="flex items-center justify-center w-20 h-20 bg-white/90 rounded-full shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-200">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M8 5V19L19 12L8 5Z"
                    fill="#0C0B16"
                  />
                </svg>
              </div>
            </div>
          </div>
         ) : (
           <div className="relative w-full h-full bg-black rounded-lg">
             <iframe
               src={getVideoUrl()}
               width="100%"
               height="100%"
               frameBorder="0"
             allow="autoplay; fullscreen; picture-in-picture"
             allowFullScreen
             className="rounded-lg"
             title={t('videoGuide.iframeTitle')}
           ></iframe>
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-xl transition-colors"
            aria-label={t('videoGuide.close')}
          >
            ×
          </button>
          </div>
        )}
      </div>
    </section>

      <section className="flex md:hidden flex-col w-full gap-8 px-5 py-8">
        <h2 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-left">
          {t('videoGuide.heading')}
        </h2>

        <div className="relative w-full h-[180px]">
          {!isPlaying ? (
            <div className="relative w-full h-full cursor-pointer group" onClick={handlePlayClick}>
              <Image
                src="/images/video-guide-poster.png"
                alt={t('videoGuide.thumbnailAlt')}
                fill
                className="object-cover rounded-lg"
              />
              
               <div className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-black/20 transition-colors duration-200">
                <div className="flex items-center justify-center w-12 h-12 bg-white/90 rounded-full shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-200">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-0.5"
                  >
                    <path
                      d="M8 5V19L19 12L8 5Z"
                      fill="#0C0B16"
                    />
                  </svg>
                </div>
              </div>
            </div>
           ) : (
             <div className="relative w-full h-full bg-black rounded-lg">
               <iframe
                 src={getVideoUrl()}
                 width="100%"
                 height="100%"
                 frameBorder="0"
               allow="autoplay; fullscreen; picture-in-picture"
               allowFullScreen
               className="rounded-lg"
               title={t('videoGuide.iframeTitle')}
             ></iframe>
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-2 right-2 w-6 h-6 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-sm transition-colors"
              aria-label={t('videoGuide.close')}
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
