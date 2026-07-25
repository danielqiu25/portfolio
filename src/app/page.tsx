import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { publishedProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6">
      <section className="py-20 sm:py-28">
        <h1 className="flex flex-wrap items-baseline gap-x-3 text-2xl font-medium tracking-tight sm:text-3xl">
          {site.name}
          <span aria-hidden="true" className="text-line-strong">
            |
          </span>
          <span className="text-muted">{site.subtitle}</span>
        </h1>

        <p className="mt-6 max-w-[24ch] text-4xl font-medium leading-[1.08] tracking-tight sm:max-w-[26ch] sm:text-5xl">
          {site.tagline}
        </p>

        <p className="mt-7 max-w-[62ch] leading-[1.75] text-muted">
          {site.pov}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <p className="inline-flex items-center gap-2 text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {site.current}
          </p>
          <p className="text-subtle">{site.availability}</p>
        </div>

        <div className="mt-9 flex flex-wrap gap-2">
          <Link
            href="/projects"
            className="rounded-md bg-foreground px-4 py-2 text-sm text-background transition-opacity hover:opacity-90"
          >
            See my work
          </Link>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-4 py-2 text-sm transition-colors hover:border-line-strong"
          >
            GitHub
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
            href={`mailto:${site.email}`}
            className="rounded-md border border-line px-4 py-2 text-sm transition-colors hover:border-line-strong"
          >
            Email
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        {site.highlights.map((item) => (
          <div key={item.label} className="bg-panel px-5 py-6">
            <p className="text-2xl font-medium tracking-tight">{item.value}</p>
            <p className="mt-1.5 text-sm leading-snug text-muted">
              {item.label}
            </p>
          </div>
        ))}
      </section>

      <section className="py-20 sm:py-24">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-medium tracking-tight">Selected work</h2>
          <Link
            href="/projects"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            All projects
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4">
          {publishedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
      </section>

      <section className="grid grid-cols-1 gap-4 pb-24 sm:grid-cols-2">
        <Link
          href="/experience"
          className="group rounded-xl border border-line bg-panel p-6 transition-colors hover:border-line-strong"
        >
          <p className="eyebrow">Experience</p>
          <p className="mt-3 leading-relaxed">
            Data science at Home Depot Askuity, and four years coaching
            competitive robotics.
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm text-accent">
            Read more
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </Link>

        <Link
          href="/beyond"
          className="group rounded-xl border border-line bg-panel p-6 transition-colors hover:border-line-strong"
        >
          <p className="eyebrow">Beyond code</p>
          <p className="mt-3 leading-relaxed">
            Six years in air cadets, finishing as the senior cadet of a
            400-person squadron.
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm text-accent">
            Read more
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </Link>
      </section>
    </main>
  );
}
