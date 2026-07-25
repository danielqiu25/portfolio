import type { Metadata } from "next";
import { roles } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Data science at Home Depot Askuity, and four years coaching competitive robotics.",
};

export default function ExperiencePage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20">
      <h1 className="text-3xl font-medium tracking-tight">Experience</h1>

      <div className="mt-12 space-y-16">
        {roles.map((role) => (
          <article
            key={role.company}
            className="border-t border-line pt-8 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="text-xl font-medium tracking-tight">
                {role.title}
              </h2>
              <span className="font-mono text-xs text-subtle">
                {role.period}
              </span>
            </div>

            <p className="mt-1 text-sm text-accent">
              {role.company}
              {role.location ? (
                <span className="text-subtle"> · {role.location}</span>
              ) : null}
            </p>

            <p className="mt-5 leading-relaxed">{role.lede}</p>

            {role.blocks.map((block, i) => (
              <section key={i} className="mt-6">
                {block.heading ? (
                  <h3 className="font-mono text-xs uppercase tracking-wider text-subtle">
                    {block.heading}
                  </h3>
                ) : null}
                {block.body.map((paragraph, j) => (
                  <p
                    key={j}
                    className={`leading-relaxed text-muted ${
                      block.heading && j === 0 ? "mt-3" : "mt-4"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </article>
        ))}
      </div>
    </main>
  );
}
