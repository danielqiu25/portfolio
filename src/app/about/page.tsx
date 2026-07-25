import type { Metadata } from "next";
import {
  aboutClosing,
  aboutParagraphs,
  aboutPullQuote,
  education,
  quickFacts,
  skills,
} from "@/lib/about";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Background, education, and what I work with.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
      <p className="eyebrow">About</p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
        A bit more context
      </h1>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_15rem] lg:gap-12">
        <div>
          {aboutParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className="mt-5 max-w-[62ch] leading-[1.75] first:mt-0"
            >
              {paragraph}
            </p>
          ))}

          <blockquote className="my-8 border-l-2 border-accent pl-6">
            <p className="text-xl leading-snug tracking-tight sm:text-2xl">
              {aboutPullQuote}
            </p>
          </blockquote>

          <p className="max-w-[62ch] leading-[1.75]">{aboutClosing}</p>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-line bg-panel p-5">
            <p className="eyebrow">At a glance</p>
            <dl className="mt-4 space-y-4">
              {quickFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs text-subtle">{fact.label}</dt>
                  <dd className="mt-0.5 text-sm leading-snug">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>

      <section className="mt-16 border-t border-line pt-10">
        <h2 className="text-xl font-medium tracking-tight">Education</h2>

        <div className="mt-6 overflow-hidden rounded-xl border border-line">
          <div className="bg-panel p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="text-lg font-medium tracking-tight">
                {education.school}
              </p>
              <span className="font-mono text-xs text-subtle">
                {education.period}
              </span>
            </div>
            <p className="mt-1 text-muted">{education.degree}</p>
            <p className="mt-0.5 text-sm text-accent">
              {education.specialization}
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
            {education.notes.map((note) => (
              <li
                key={note}
                className="flex items-start gap-2.5 bg-panel px-6 py-4 text-sm text-muted"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16 border-t border-line pt-10">
        <h2 className="text-xl font-medium tracking-tight">What I work with</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-line bg-panel p-5"
            >
              <p className="eyebrow">{group.label}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-xl border border-line bg-panel p-6 sm:p-8">
        <h2 className="text-2xl font-medium tracking-tight">Get in touch</h2>
        <p className="mt-3 max-w-[52ch] text-muted">
          {site.availability} The fastest way to reach me is email.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href={`mailto:${site.email}`}
            className="rounded-md bg-foreground px-4 py-2 text-sm text-background transition-opacity hover:opacity-90"
          >
            {site.email}
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-4 py-2 text-sm transition-colors hover:border-line-strong"
          >
            LinkedIn
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-4 py-2 text-sm transition-colors hover:border-line-strong"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
