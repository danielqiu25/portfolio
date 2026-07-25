import type { Metadata } from "next";
import Link from "next/link";
import { publishedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software, data, and machine learning projects.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20">
      <h1 className="text-3xl font-medium tracking-tight">Projects</h1>
      <p className="mt-3 text-muted">
        Things I&apos;ve built, and what I learned building them.
      </p>

      <ul className="mt-12 space-y-10">
        {publishedProjects.map((project) => (
          <li
            key={project.slug}
            className="border-t border-line pt-6 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="text-xl font-medium tracking-tight">
                <Link
                  href={`/projects/${project.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {project.title}
                </Link>
              </h2>
              <span className="font-mono text-xs text-subtle">
                {project.year}
              </span>
            </div>

            {project.accolade ? (
              <p className="mt-1.5 text-sm text-accent">{project.accolade}</p>
            ) : null}

            <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-line px-2 py-0.5 font-mono text-xs text-subtle"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <Link
              href={`/projects/${project.slug}`}
              className="mt-4 inline-block text-sm text-accent underline underline-offset-4"
            >
              Read the write-up
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
