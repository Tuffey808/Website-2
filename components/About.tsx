import { Language, translations } from "./data/translations";

interface AboutProps {
    language: Language;
}

export default function About({ language }: AboutProps) {
    const t = translations[language];

    return (
        <section
            id="about"
            className="border-b border-[#e5aa2f] bg-white"
        >
            <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-10 lg:py-16 xl:px-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_2.1fr]">

                    {/* Introduction */}
                    <div className="border-b border-[#e5aa2f] pb-10 lg:border-b-0 lg:border-e lg:pe-10 lg:pb-0">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[#e5aa2f] sm:text-sm">
                            {t.about.eyebrow}
                        </p>

                        <h2 className="max-w-[280px] text-[30px] font-extrabold leading-[1.08] text-[#63351f] sm:text-[34px]">
                            {t.about.title}
                        </h2>

                        <p className="mt-5 max-w-[390px] text-sm leading-[1.65] text-[#554a44]">
                            {t.about.description}
                        </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-3">

                        {/* Feature 1 — Brand */}
                        <Feature
                            icon="/images/about/build-brand.png"
                            title={t.about.features.brand.title}
                            description={t.about.features.brand.description}
                        />

                        {/* Feature 2 — Audience */}
                        <Feature
                            icon="/images/about/find-audience.png"
                            title={t.about.features.audience.title}
                            description={t.about.features.audience.description}
                            bordered
                        />

                        {/* Feature 3 — Opportunities */}
                        <Feature
                            icon="/images/about/opportunities.png"
                            title={t.about.features.opportunities.title}
                            description={t.about.features.opportunities.description}
                            bordered
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}

interface FeatureProps {
    icon: string;
    title: string;
    description: string;
    bordered?: boolean;
}

function Feature({
    icon,
    title,
    description,
    bordered = false,
}: FeatureProps) {
    return (
        <div
            className={`flex flex-col items-center px-6 py-8 text-center sm:py-2 ${
                bordered
                    ? "border-t border-[#eadfd5] sm:border-t-0 sm:border-s"
                    : ""
            }`}
        >
            {/* Feature icon */}
            <div className="mb-5 flex h-[58px] w-[58px] items-center justify-center">
                <img
                    src={icon}
                    alt=""
                    className="h-full w-full object-contain"
                />
            </div>

            <h3 className="text-base font-extrabold leading-tight text-[#63351f] sm:text-[17px]">
                {title}
            </h3>

            <p className="mt-3 max-w-[220px] text-xs leading-[1.55] text-[#5d5550]">
                {description}
            </p>
        </div>
    );
}