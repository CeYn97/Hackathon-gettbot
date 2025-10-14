"use client";

import { useTranslation } from "react-i18next";

const teamMembers = [
  {
    nameKey: "team.members.vladislav.name",
    roleKey: "team.members.vladislav.role",
  },
  {
    nameKey: "team.members.victor.name",
    roleKey: "team.members.victor.role",
  },
  {
    nameKey: "team.members.alexander.name",
    roleKey: "team.members.alexander.role",
  },
] as const;

export default function TeamBlock() {
  const { t } = useTranslation();

  return (
    <>
      <section className="hidden md:flex flex-col items-center w-full gap-12 px-[120px] py-20 bg-[#F9F9F9]">
      <div className="flex flex-col items-center w-full gap-12">
        <div className="flex w-full gap-5">
          <div className="flex flex-col gap-[160px] p-12 bg-[#3FC7C8] rounded-[24px] shadow-[0px_1.62px_9.72px_rgba(15,15,15,0.12)] w-[734px]">
            <h2 className="text-[rgba(255,255,255,0.52)] text-[52px] font-[600] leading-[1.23] text-left">
              {t("team.heading")}
            </h2>

            <p className="text-[#FFFFFF] text-[40px] font-[600] leading-[1.2] text-left">
              {t("team.description")}
            </p>
          </div>

          <div className="flex flex-col justify-start gap-6 flex-1">
            {teamMembers.map((member) => (
              <div
                key={member.nameKey}
                className="flex flex-col gap-8 p-8 bg-[rgba(255,255,255,0.52)] backdrop-blur-[64px] rounded-[24px] shadow-[0px_1.62px_9.72px_rgba(15,15,15,0.12)]"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <h3 className="text-[#0C0B16] text-[28px] font-[600] leading-[1.14] text-left flex-1">
                      {t(member.nameKey)}
                    </h3>

                    <div className="w-8 h-8" aria-hidden="true">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="4" fill="#0C64C5" />
                        <path
                          d="M8.5 12.5C8.5 11.1193 9.61929 10 11 10H21C22.3807 10 23.5 11.1193 23.5 12.5V21C23.5 22.3807 22.3807 23.5 21 23.5H11C9.61929 23.5 8.5 22.3807 8.5 21V12.5Z"
                          fill="#FFFFFF"
                        />
                        <path
                          d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
                          fill="#0C64C5"
                        />
                        <path d="M10.5 15H13.5V20.5H10.5V15Z" fill="#0C64C5" />
                        <path
                          d="M15.5 15H18.5V16.5H18.6C18.8 15.9 19.5 15.3 20.6 15.3C22.8 15.3 23.5 16.7 23.5 18.8V20.5H20.5V19.1C20.5 18.2 20.4 17.1 19.3 17.1C18.2 17.1 18 18 18 19.1V20.5H15.5V15Z"
                          fill="#0C64C5"
                        />
                      </svg>
                    </div>
                  </div>

                  <p className="text-[#828A9D] text-[20px] font-[500] leading-[1.2] text-left">
                    {t(member.roleKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      <section className="flex md:hidden flex-col items-center w-full gap-8 px-5 py-8 bg-[#F9F9F9]">
        <div className="flex flex-col items-center w-full gap-8">
          <div className="flex flex-col gap-20 p-6 bg-[#3FC7C8] rounded-[16px] shadow-[0px_1.62px_9.72px_rgba(15,15,15,0.12)] w-full">
            <h2 className="text-[rgba(255,255,255,0.52)] text-[28px] font-[600] leading-[1.14] text-left">
              {t("team.heading")}
            </h2>

            <p className="text-[#FFFFFF] text-[24px] font-[600] leading-[1.17] text-left">
              {t("team.description")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
