import { Language, translations } from "./data/translations";

interface CTAProps {
  language: Language;
}

export default function CTA({ language }: CTAProps) {
  const t = translations[language];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#e5aa2f]"
    >
      {/* Decorative background placeholder */}
      <div className="cta-background absolute inset-0 opacity-20" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-7 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-14">

        {/* Text */}
        <div className="max-w-[650px]">
          <p className="text-[19px] font-extrabold uppercase leading-none tracking-[0.03em] text-white sm:text-[21px]">
            {t.cta.title}
          </p>

          <h2 className="mt-1 text-[17px] font-bold leading-tight text-[#63351f] sm:text-[19px]">
            {t.cta.subtitle}
          </h2>

          <p className="mt-1 max-w-[600px] text-[10px] leading-[1.45] text-white/90 sm:text-xs">
            {t.cta.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <a
            href="#contact-form"
            className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-[#63351f] px-6 text-[10px] font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-[#4c2718]"
          >
            {t.cta.consultation}
            <span className="ms-2 text-sm">›</span>
          </a>

          <a
            href="#contact-form"
            className="inline-flex min-h-[40px] items-center justify-center rounded-full border border-white bg-white/10 px-6 text-[10px] font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-white hover:text-[#63351f]"
          >
            {t.cta.enquiry}
          </a>
        </div>
      </div>
    </section>
  );
}