import { PinnedRepo } from "@/lib/types";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects({ repos }: { repos: PinnedRepo[] }) {
  if (repos.length === 0) {
    return (
      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading>Projects</SectionHeading>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Check out my work on{" "}
            <a
              href="https://github.com/ChengCalvin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-dark underline dark:text-primary"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Projects</SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <ProjectCard key={repo.name} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  );
}
