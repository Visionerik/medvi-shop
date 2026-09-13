"use client";

import { useState, type FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.pages.contact;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputCls =
    "w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/50 shadow-sm transition focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30";

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
                {c.eyebrow}
              </span>
              <h1 className="mt-6 heading-display">{c.title}</h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-700">
                {c.description}
              </p>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="container-x py-16 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5 sm:p-10">
                  {submitted ? (
                    <div className="py-12 text-center">
                      <div
                        aria-hidden
                        className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-100 text-brand-700"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-7 w-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="mt-6 font-display text-xl text-ink-900">
                        {c.form.success}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-1.5 block text-sm font-medium text-ink-800">
                            {c.form.name}
                          </span>
                          <input
                            type="text"
                            required
                            placeholder={c.form.namePlaceholder}
                            autoComplete="name"
                            className={inputCls}
                          />
                        </label>
                        <label className="block">
                          <span className="mb-1.5 block text-sm font-medium text-ink-800">
                            {c.form.email}
                          </span>
                          <input
                            type="email"
                            required
                            placeholder={c.form.emailPlaceholder}
                            autoComplete="email"
                            className={inputCls}
                          />
                        </label>
                      </div>
                      <label className="block">
                        <span className="mb-1.5 block text-sm font-medium text-ink-800">
                          {c.form.subject}
                        </span>
                        <input
                          type="text"
                          required
                          placeholder={c.form.subjectPlaceholder}
                          className={inputCls}
                        />
                      </label>
                      <label className="block">
                        <span className="mb-1.5 block text-sm font-medium text-ink-800">
                          {c.form.message}
                        </span>
                        <textarea
                          required
                          rows={6}
                          placeholder={c.form.messagePlaceholder}
                          className={`${inputCls} resize-y`}
                        />
                      </label>
                      <p className="text-xs leading-relaxed text-ink-700/80">
                        {c.form.privacyNote}
                      </p>
                      <button type="submit" className="btn-primary">
                        {c.form.submit}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              <aside className="space-y-6">
                <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5 sm:p-8">
                  <h2 className="font-display text-lg text-ink-900">
                    {c.hours.title}
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {c.hours.rows.map((row) => (
                      <li
                        key={row.label}
                        className="flex items-center justify-between gap-4 text-sm"
                      >
                        <span className="text-ink-700">{row.label}</span>
                        <span className="font-medium text-ink-900">
                          {row.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-mint-100 via-sand-100 to-white p-6 ring-1 ring-black/5 sm:p-8">
                  <ul className="space-y-4">
                    {c.channels.map((ch) => (
                      <li key={ch.label}>
                        <p className="text-xs uppercase tracking-widest text-ink-700/70">
                          {ch.label}
                        </p>
                        {ch.href ? (
                          <a
                            href={ch.href}
                            className="mt-1 block font-display text-lg text-brand-800 hover:text-brand-700"
                          >
                            {ch.value}
                          </a>
                        ) : (
                          <p className="mt-1 font-display text-lg text-ink-900">
                            {ch.value}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
