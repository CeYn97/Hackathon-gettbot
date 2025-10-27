import Image from "next/image";
import { useTranslation } from "react-i18next";
import { AdvantagesProps } from "@/types/advantages";

export default function Advantages({
  titleKey,
  bigCard,
  smallCards,
  showStar = true,
  starPosition = {
    left: '407px',
    top: '157px',
    zIndex: 10
  },
  sectionPadding = "px-[120px] py-20",
  sectionGap = "gap-12"
}: AdvantagesProps) {
  const { t } = useTranslation();
  const heading = titleKey ? t(titleKey) : t("advantages.defaultTitle");

  return (
    <>
      <section className={`hidden md:flex flex-col items-center w-full ${sectionGap} ${sectionPadding} bg-[#F9F9F9]`}>
        <h2 className="text-[#0C0B16] text-[52px] font-[600] leading-[1.23] text-center">
          {heading}
        </h2>

        <div className="grid grid-cols-[1fr_1fr] w-full gap-5 relative">
        {showStar && (
          <div
            className="absolute"
            style={{
              left: starPosition.left,
              top: starPosition.top,
              zIndex: starPosition.zIndex
            }}
          >
            <Image
              src="/images/star-6-main.svg"
              alt="Star 6 decorative element"
              width={674}
              height={560}
            />
          </div>
        )}

        
        {bigCard && (
          <div className={`flex flex-col gap-10 ${bigCard.imageWidth && bigCard.imageHeight ? 'p-12' : 'p-12'} bg-[rgba(255,255,255,0.25)] backdrop-blur-[64px] rounded-[24px] shadow-[0px_1.62px_9.72px_rgba(15,15,15,0.12)] relative z-10 ${bigCard.imageWidth && bigCard.imageHeight ? '' : 'w-[734px]'}`}>
            
            <div className={`flex flex-col ${bigCard.textButtonGap || 'gap-10'} flex-1`}>
              
              <div className={`flex flex-col ${bigCard.imageWidth && bigCard.imageHeight ? 'items-center gap-5' : 'gap-5'} flex-1`}>
                
                {bigCard.imageRef && bigCard.imageWidth && bigCard.imageHeight && (
                  <div 
                    className="rounded-[32px] border border-[#E2E2E2] border-[1px] overflow-hidden"
                    style={{
                      width: bigCard.imageWidth,
                      height: bigCard.imageHeight
                    }}
                  >
                    <Image
                      src={`/images/${bigCard.imageRef}`}
                      alt={bigCard.imageAlt || ""}
                      width={bigCard.imageWidth}
                      height={bigCard.imageHeight}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                
                <h3 className="text-[#0C0B16] text-[36px] font-[600] leading-[1.33] text-left w-full">
                  {t(bigCard.titleKey)}
                </h3>

                
                <p className={`text-[#828A9D] text-[20px] font-[500] leading-[1.2] text-left whitespace-pre-line ${bigCard.imageWidth && bigCard.imageHeight ? 'w-[638px]' : 'w-full'}`}>
                  {t(bigCard.textKey)}
                </p>
              </div>

             
              <a 
                href="https://app.gettbot.io/auth"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex justify-start items-center p-1 bg-[#F4F4F4] border border-[#DFDFDF] border-[1px] rounded-full hover:bg-[#161616] hover:border-[#161616] transition-colors w-fit"
              >
                <div className="flex items-center gap-1 px-4 py-[10px] bg-[#3FC7C8] rounded-full shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] group-hover:bg-[#161616] transition-colors">
                  <span className="text-[#F9F9F9] text-[16px] font-[500] leading-[1.25] text-center whitespace-nowrap">
                    {t(bigCard.buttonTextKey)}
                  </span>
                  <Image
                    src="/images/chevron-right.svg"
                    alt="Arrow right"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </div>
              </a>
            </div>
          </div>
        )}

        {smallCards && smallCards.length > 0 && (
          <div className="flex flex-col gap-5">
            {smallCards.map((card) => (
              <div key={card.id} className={`flex flex-col ${card.imageRef ? 'gap-7 pt-8 px-8' : 'gap-2 py-8 px-10'} ${card.paddingBottom || 'pb-18.5'} ${card.paddingTop || ''} bg-[rgba(255,255,255,0.25)] backdrop-blur-[64px] rounded-[24px] shadow-[0px_1.62px_9.72px_rgba(15,15,15,0.12)] flex-1`}>
                {card.imageRef && (
                  <div className="w-full h-[168px] rounded-[24px] overflow-hidden">
                    <Image
                      src={`/images/${card.imageRef}`}
                      alt={card.imageAlt || ""}
                      width={1600}
                      height={608}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="flex flex-col gap-2 flex-1">
                  <h4 className={`text-[#0C0B16] ${card.imageRef ? 'text-[24px] font-[500] leading-[1.17]' : 'text-[24px] font-[500] leading-[1.17]'} text-left`}>
                    {t(card.titleKey)}
                  </h4>
                  <p className="text-[#828A9D] text-[20px] font-[500] leading-[1.2] text-left">
                    {t(card.textKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
      <section className="flex md:hidden flex-col items-center w-full gap-8 px-5 py-8 bg-[#F9F9F9]">
        <h2 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-center">
          {heading}
        </h2>

        <div className="flex flex-col gap-3 w-full">
          {bigCard && (
            <div className="flex flex-col gap-6 p-4 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-[12px] shadow-[0px_1.62px_9.72px_rgba(15,15,15,0.12)]">
              {bigCard.imageRef && bigCard.imageWidth && bigCard.imageHeight && (
                <div className="flex justify-center w-full">
                  <div 
                    className="w-[288px] h-[332px] rounded-[16px] border border-[#E2E2E2] border-[1px] overflow-hidden"
                    style={{
                      width: 288,
                      height: 332
                    }}
                  >
                    <Image
                      src="/images/advantages-img-bigCars-mobile.png"
                      alt={bigCard.imageAlt || ""}
                      width={288}
                      height={332}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-3">
                <h3 className="text-[#0C0B16] text-[24px] font-[600] leading-[1.17] text-left">
                  {t(bigCard.titleKey)}
                </h3>
                <p className="text-[#828A9D] text-[14px] font-[500] leading-[1.29] text-left whitespace-pre-line">
                  {t(bigCard.textKey)}
                </p>
              </div>

              <a 
                href="https://app.gettbot.io/auth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-1 p-1 bg-[#F4F4F4] border border-[#DFDFDF] border-[1px] rounded-full w-full"
              >
                <div className="flex justify-center items-center gap-1 px-4 py-2.5 bg-[#3FC7C8] rounded-full shadow-[0px_2px_8px_0px_rgba(15,15,15,0.12)] w-full">
                  <span className="text-[#F9F9F9] text-[16px] font-[500] leading-[1.25] text-center">
                    {t(bigCard.buttonTextKey)}
                  </span>
                  <Image
                    src="/images/chevron-right.svg"
                    alt="Arrow right"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </div>
              </a>
            </div>
          )}

          {smallCards && smallCards.length > 0 && (
            <div className="flex flex-col gap-3">
              {smallCards.map((card) => (
                <div key={card.id} className="flex flex-col gap-6 p-4 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-[24px] shadow-[0px_1.62px_9.72px_rgba(15,15,15,0.12)]">
                  {card.imageRef && (
                    <div className="w-full h-[112px] rounded-[24px] overflow-hidden">
                      <Image
                        src={`/images/${card.imageRef}`}
                        alt={card.imageAlt || ""}
                        width={400}
                        height={112}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <h4 className="text-[#0C0B16] text-[16px] font-[500] leading-[1.25] text-left">
                      {t(card.titleKey)}
                    </h4>
                    <p className="text-[#828A9D] text-[14px] font-[500] leading-[1.29] text-left">
                      {t(card.textKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
