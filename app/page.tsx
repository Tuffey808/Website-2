"use client";

import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";
import WhyGmall from "../components/WhyGmall";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Language, translations } from "../components/data/translations";

export default function Home() {
  const [language, setLanguage] = useState<Language>("ar");

  const t = translations[language];

  return (
    <main
      lang={language}
      dir={language === "ar" ? "rtl" : "ltr"}
      className={
          language === "ar"
            ? "font-arabic"
            : "font-english"
      }
    >
      <Header
        language={language}
        onLanguageChange={setLanguage}
      />

      <Hero language={language} />

      <About language={language} />

      <Services language={language} />

      <Process language={language} />

      <WhyGmall language={language} />

      <CTA language={language} />

      <Contact language={language} />

      <Footer language={language} />
    </main>
  );
}