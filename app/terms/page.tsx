"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function TermsPage() {
  const { t } = useLanguage();
  const p = t.pages.terms;

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
                {p.eyebrow}
              </span>
              <h1 className="mt-6 heading-display">{p.title}</h1>
              <p className="mt-4 text-xs uppercase tracking-widest text-ink-700/70">
                {p.updated}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ink-700">
                {p.lead}
              </p>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="container-x py-16 sm:py-20">
            <div className="mx-auto max-w-3xl space-y-10">
              {p.sections.map((s) => (
                <article key={s.heading}>
                  <h2 className="font-display text-2xl text-ink-900">
                    {s.heading}
                  </h2>
                  <div className="mt-4 space-y-3 text-ink-700 leading-relaxed">
                    {s.body.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
