import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
      <Link
        href="/projects"
        className="text-sm text-subtle transition-colors hover:text-foreground"
      >
        ← Projects
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <span className="font-mono text-xs text-subtle">{project.year}</span>
        </div>

        {project.accolade ? (
          <p className="mt-3 inline-block rounded bg-accent-soft px-2.5 py-1 text-xs text-accent">
            {project.accolade}
          </p>
        ) : null}

        <p className="prose-block mt-5 text-lg leading-relaxed text-muted">
          {project.summary}
        </p>

        <ul className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-subtle"
            >
              {tech}
            </li>
          ))}
        </ul>

        {project.links?.repo || project.links?.video ? (
          <div className="mt-6 flex flex-wrap gap-2">
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

      {project.role ? (
        <section className="mt-10 rounded-xl border border-line bg-panel p-6">
          <p className="eyebrow">My role</p>
          <p className="mt-3 leading-relaxed">{project.role}</p>
          {project.team?.length ? (
            <p className="mt-3 text-sm text-muted">
              Built with{" "}
              {project.team.map((member, i) => (
                <span key={member.handle}>
                  {i > 0
                    ? i === project.team!.length - 1
                      ? ", and "
                      : ", "
                    : ""}
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
        </section>
      ) : null}

      <div className="prose-block mt-4 divide-y divide-line">
        {project.sections?.map((section) => (
          <section key={section.heading} className="py-10">
            <h2 className="text-xl font-medium tracking-tight">
              {section.heading}
            </h2>
            {section.body.map((paragraph, i) => (
              <p key={i} className="mt-4 text-muted">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
