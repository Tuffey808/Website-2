"use client";

import { Language } from "./data/translations";

interface LanguageSwitcherProps {
    language: Language;
    onChange: (language: Language) => void;
}

export default function LanguageSwitcher({
    language,
    onChange,
}: LanguageSwitcherProps) {
    return (
        <div className="flex items-center gap-1 rounded-md border border-[#e5aa2f] px-2 py-1">
            <button
              type="button"
              onClick={() => onChange("en")}
              className={`text-xs font-semibold ${
                language === "en"
                  ? "text-[#63351f]"
                  : "text-gray-400"
              }`}
              >
                EN
            </button>

            <span className="text-gray-300">|</span>

            <button
              type="button"
              onClick={() => onChange("ar")}
              className={`text-xs font-semibold ${
                language === "ar"
                    ? "text-[#63351f]"
                    : "text-gray-400"
                }`}
            >
                AR
            </button>
        </div>
    );
}