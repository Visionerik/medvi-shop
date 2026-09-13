"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function initialsOf(name: string) {
  const cleaned = name.replace(/^Dr\.\s+/i, "").split(",")[0].trim();
  const parts = cleaned.split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

const AVATAR_TONES = [
  "bg-brand-100 text-brand-800",
  "bg-mint-100 text-mint-800",
  "bg-sand-100 text-ink-800",
  "bg-brand-50 text-brand-700",
];

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.pages.about;

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
                {a.eyebrow}
              </span>
              <h1 className="mt-6 heading-display">{a.title}</h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-700">
                {a.lead}
              </p>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="container-x py-16 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-black/5 sm:p-10">
                <h2 className="font-display text-3xl text-ink-900">
                  {a.mission.heading}
                </h2>
                <p className="mt-4 text-ink-700 leading-relaxed">
                  {a.mission.body}
                </p>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-mint-100 via-sand-100 to-white p-8 ring-1 ring-black/5 sm:p-10">
                <h2 className="font-display text-3xl text-ink-900">
                  {a.story.heading}
                </h2>
                <p className="mt-4 text-ink-700 leading-relaxed">
                  {a.story.body}
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="container-x py-16 sm:py-20">
            <div className="max-w-2xl">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                {t.whyPepvi.eyebrow}
              </span>
              <h2 className="mt-4 font-display text-3xl text-ink-900 sm:text-4xl">
                {t.whyPepvi.title}
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {a.values.map((v, i) => (
                <div
                  key={v.title}
                  className="card p-6"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-700 text-white font-display text-lg">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 font-display text-lg text-ink-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="container-x py-16 sm:py-20">
            <div className="max-w-2xl">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                {a.team.eyebrow}
              </span>
              <h2 className="mt-4 font-display text-3xl text-ink-900 sm:text-4xl">
                {a.team.title}
              </h2>
              <p className="mt-4 text-ink-700 leading-relaxed">
                {a.team.description}
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {a.team.members.map((m, i) => (
                <div key={m.name} className="card p-6 text-center">
                  <div
                    className={`mx-auto grid h-20 w-20 place-items-center rounded-full font-display text-2xl ring-4 ring-white shadow-soft ${
                      AVATAR_TONES[i % AVATAR_TONES.length]
                    }`}
                    aria-hidden
                  >
                    {initialsOf(m.name)}
                  </div>
                  <h3 className="mt-5 font-display text-lg text-ink-900">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-brand-700">
                    {m.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">
                    {m.bio}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="container-x pb-20">
            <div className="overflow-hidden rounded-4xl bg-gradient-to-br from-brand-700 to-brand-800 p-10 text-white sm:p-14">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest">
                  {t.cta.eyebrow}
                </span>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                  {t.cta.title}
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  {t.cta.description}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="/#get-started"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 shadow-soft transition hover:shadow-glow"
                  >
                    {t.cta.quiz}
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {t.cta.talk}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
