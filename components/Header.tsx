"use client";

import { useState } from "react";
import { Language, translations } from "./data/translations";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
    language: Language;
    onLanguageChange: (language: Language) => void;
}

export default function Header({
    language,
    onLanguageChange,
}: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const t = translations[language];

    const navItems = [
        { label: t.nav.home, href: "#home"},
        { label: t.nav.about, href: "#about"},
        { label: t.nav.services, href: "#services"},
        { label: t.nav.process, href: "#process"},
        { label: t.nav.whyUs, href: "#why-gmall"},
        { label: t.nav.contact, href: "#contact"},
    ];

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white95 backdrop-blur-md">
            <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-6 lg:px-10 xl:px-14">

                {/* Logo */}
                <a
                  href="#home"
                  className="flex h-12 w-40 items-center justify-center"
                  aria-label="GMALL Digital"
                >
                    <img src="/images/logo/gmall-logo.png" alt="GMALL Digital" className="h-auto w-[140px] object-contain" />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-7 lg:flex">
                    {navItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="relative text-[12px] font-semibold tracking-[0.08em] text-[#63351f] transition-colors duration-200 hover:text-[#e5aa2f]"
                        >
                            {item.label}
                        </a>
                        ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-4 lg:flex">
                    <LanguageSwitcher
                      language={language}
                      onChange={onLanguageChange}
                    />

                    <a
                      href="#contact"
                      className="rounded-full bg-[#e5aa2f] px-6 py-3 text-[11px] font-bold tracking-[0.08em] text-white transition-all duration-200 hover:bg-[#c98e1d]"
                    >
                        {t.nav.consultation}
                    </a>
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center gap-3 lg:hidden">
                    <LanguageSwitcher
                      language={language}
                      onChange={onLanguageChange}
                    />

                    <button
                      type="button"
                      aria-label={
                        mobileMenuOpen ? "Close navigation" : "Open navigation"
                      }
                      aria-expanded={mobileMenuOpen}
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[#e5aa2f]"
                    >
                        <span
                          className={`h-[1.5px] w-5 bg-[#63351f] transition-transform duration-200 ${
                            mobileMenuOpen ? "translate-y-[4px] rotate-45" : ""
                          }`}
                        />
                        <span
                          className={`h-[1.5px] w-5 bg-[#63351f] transition-opacity duration-200 ${
                            mobileMenuOpen ? "opacity-0" : ""
                          }`}
                        />
                        <span
                          className={`h-[1.5px] w-5 bg-[#63351f] transition-transform duration-200 ${
                            mobileMenuOpen ? "-translate-y-[4px] -rotate-45" : ""
                          }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`overflow-hidden border-t border-[#eadfd5] bg-white transition-all duration-300 lg:hidden ${
                mobileMenuOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
                }`}
            >
                <nav className="flex flex-col px-6 py-5">
                    {navItems.map((item ) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="border-b border-[#eee6df] py-4 text-sm font-semibold tracking-wide text-[#63351f]"
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                      href="#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="mt-5 rounded-full bg-[#e5aa2f] px-6 py-3 text-center text-sm font-bold text-white"
                    >
                        {t.nav.consultation}
                    </a>
                </nav>
            </div>
        </header>
    );
}