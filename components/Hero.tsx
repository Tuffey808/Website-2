"use client";

import { Language, translations } from "./data/translations";

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language];
  const isArabic = language === "ar";

  const heroDesktopImage = isArabic
    ? "/images/hero/hero-banner-ar.png"
    : "/images/hero/hero-banner-en.png";

  const heroMobileImage = isArabic
    ? "/images/hero/banner-mobile-ar.png"
    : "/images/hero/banner-mobile-en.png";

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#faf7f0] pt-[82px]"
    >
      {/* =====================================================
          DESKTOP
          ===================================================== */}
      <div className="relative hidden lg:block">
        <img
          src={heroDesktopImage}
          alt=""
          className="block h-auto w-full"
        />

        <div
          className={`absolute inset-y-0 ${
            isArabic ? "right-0" : "left-0"
          } flex w-[50%] items-center`}
        >
          <div
            dir={isArabic ? "rtl" : "ltr"}
            className={`w-full px-[5%] ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <div className="max-w-[650px]">
              <p className="mb-5 text-[18px] font-bold uppercase tracking-[0.08em] text-[#e5aa2f]">
                {t.hero.eyebrow}
              </p>

              <h1 className="text-[56px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#63351f] xl:text-[60px]">
                {t.hero.title}
              </h1>

              <h2 className="mt-5 text-[29px] font-bold uppercase leading-[1.15] tracking-[0.04em] text-[#e5aa2f]">
                {t.hero.subtitle}
              </h2>

              <p className="mt-5 text-[16px] leading-[1.6] text-[#4d4038]">
                {t.hero.description}
              </p>

              <p className="mt-4 text-sm font-semibold tracking-wide text-[#6b625d]">
                {t.hero.keywords}
              </p>

              <div
                className={`mt-7 flex gap-3 ${
                  isArabic ? "flex-row-reverse justify-end" : ""
                }`}
              >
                <a
                  href="#contact-form"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-[#e5aa2f] px-7 text-xs font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-[#c98e1d]"
                >
                  {t.hero.consultation}

                  <span
                    className={`text-base ${
                      isArabic ? "me-2 rotate-180" : "ms-2"
                    }`}
                  >
                    
                  </span>
                </a>

                <a
                  href="#services"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-[#e5aa2f] bg-white/70 px-7 text-xs font-bold uppercase tracking-[0.04em] text-[#63351f] transition-colors hover:bg-[#e5aa2f] hover:text-white"
                >
                  {t.hero.services}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE / TABLET
          ===================================================== */}
      <div className="block lg:hidden">
        {/* Mobile Hero Image*/}
        <div className="w-full">
          <img
            src={heroMobileImage}
            alt=""
            className="block h-auto w-full"
          />
        </div>

        {/* Mobile Hero Content*/}
        <div
          className="bg-[#faf7f0] px-6 py-12 sm:px-10 sm:py-14"
          dir={isArabic ? "rtl" : "ltr"}
        >
          <div
            className={`mx-auto max-w-[700px] ${
              isArabic ? "text-right" : "text-left"
            }`}
          >

            {/* Eyebrow */}
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-[#e5aa2f] sm:text-sm">
              {t.hero.eyebrow}
            </p>

            {/* Main heading */}
            <h1 className="text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#63351f] sm:text-[42px]">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <h2 className="mt-4 text-[19px] font-bold uppercase leading-[1.15] tracking-[0.03em] text-[#e5aa2f] sm:text-[23px]">
              {t.hero.subtitle}
            </h2>

            {/* Description */}
            <p className="mt-4 text-[13px] leading-[1.6] text-[#4d4038] sm:text-[15px]">
              {t.hero.description}
            </p>

            {/* Keywords */}
            <p className="mt-3 text-xs font-semibold tracking-wide text-[#6b625d] sm:text-sm">
              {t.hero.keywords}
            </p>

            {/* Buttons */}
            <div
              className={`mt-6 flex flex-col gap-3 sm:flex-row ${
                isArabic ? "sm:flex-row-reverse" : ""
              }`}
            >
              <a
                href="#contact-form"
                className="inline-flex min-h-[46px] items-center justify-center rounded-md bg-[#e5aa2f] px-6 text-xs font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-[#c98e1d]"
              >
                {t.hero.consultation}

                <span
                  className={`text-base ${
                    isArabic ? "me-2 rotate-180" : "ms-2"
                  }`}
                >
                  ›
                </span>
              </a>

              <a
                href="#services"
                className="inline-flex min-h-[46px] items-center justify-center rounded-md border border-[#e5aa2f] bg-white px-6 text-xs font-bold uppercase tracking-[0.04em] text-[#63351f] transition-colors hover:bg-[#e5aa2f] hover:text-white"
              >
                {t.hero.services}
              </a>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}
