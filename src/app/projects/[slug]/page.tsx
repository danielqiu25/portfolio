import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TraceBlock } from "@/components/TraceBlock";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

function youTubeId(url: string) {
  return url.match(/[?&]v=([\w-]{11})/)?.[1];
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const videoId = project.links?.video
    ? youTubeId(project.links.video)
    : undefined;

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-subtle transition-colors hover:text-foreground"
      >
        <span aria-hidden="true">←</span> Projects
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-2.5 py-0.5 text-[11px] text-subtle"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-muted">
          {project.summary}
        </p>

        {project.accolade ? (
          <p className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent-soft px-3 py-1.5 text-sm text-accent">
            <span aria-hidden="true">★</span>
            {project.accolade}
          </p>
        ) : null}

        {project.links?.repo || project.links?.video || project.links?.live ? (
          <div className="mt-7 flex flex-wrap gap-2">
            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-foreground px-4 py-2 text-sm text-background transition-opacity hover:opacity-90"
              >
                Live demo
              </a>
            ) : null}
            {project.links.repo ? (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-line px-4 py-2 text-sm transition-colors hover:border-line-strong"
              >
                Repository
              </a>
            ) : null}
            {project.links.video ? (
              <a
                href={project.links.video}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-line px-4 py-2 text-sm transition-colors hover:border-line-strong"
              >
                Demo video
              </a>
            ) : null}
          </div>
        ) : null}
      </header>

      <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
        <div className="bg-panel px-5 py-4">
          <dt className="eyebrow">Year</dt>
          <dd className="mt-1.5 text-sm">{project.year}</dd>
        </div>
        <div className="bg-panel px-5 py-4">
          <dt className="eyebrow">Role</dt>
          <dd className="mt-1.5 text-sm leading-snug">
            {project.role ?? "Solo project"}
          </dd>
        </div>
        <div className="bg-panel px-5 py-4">
          <dt className="eyebrow">Built with</dt>
          <dd className="mt-1.5 font-mono text-xs leading-relaxed text-muted">
            {project.stack.join(", ")}
          </dd>
        </div>
      </dl>

      {project.team?.length ? (
        <p className="mt-4 text-sm text-muted">
          Built with{" "}
          {project.team.map((member, i) => (
            <span key={member.handle}>
              {i > 0 ? (i === project.team!.length - 1 ? ", and " : ", ") : ""}
              <a
                href={`https://github.com/${member.handle}`}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-foreground"
              >
                {member.name}
              </a>
            </span>
          ))}
          .
        </p>
      ) : null}

      {videoId ? (
        <div className="mt-10 overflow-hidden rounded-xl border border-line">
          <iframe
            className="aspect-video w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={`${project.title} demo`}
            allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : null}

      <div className="mt-6 divide-y divide-line">
        {project.sections?.map((section, index) => (
          <section
            key={section.heading}
            className="grid grid-cols-1 gap-x-8 py-10 sm:grid-cols-[10rem_1fr]"
          >
            <div className="sm:sticky sm:top-24 sm:self-start">
              <p className="font-mono text-xs text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-1.5 text-lg font-medium leading-snug tracking-tight">
                {section.heading}
              </h2>
            </div>

            <div className="mt-4 sm:mt-0">
              {section.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-4 max-w-[62ch] leading-[1.75] text-muted first:mt-0"
                >
                  {paragraph}
                </p>
              ))}
              {section.trace ? (
                <TraceBlock
                  caption={section.trace.caption}
                  lines={section.trace.lines}
                />
              ) : null}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
