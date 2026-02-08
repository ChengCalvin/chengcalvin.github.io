import { Star, ExternalLink, Github } from "lucide-react";
import { PinnedRepo } from "@/lib/types";

export default function ProjectCard({ repo }: { repo: PinnedRepo }) {
  return (
    <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-primary/5">
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {repo.name}
        </h3>
        <div className="flex items-center gap-2">
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
            aria-label={`View ${repo.name} source on GitHub`}
          >
            <Github size={18} />
          </a>
          {repo.homepageUrl && (
            <a
              href={repo.homepageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
              aria-label={`View ${repo.name} live demo`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {repo.description || "No description available."}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {repo.primaryLanguage && (
            <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: repo.primaryLanguage.color }}
              />
              {repo.primaryLanguage.name}
            </span>
          )}
          {repo.stargazerCount > 0 && (
            <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Star size={12} />
              {repo.stargazerCount}
            </span>
          )}
        </div>
      </div>

      {repo.repositoryTopics.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {repo.repositoryTopics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary-dark dark:text-primary"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
