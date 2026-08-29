"use client";

import { useEffect, useState } from "react";
import { Language, translations } from "./data/translations";
import { services } from "./data/services";

interface ServicesProps {
  language: Language;
}

interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
}

export default function Services({ language }: ServicesProps) {
  const t = translations[language];
  const currentServices = services[language];
  const isArabic = language === "ar";

  const [visibleCards, setVisibleCards] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  /*
   * ---------------------------------------------------------
   * RESPONSIVE CARD COUNT
   * ---------------------------------------------------------
   *
   * Mobile  : 1 card
   * Tablet  : 2 cards
   * Desktop : 4 cards
   */

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * CAROUSEL LIMIT
   * ---------------------------------------------------------
   *
   * With 6 services:
   *
   * Mobile  -> positions 0 to 5
   * Tablet  -> positions 0 to 4
   * Desktop -> positions 0 to 2
   */

  const maxIndex = Math.max(
    0,
    currentServices.length - visibleCards
  );

  /*
   * Make sure the current position is still valid when
   * changing screen size or language.
   */

  useEffect(() => {
    setCurrentIndex((index) => {
      return Math.min(index, maxIndex);
    });
  }, [maxIndex, language]);

  /*
   * ---------------------------------------------------------
   * NAVIGATION
   * ---------------------------------------------------------
   */

  const next = () => {
    setCurrentIndex((index) => {
      return Math.min(index + 1, maxIndex);
    });
  };

  const previous = () => {
    setCurrentIndex((index) => {
      return Math.max(index - 1, 0);
    });
  };

  /*
   * ---------------------------------------------------------
   * TOUCH / SWIPE
   * ---------------------------------------------------------
   */

  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    if (touchStart === null) {
      return;
    }

    const touchEnd = event.changedTouches[0].clientX;
    const distance = touchEnd - touchStart;

    setTouchStart(null);

    if (Math.abs(distance) < 50) {
      return;
    }

    if (distance < 0) {
      // Swipe left
      if (isArabic) {
        previous();
      } else {
        next();
      }
    } else {
      // Swipe right
      if (isArabic) {
        next();
      } else {
        previous();
      }
    }
  };

  /*
   * ---------------------------------------------------------
   * CARD SIZING
   * ---------------------------------------------------------
   *
   * These values match the gaps used by the carousel:
   *
   * Mobile  : 16px gap
   * Tablet  : 20px gap
   * Desktop : 24px gap
   */

  const getCardWidth = () => {
    if (visibleCards === 1) {
      return "100%";
    }

    if (visibleCards === 2) {
      return "calc((100% - 20px) / 2)";
    }

    return "calc((100% - 72px) / 4)";
  };

  /*
   * ---------------------------------------------------------
   * CARD MOVEMENT
   * ---------------------------------------------------------
   *
   * Instead of moving by an arbitrary percentage such as
   * 25% or 50%, we move by the exact card width plus gap.
   *
   * This prevents the accumulated drift that was causing
   * the later cards to become misaligned.
   */

  const getGap = () => {
    if (visibleCards === 1) {
      return 16;
    }

    if (visibleCards === 2) {
      return 20;
    }

    return 24;
  };

  const getTranslateX = () => {
    const gap = getGap();

    if (visibleCards === 1) {
      return `calc(
        ${isArabic ? currentIndex : -currentIndex}
        * (100% + ${gap}px)
      )`;
    }

    if (visibleCards === 2) {
      return `calc(
        ${isArabic ? currentIndex : -currentIndex}
        * ((100% - 20px) / 2 + ${gap}px)
      )`;
    }

    return `calc(
      ${isArabic ? currentIndex : -currentIndex}
      * ((100% - 72px) / 4 + ${gap}px)
    )`;
  };

  const transform = `translateX(${getTranslateX()})`;

  /*
   * ---------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------
   */

  return (
    <section
      id="services"
      className="border-t border-[#e5aa2f] bg-white"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16 xl:px-14">

        {/* ===================================================
            HEADING
        =================================================== */}

        <div className="mx-auto max-w-[900px] text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[#e5aa2f]">
            {t.services.eyebrow}
          </p>

          <h2 className="text-[28px] font-extrabold uppercase leading-tight text-[#63351f] sm:text-[32px] lg:text-[34px]">
            {t.services.title}
          </h2>

          <p className="mx-auto mt-3 max-w-[700px] text-sm leading-[1.55] text-[#5d5550]">
            {t.services.description}
          </p>
        </div>

        {/* ===================================================
            CAROUSEL
        =================================================== */}

        <div className="relative mt-8 sm:mt-9">

          {/* Previous button */}

          <button
            type="button"
            onClick={previous}
            disabled={currentIndex === 0}
            aria-label="Previous services"
            className="
              absolute
              start-1
              top-1/2
              z-30
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#e5aa2f]
              bg-white
              text-xl
              text-[#63351f]
              shadow-lg
              transition-all
              hover:bg-[#e5aa2f]
              hover:text-white
              disabled:cursor-not-allowed
              disabled:border-gray-200
              disabled:text-gray-300
              disabled:opacity-40
              sm:start-2
              sm:h-11
              sm:w-11
              lg:start-[-20px]
              lg:h-10
              lg:w-10
            "
          >
            ‹
          </button>

          {/* Viewport */}

          <div
            className="
              overflow-hidden
              px-12
              sm:px-14
              lg:px-0
            "
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="
                flex
                transition-transform
                duration-500
                ease-out
              "
              style={{
                gap: `${getGap()}px`,
                transform,
              }}
            >
              {currentServices.map((service) => (
                <ServiceCard
                  key={service.number}
                  service={service}
                  width={getCardWidth()}
                />
              ))}
            </div>
          </div>

          {/* Next button */}

          <button
            type="button"
            onClick={next}
            disabled={currentIndex === maxIndex}
            aria-label="Next services"
            className="
              absolute
              end-1
              top-1/2
              z-30
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#e5aa2f]
              bg-white
              text-xl
              text-[#63351f]
              shadow-lg
              transition-all
              hover:bg-[#e5aa2f]
              hover:text-white
              disabled:cursor-not-allowed
              disabled:border-gray-200
              disabled:text-gray-300
              disabled:opacity-40
              sm:end-2
              sm:h-11
              sm:w-11
              lg:end-[-20px]
              lg:h-10
              lg:w-10
            "
          >
            ›
          </button>
        </div>

        {/* ===================================================
            POSITION INDICATORS
        =================================================== */}

        {maxIndex > 0 && (
          <div
            className="mt-6 flex justify-center gap-1.5"
            dir="ltr"
          >
            {Array.from({
              length: maxIndex + 1,
            }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to services position ${index + 1}`}
                aria-current={
                  currentIndex === index
                    ? "true"
                    : undefined
                }
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  ${
                    currentIndex === index
                      ? "w-7 bg-[#e5aa2f]"
                      : "w-1.5 bg-[#dfd5cc]"
                  }
                `}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

interface ServiceCardProps {
  service: Service;
  width: string;
}

function ServiceCard({
  service,
  width,
}: ServiceCardProps) {
  return (
    <article
      className="shrink-0"
      style={{
        width,
      }}
    >
      <div
        className="
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[14px]
          border-[3px]
          border-[#f0dfc0]
          bg-white
          shadow-sm
        "
      >

        {/* Image */}

        <div
          className="
            relative
            aspect-[1.25/1]
            shrink-0
            overflow-hidden
            bg-[#f5f1eb]
          "
        >
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              border-b
              border-dashed
              border-[#e5aa2f]/30
              text-xs
              font-semibold
              tracking-wider
              text-[#63351f]/30
            "
          >
            SERVICE IMAGE
          </div>

          <img
            src={service.image}
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* Content */}

        <div
          className="
            relative
            min-h-[165px]
            flex-1
            px-4
            pb-5
            pt-4
            sm:min-h-[150px]
          "
        >

          {/* Background number */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-[-7px]
              end-1
              text-[72px]
              font-extrabold
              leading-none
              text-[#f5ead8]
              sm:text-[82px]
            "
          >
            {service.number}
          </div>

          <div className="relative z-10">

            {/* Icon */}

            <div
              className="
                mb-2
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                border
                border-[#e5aa2f]
                text-[9px]
                font-bold
                text-[#e5aa2f]
              "
            >
              ✦
            </div>

            {/* Title */}

            <h3
              className="
                max-w-[90%]
                break-words
                text-base
                font-extrabold
                uppercase
                leading-[1.15]
                text-[#63351f]
              "
            >
              {service.title}
            </h3>

            {/* Description */}

            <p
              className="
                mt-2
                max-w-[90%]
                text-xs
                leading-[1.5]
                text-[#5d5550]
              "
            >
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}