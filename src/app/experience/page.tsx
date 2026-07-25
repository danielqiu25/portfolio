import type { Metadata } from "next";
import { roles } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Data science at Home Depot Askuity, and four years coaching competitive robotics.",
};

export default function ExperiencePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
      <p className="eyebrow">Experience</p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
        Where I&apos;ve worked
      </h1>

      <div className="mt-14 space-y-20">
        {roles.map((role) => (
          <article key={role.company}>
            <div className="rounded-xl border border-line bg-panel p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 className="text-xl font-medium tracking-tight">
                  {role.title}
                </h2>
                <span className="rounded bg-accent-soft px-2 py-0.5 font-mono text-[11px] text-accent">
                  {role.period}
                </span>
              </div>

              <p className="mt-1.5 text-sm">
                <span className="text-accent">{role.company}</span>
                {role.location ? (
                  <span className="text-subtle"> · {role.location}</span>
                ) : null}
              </p>

              <p className="mt-4 max-w-[62ch] leading-[1.75]">{role.lede}</p>

              {role.stack ? (
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {role.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-subtle"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            {role.steps ? (
              <ol className="mt-8">
                {role.steps.map((step, i) => (
                  <li
                    key={step.label}
                    className="relative grid grid-cols-[2.25rem_1fr] gap-x-4 pb-8 last:pb-0 sm:grid-cols-[3rem_1fr] sm:gap-x-6"
                  >
                    {i < role.steps!.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute left-[1.125rem] top-9 h-[calc(100%-1.75rem)] w-px bg-line sm:left-6"
                      />
                    ) : null}

                    <span className="relative z-10 flex size-9 items-center justify-center rounded-full border border-line bg-background font-mono text-xs text-accent sm:size-12 sm:text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="pt-1.5 sm:pt-3">
                      <h3 className="font-medium tracking-tight">
                        {step.label}
                      </h3>
                      <p className="mt-2 max-w-[62ch] leading-[1.75] text-muted">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            ) : null}

            {role.stats ? (
              <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
                {role.stats.map((stat) => (
                  <div key={stat.label} className="bg-panel px-5 py-5">
                    <p className="text-2xl font-medium tracking-tight text-accent">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            {role.body ? (
              <div className="mt-8">
                {role.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="mt-4 max-w-[62ch] leading-[1.75] text-muted first:mt-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}

            {role.closing ? (
              <section className="mt-8">
                <h3 className="eyebrow">{role.closing.heading}</h3>
                {role.closing.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="mt-3 max-w-[62ch] leading-[1.75] text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ) : null}

            {role.pullQuote ? (
              <blockquote className="mt-8 border-l-2 border-accent bg-accent-soft/40 py-4 pl-6 pr-4">
                <p className="text-lg leading-relaxed tracking-tight sm:text-xl">
                  {role.pullQuote}
                </p>
              </blockquote>
            ) : null}
          </article>
        ))}
      </div>
    </main>
  );
}
