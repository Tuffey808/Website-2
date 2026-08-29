"use client";

import { FormEvent, useState } from "react";
import { Language, translations } from "./data/translations";
import { services } from "./data/services";

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language];
  const currentServices = services[language];

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitting(true);
    setSubmitted(false);
    setError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Add language information
    formData.append(
      "language",
      language === "ar" ? "Arabic" : "English"
    );

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@gmall.sa",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="border-t border-[#e5aa2f] bg-white"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16 lg:px-10 lg:py-14 xl:px-14">

        {/* Contact information */}
        <div className="lg:pt-2">
          <h2 className="text-[25px] font-extrabold leading-tight text-[#63351f] sm:text-[28px]">
            {t.contact.title}
          </h2>

          <div className="mt-8 space-y-5">

            <ContactDetail
              icon="/images/contact/call-center-helpline.png"
              label={t.contact.phoneLabel}
              value={t.contact.phone}
              dir="ltr"
            />

            <ContactDetail
              icon="/images/contact/inquiries-support.png"
              label={t.contact.emailLabel}
              value={t.contact.email}
              dir="ltr"
            />

            <ContactDetail
              icon="/images/contact/corporate-headquarters.png"
              label={t.contact.addressLabel}
              value={t.contact.address}
              dir="ltr"
            />

            <ContactDetail
              icon="/images/contact/commercial-registration.png"
              label={t.contact.registrationLabel}
              value={t.contact.registration}
              dir="ltr"
            />

          </div>
        </div>

        {/* Form */}
        <div className="rounded-[14px] border border-[#e5aa2f] bg-white p-5 shadow-[0_4px_18px_rgba(99,53,31,0.10)] sm:p-6">

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >

            {/* Name */}
            <FormField
              label={t.contact.form.name}
              name="name"
              type="text"
              placeholder={t.contact.form.namePlaceholder}
              required
            />

            {/* Company */}
            <FormField
              label={t.contact.form.company}
              name="company"
              type="text"
              placeholder={t.contact.form.companyPlaceholder}
            />

            {/* Email */}
            <FormField
              label={t.contact.form.email}
              name="email"
              type="email"
              placeholder={t.contact.form.emailPlaceholder}
              required
            />

            {/* Enquiry type */}
            <div>
              <label
                htmlFor="enquiry-type"
                className="mb-1.5 block text-[9px] font-bold uppercase tracking-wide text-[#63351f]"
              >
                {t.contact.form.enquiryType}
              </label>

              <select
                id="enquiry-type"
                name="enquiryType"
                required
                defaultValue=""
                className="h-[40px] w-full rounded-md border border-[#d8d0ca] bg-white px-3 text-[10px] text-[#63351f] outline-none transition-colors focus:border-[#e5aa2f]"
              >
                <option value="" disabled>
                  {t.contact.form.enquiryPlaceholder}
                </option>

                {currentServices.map((service) => (
                  <option
                    key={service.number}
                    value={service.title}
                  >
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-1.5 block text-[9px] font-bold uppercase tracking-wide text-[#63351f]"
              >
                {t.contact.form.message}
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={3}
                placeholder={t.contact.form.messagePlaceholder}
                className="w-full resize-none rounded-md border border-[#d8d0ca] bg-white px-3 py-2 text-[10px] text-[#63351f] outline-none transition-colors placeholder:text-[#b8b0aa] focus:border-[#e5aa2f]"
              />
            </div>

            {/* FormSubmit configuration */}
            <input
              type="hidden"
              name="_subject"
              value="New Enquiry — GMALL"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            {/*<input
              type="hidden"
              name="_captcha"
              value="true"
            />*/}

            {/* Honeypot */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className="h-[38px] w-full rounded-md bg-[#e5aa2f] px-5 text-[10px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#c98e1d] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting
                  ? language === "ar"
                    ? "جاري الإرسال..."
                    : "SENDING..."
                  : t.contact.form.submit}
              </button>
            </div>

            {/* Success */}
            {submitted && (
              <p className="sm:col-span-2 text-center text-xs font-semibold text-[#63351f]">
                {language === "ar"
                  ? "شكراً لك. تم استلام استفسارك."
                  : "Thank you. Your enquiry has been received."}
              </p>
            )}

            {/* Error */}
            {error && (
              <p className="sm:col-span-2 text-center text-xs font-semibold text-red-600">
                {language === "ar"
                  ? "حدث خطأ. يرجى المحاولة مرة أخرى."
                  : "Something went wrong. Please try again."}
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}

interface ContactDetailProps {
  icon: string;
  label: string;
  value: string;
  dir?: "ltr" | "rtl";
};

function ContactDetail({
  icon,
  label,
  value,
  dir,
}: ContactDetailProps) {
  return (
    <div className="flex items-start gap-4">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center">
        <img
          src={icon}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>

      <div>
        <p className="text-[8px] font-semibold uppercase tracking-wide text-[#8b817a]">
          {label}
        </p>

        <p
          dir={dir}
          className="mt-0.5 text-[13px] font-bold leading-tight text-[#63351f]"
          style={dir == "ltr" ? {unicodeBidi: "isolate"} : undefined}
        >
          {value}
        </p>
      </div>

    </div>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

function FormField({
  label,
  name,
  type,
  placeholder,
  required = false,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-[9px] font-bold uppercase tracking-wide text-[#63351f]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-[40px] w-full rounded-md border border-[#d8d0ca] bg-white px-3 text-[10px] text-[#63351f] outline-none transition-colors placeholder:text-[#b8b0aa] focus:border-[#e5aa2f]"
      />
    </div>
  );
}
