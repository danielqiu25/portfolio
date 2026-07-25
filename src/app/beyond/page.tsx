import type { Metadata } from "next";
import { beyondAlso, beyondSections } from "@/lib/beyond";

export const metadata: Metadata = {
  title: "Beyond",
  description:
    "Leadership, competition, and the things I did outside of software.",
};

export default function BeyondPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20">
      <h1 className="text-3xl font-medium tracking-tight">Beyond code</h1>

      <div className="mt-12 space-y-12">
        {beyondSections.map((section) => (
          <section
            key={section.heading}
            className="border-t border-line pt-8 first:border-t-0 first:pt-0"
          >
            <h2 className="text-xl font-medium tracking-tight">
              {section.heading}
            </h2>
            {section.meta ? (
              <p className="mt-1 font-mono text-xs text-subtle">
                {section.meta}
              </p>
            ) : null}
            {section.body.map((paragraph, i) => (
              <p key={i} className="mt-4 leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        <section className="border-t border-line pt-8">
          <h2 className="text-xl font-medium tracking-tight">Also</h2>
          <ul className="mt-5 space-y-3">
            {beyondAlso.map((item) => (
              <li
                key={item}
                className="border-l border-line pl-4 leading-relaxed text-muted"
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
