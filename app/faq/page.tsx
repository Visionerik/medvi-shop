"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FaqPage() {
  const { t } = useLanguage();
  const f = t.pages.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-hero-mesh">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-sage-fade" />
          <div className="container-x relative py-20 sm:py-24">
            <div className="max-w-3xl animate-fade-up">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                {f.eyebrow}
              </span>
              <h1 className="mt-6 heading-display">{f.title}</h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-700">
                {f.description}
              </p>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="container-x py-16 sm:py-20">
            <div className="mx-auto max-w-3xl">
              <ul className="divide-y divide-black/5 overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-black/5">
                {f.items.map((item, i) => {
                  const isOpen = open === i;
                  return (
                    <li key={item.q}>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-sand-50 sm:px-8"
                      >
                        <span className="font-display text-base text-ink-900 sm:text-lg">
                          {item.q}
                        </span>
                        <span
                          aria-hidden
                          className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-black/10 bg-white text-ink-800 transition ${
                            isOpen ? "rotate-45 bg-brand-700 text-white border-brand-700" : ""
                          }`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                          </svg>
                        </span>
                      </button>
                      <div
                        id={`faq-panel-${i}`}
                        hidden={!isOpen}
                        className="px-6 pb-6 sm:px-8"
                      >
                        <p className="text-sm leading-relaxed text-ink-700 sm:text-base">
                          {item.a}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="container-x pb-20">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-4xl bg-gradient-to-br from-brand-700 to-brand-800 p-10 text-white sm:p-12">
              <h2 className="font-display text-2xl sm:text-3xl">
                {f.supportCta.title}
              </h2>
              <p className="mt-3 text-white/80 leading-relaxed">
                {f.supportCta.description}
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 shadow-soft transition hover:shadow-glow"
              >
                {f.supportCta.button}
              </a>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
