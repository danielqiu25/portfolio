import Link from "next/link";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-24 sm:py-32">
      <section>
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight">
          {site.name}
        </h1>

        <p className="mt-6 text-lg sm:text-xl leading-relaxed">{site.intro}</p>

        <p className="mt-5 text-base leading-relaxed text-muted">{site.pov}</p>

        <p className="mt-5 text-base text-muted">
          <span className="inline-block size-2 rounded-full bg-accent mr-2 align-middle" />
          {site.availability}
        </p>

        <nav className="mt-10 flex flex-wrap gap-2" aria-label="Primary">
          <Link
            href="/projects"
            className="rounded-md border border-line px-4 py-2 text-sm transition-colors hover:border-foreground"
          >
            Projects
          </Link>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-4 py-2 text-sm transition-colors hover:border-foreground"
          >
            GitHub
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
            href={`mailto:${site.email}`}
            className="rounded-md border border-line px-4 py-2 text-sm transition-colors hover:border-foreground"
          >
            Email
          </a>
        </nav>
      </section>
    </main>
  );
}
