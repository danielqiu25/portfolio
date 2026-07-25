import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="group relative rounded-xl border border-line bg-panel p-6 transition-colors hover:border-line-strong">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-medium tracking-tight">
          <Link href={`/projects/${project.slug}`} className="before:absolute before:inset-0">
            {project.title}
          </Link>
        </h3>
        <span className="font-mono text-xs text-subtle">{project.year}</span>
      </div>

      {project.accolade ? (
        <p className="mt-2 inline-block rounded bg-accent-soft px-2 py-0.5 text-xs text-accent">
          {project.accolade}
        </p>
      ) : project.links?.live ? (
        <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-accent">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-accent"
          />
          Live demo available
        </p>
      ) : null}

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((tech) => (
          <li
            key={tech}
            className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-subtle"
          >
            {tech}
          </li>
        ))}
      </ul>

      <span className="mt-5 inline-flex items-center gap-1 text-sm text-accent">
        Read the write-up
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </span>
    </li>
  );
}
