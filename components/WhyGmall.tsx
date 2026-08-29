"use client";

import { Language, translations } from "./data/translations";

interface WhyGmallProps {
  language: Language;
}

export default function WhyGmall({ language }: WhyGmallProps) {
  const t = translations[language];
  const isArabic = language === "ar";

  const whyGmallDesktopImage = isArabic
    ? "/images/why-gmall/whygmall-banner-ar.png"
    : "/images/why-gmall/whygmall-banner-en.png";

  const whyGmallMobileImage = isArabic
    ? "/images/why-gmall/whygmall-mobile-ar.png"
    : "/images/why-gmall/whygmall-mobile-en.png";

  return (
    <section
      id="why-gmall"
      className="relative overflow-hidden bg-[#faf7f0]"
    >
      {/* =====================================================
          DESKTOP
          ===================================================== */}
      <div className="relative hidden lg:block">
        {/* Desktop image */}
        <img
          src={whyGmallDesktopImage}
          alt=""
          className="block h-auto w-full"
        />

        {/* Desktop content overlay */}
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1440px] items-center px-10 xl:px-14">
            <div
              className={[
                "w-full max-w-[620px]",
                isArabic
                  ? "mr-auto ml-0"
                  : "ml-auto mr-0",
              ].join(" ")}
            >
              <WhyGmallContent
                content={t.whyGmall}
                isArabic={isArabic}
              />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE / TABLET
          ===================================================== */}
      <div className="block lg:hidden">
        {/* Mobile image */}
        <div className="w-full">
          <img
            src={whyGmallMobileImage}
            alt=""
            className="block h-auto w-full"
          />
        </div>

        {/* Mobile content */}
        <div
          className="bg-[#faf7f0] px-6 py-12 sm:px-10 sm:py-14"
          dir={isArabic ? "rtl" : "ltr"}
        >
          <div
            className={`mx-auto max-w-[700px] ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <WhyGmallContent
              content={t.whyGmall}
              isArabic={isArabic}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

interface WhyGmallContentProps {
  content: (typeof translations)[Language]["whyGmall"];
  isArabic: boolean;
}

function WhyGmallContent({
  content,
  isArabic,
}: WhyGmallContentProps) {
  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className={[
        "w-full",
        isArabic ? "text-right" : "text-left",
      ].join(" ")}
    >
      {/* Eyebrow */}
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[#e5aa2f] sm:text-sm">
        {content.eyebrow}
      </p>

      {/* Heading */}
      <h2 className="max-w-[650px] text-[30px] font-extrabold leading-[1.08] text-[#63351f] sm:text-[36px] lg:text-[40px]">
        {content.title}
      </h2>

      {/* Description */}
      <p className="mt-4 max-w-[640px] text-sm leading-[1.55] text-[#5d5550] sm:text-[15px]">
        {content.description}
      </p>

      {/* Benefits */}
      <div className="mt-7 space-y-5">
        <Benefit
          number="01"
          title={content.benefits.expertise.title}
          description={content.benefits.expertise.description}
          isArabic={isArabic}
        />

        <Benefit
          number="02"
          title={content.benefits.business.title}
          description={content.benefits.business.description}
          isArabic={isArabic}
        />

        <Benefit
          number="03"
          title={content.benefits.support.title}
          description={content.benefits.support.description}
          isArabic={isArabic}
        />
      </div>
    </div>
  );
}

interface BenefitProps {
  number: string;
  title: string;
  description: string;
  isArabic: boolean;
}

function Benefit({
  number,
  title,
  description,
  isArabic,
}: BenefitProps) {
  return (
    <div className="flex items-start gap-4">
      {/* Benefit number */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e5aa2f] bg-white text-sm font-bold text-[#e5aa2f] shadow-sm">
        {number}
      </div>

      <div className="pt-0.5">
        <h3 className="text-sm font-extrabold text-[#63351f] sm:text-[15px]">
          {title}
        </h3>

        <p className="mt-1 max-w-[570px] text-[10px] leading-[1.5] text-[#625a54] sm:text-xs">
          {description}
        </p>
      </div>
    </div>
  );
}