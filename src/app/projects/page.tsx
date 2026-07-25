import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { publishedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software, data, and machine learning projects.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
      <p className="eyebrow">Projects</p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
        Things I&apos;ve built
      </h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">
        Each one has a write-up covering what the problem was, what I decided
        and why, and what I&apos;d do differently.
      </p>

      <ul className="mt-12 grid grid-cols-1 gap-4">
        {publishedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </main>
  );
}
