"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();
  const c = t.cta;

  return (
    <section id="get-started" className="relative py-16 sm:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-800 px-8 py-14 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_0%,rgba(139,199,177,0.35),transparent),radial-gradient(500px_260px_at_80%_100%,rgba(243,236,223,0.2),transparent)]"
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/90">
              {c.eyebrow}
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
              {c.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              {c.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#quiz"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 shadow-soft transition hover:bg-sand-50"
              >
                {c.quiz}
              </a>
              <a
                href="#learn"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {c.talk}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
