"use client";

import { Language, translations } from "./data/translations";

import { FaFacebookF, FaInstagram, FaThreads, FaXTwitter } from "react-icons/fa6";


interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/gmalldigital/",
      icon: FaInstagram,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/gmalldigital/",
      icon: FaFacebookF,
    },
    {
      name: "X",
      href: "https://x.com/gmalldigital",
      icon: FaXTwitter,
    },
    {
      name: "Threads",
      href: "https://www.threads.com/@gmalldigital?hl=en",
      icon: FaThreads,
    },
  ]

  return (
    <footer className="border-t border-[#e5aa2f] bg-[#faf7f0] text-[#63351f]">

      <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10 lg:py-12 xl:px-14">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.15fr] lg:gap-8">

          {/* Brand */}
          <div>
            {/* Logo placeholder */}
            <div className="mb-4 flex h-[38px] w-[145px] items-center justify-center text-xs font-bold tracking-wider text-[#63351f]/40">
              <img src="/images/logo/gmall-logo.png" />
            </div>

            <h2 className="text-[15px] font-extrabold uppercase">
              {t.footer.tagline}
            </h2>

            <p className="mt-2 max-w-[260px] text-[10px] leading-[1.5] text-[#746a63]">
              {t.footer.description}
            </p>
          </div>

          {/* Company */}
          <FooterColumn title={t.footer.company.title}>
            <FooterLink href="#about">
              {t.footer.company.about}
            </FooterLink>

            <FooterLink href="#services">
              {t.footer.company.whatWeDo}
            </FooterLink>

            <FooterLink href="#contact-form">
              {t.footer.company.contact}
            </FooterLink>
          </FooterColumn>

          {/* Services */}
          <FooterColumn title={t.footer.services.title}>
            <FooterLink href="#services">
              {t.footer.services.socialMedia}
            </FooterLink>

            <FooterLink href="#services">
              {t.footer.services.designBranding}
            </FooterLink>

            <FooterLink href="#services">
              {t.footer.services.website}
            </FooterLink>

            <FooterLink href="#services">
              {t.footer.services.photographyVideo}
            </FooterLink>

            <FooterLink href="#services">
              {t.footer.services.printing}
            </FooterLink>
          </FooterColumn>

          {/* Ecosystem */}
          <FooterColumn title={t.footer.ecosystem.title}>
            <FooterLink href="#">
              {t.footer.ecosystem.gmallDigital}
            </FooterLink>

            <FooterLink href="https://store.gmall.sa">
              {t.footer.ecosystem.gmallApp}
            </FooterLink>

            <FooterLink href="https://shop.gmall.sa">
              {t.footer.ecosystem.gmallShopping}
            </FooterLink>
          </FooterColumn>

          {/* Direct office */}
          <FooterColumn
            title={t.footer.directOffice.title}
            className={language === "ar" ? "text-right" : "text-left"}
          >
            <a
              href={`tel:${t.footer.directOffice.phone.replace(/\s/g, "")}`}
              className="block text-[10px] leading-[1.5] text-[#746a63] transition-colors hover:text-[#e5aa2f]"
              dir="ltr"
            >
              {t.footer.directOffice.phone}
            </a>

            <a
              href={`mailto:${t.footer.directOffice.email}`}
              className="mt-1 block text-[10px] leading-[1.5] text-[#746a63] transition-colors hover:text-[#e5aa2f]"
              dir="ltr"
            >
              {t.footer.directOffice.email}
            </a>

            <p className="mt-1 max-w-[180px] text-[10px] leading-[1.5] text-[#746a63]">
              {t.footer.directOffice.address}
            </p>
          </FooterColumn>

        </div>

        {/* Bottom row */}
        <div className="mt-9 border-t border-[#e5aa2f]/30 pt-5">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            {/* Social icons */}
            <div className="flex items-center gap-2">

              {/* Temporary social placeholders */}
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5aa2f] text-[13px] text-[#63351f] transition-colors duration-200 hover:bg-[#e5aa2f] hover:text-white"
                  >
                    <Icon />
                  </a>
                )
              })}

            </div>

            {/* Copyright */}
            <p className="text-center text-[9px] text-[#746a63] lg:text-start">
              {t.footer.copyright}
            </p>

            {/* Legal */}
            <div className="flex justify-center gap-5 text-[9px] text-[#746a63]">
              <a
                href="#"
                className="transition-colors hover:text-[#e5aa2f]"
              >
                {t.footer.privacy}
              </a>

              <a
                href="#"
                className="transition-colors hover:text-[#e5aa2f]"
              >
                {t.footer.terms}
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function FooterColumn({
  title,
  children,
  className = "",
}: FooterColumnProps) {
  return (
    <div className={className}>
      <h3 className="mb-3 text-[10px] font-extrabold uppercase tracking-wide text-[#63351f]">
        {title}
      </h3>

      <div className="space-y-1.5">
        {children}
      </div>
    </div>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({
  href,
  children,
}: FooterLinkProps) {
  return (
    <a
      href={href}
      className="block text-[10px] leading-[1.4] text-[#746a63] transition-colors hover:text-[#e5aa2f]"
    >
      {children}
    </a>
  );
}