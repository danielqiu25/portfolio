import type { Metadata } from "next";
import { aboutParagraphs, education, skills } from "@/lib/about";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Background, education, and what I work with.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20">
      <h1 className="text-3xl font-medium tracking-tight">About</h1>

      <div className="mt-8">
        {aboutParagraphs.map((paragraph, i) => (
          <p key={i} className="mt-5 leading-relaxed first:mt-0">
            {paragraph}
          </p>
        ))}
      </div>

      <section className="mt-14 border-t border-line pt-8">
        <h2 className="text-xl font-medium tracking-tight">Education</h2>
        <div className="mt-5">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <p className="font-medium">{education.school}</p>
            <span className="font-mono text-xs text-subtle">
              {education.period}
            </span>
          </div>
          <p className="mt-1 text-muted">{education.degree}</p>
          <p className="text-muted">{education.specialization}</p>
          <ul className="mt-4 space-y-1.5">
            {education.notes.map((note) => (
              <li key={note} className="text-sm text-muted">
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-14 border-t border-line pt-8">
        <h2 className="text-xl font-medium tracking-tight">What I work with</h2>
        <dl className="mt-5 space-y-5">
          {skills.map((group) => (
            <div key={group.label}>
              <dt className="font-mono text-xs uppercase tracking-wider text-subtle">
                {group.label}
              </dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14 border-t border-line pt-8">
        <h2 className="text-xl font-medium tracking-tight">Get in touch</h2>
        <p className="mt-4 text-muted">
          {site.availability} The fastest way to reach me is email.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={`mailto:${site.email}`}
            className="rounded-md border border-line px-4 py-2 text-sm transition-colors hover:border-foreground"
          >
            {site.email}
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-4 py-2 text-sm transition-colors hover:border-foreground"
          >
            LinkedIn
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-4 py-2 text-sm transition-colors hover:border-foreground"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
