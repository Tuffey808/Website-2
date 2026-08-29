"use client";

import { Language, translations } from "../components/data/translations";
import { processSteps } from "../components/data/process";

interface ProcessProps {
  language: Language;
}

export default function Process({ language }: ProcessProps) {
  const t = translations[language];

  return (
    <section
      id="process"
      className="bg-white"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-10 lg:py-16 xl:px-14">

        {/* Heading */}
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-[28px] font-extrabold uppercase leading-tight text-[#63351f] sm:text-[32px] lg:text-[34px]">
            {t.process.eyebrow}
          </p>

          <p className="mt-2 text-sm leading-[1.55] text-[#5d5550]">
            {t.process.description}
          </p>
        </div>

        {/* Process */}
        <div className="relative mt-10">

          {/* Connecting line */}
          <div
            className="absolute start-[10%] end-[10%] top-[86px] hidden h-[2px] bg-[#e5aa2f] md:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-3">
            {processSteps.map((step) => {
              const content = t.process.steps[step.key];

              return (
                <ProcessStep
                  key={step.number}
                  number={step.number}
                  title={content.title}
                  description={content.description}
                  icon={step.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: string;
}

function ProcessStep({
  number,
  title,
  description,
  icon,
}: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">

      {/* Icon */}
      <div className="relative z-10 flex h-[62px] w-[62px] items-center justify-center">
        <div className="flex h-full w-full items-center justify-center text-2xl text-[#63351f]">
          <img
            src={icon}
            alt=""
            className="h-full w-full object-contain"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

        </div>
      </div>

      {/* Number */}
      <div className="relative z-10 mt-2 flex h-[43px] w-[43px] items-center justify-center rounded-full border border-[#e5aa2f] bg-white text-[16px] font-bold text-[#e5aa2f]">
        {number}
      </div>

      {/* Title */}
      <h3 className="mt-3 text-[12px] font-extrabold uppercase leading-tight text-[#63351f] sm:text-[13px]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 max-w-[180px] text-[9px] leading-[1.45] text-[#625a54] sm:text-[10px]">
        {description}
      </p>
    </div>
  );
}