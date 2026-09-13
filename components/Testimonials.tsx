"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

type Review = {
  name: string;
  program: string;
  stars: number;
  quote: string;
};

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.7 1.1 6.6L12 17.7 6.2 20.8l1.1-6.6L2.5 9.5l6.6-.9L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ r }: { r: Review }) {
  return (
    <figure className="w-[320px] shrink-0 rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5 sm:w-[380px]">
      <Stars n={r.stars} />
      <blockquote className="mt-3 text-ink-800 leading-relaxed">
        “{r.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-100 font-display text-brand-800">
          {r.name[0]}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-900">{r.name}</p>
          <p className="text-xs text-ink-700/70">{r.program}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const { eyebrow, title, description, reviews } = t.testimonials;

  return (
    <section id="reviews" className="relative overflow-hidden py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl leading-tight text-ink-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-ink-700">{description}</p>
        </div>
      </div>

      <div className="marquee-track relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-sand-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-sand-50 to-transparent" />
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee gap-6 pr-6">
            {[...reviews, ...reviews].map((r, i) => (
              <Card key={i} r={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
