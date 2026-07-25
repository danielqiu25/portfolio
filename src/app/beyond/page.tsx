import type { Metadata } from "next";
import Image from "next/image";
import { beyondAlso, beyondSections } from "@/lib/beyond";

export const metadata: Metadata = {
  title: "Beyond",
  description:
    "Leadership, competition, and the things I did outside of software.",
};

export default function BeyondPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
      <p className="eyebrow">Beyond code</p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
        Leading, competing, teaching
      </h1>
      <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">
        Most of what I know about running things with other people, I learned
        outside a classroom.
      </p>

      <div className="mt-14 space-y-16">
        {beyondSections.map((section) => (
          <section key={section.heading}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-3">
              <h2 className="text-2xl font-medium tracking-tight">
                {section.heading}
              </h2>
              {section.meta ? (
                <span className="font-mono text-xs text-subtle">
                  {section.meta}
                </span>
              ) : null}
            </div>

            {section.image ? (
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_190px] sm:gap-8">
                <div>
                  {section.body.map((paragraph, i) => (
                    <p
                      key={i}
                      className="mt-4 max-w-[62ch] leading-[1.75] text-muted first:mt-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <figure className="sm:pt-1">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    width={section.image.width}
                    height={section.image.height}
                    sizes="(min-width: 640px) 190px, 100vw"
                    className="w-full rounded-xl border border-line object-cover"
                  />
                  {section.image.caption ? (
                    <figcaption className="mt-2 text-xs text-subtle">
                      {section.image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              </div>
            ) : (
              <div className="mt-6">
                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="mt-4 max-w-[62ch] leading-[1.75] text-muted first:mt-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {section.stats ? (
              <div className="mt-7 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
                {section.stats.map((stat) => (
                  <div key={stat.label} className="bg-panel px-5 py-5">
                    <p className="text-xl font-medium tracking-tight text-accent">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            {section.highlights ? (
              <ul className="mt-7 space-y-2.5">
                {section.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {section.chipGroups?.map((group) => (
              <div key={group.label} className="mt-7">
                <p className="eyebrow">{group.label}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-line bg-panel px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {section.subsections ? (
              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {section.subsections.map((sub) => (
                  <div
                    key={sub.heading}
                    className="rounded-xl border border-line bg-panel p-5"
                  >
                    <h3 className="font-medium tracking-tight">
                      {sub.heading}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {sub.body}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        ))}

        <section>
          <div className="border-b border-line pb-3">
            <h2 className="text-2xl font-medium tracking-tight">Also</h2>
          </div>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {beyondAlso.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-line bg-panel p-4 text-sm leading-relaxed text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
