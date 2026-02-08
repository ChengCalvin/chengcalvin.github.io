import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-primary/30">
          <Image
            src="/profile.jpg"
            alt={personalInfo.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4">
          <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            {personalInfo.name}
          </h1>
          <p
            className="animate-slide-up text-xl text-primary-dark dark:text-primary"
            style={{ animationDelay: "0.1s" }}
          >
            {personalInfo.title}
          </p>
          <p
            className="mx-auto max-w-lg animate-slide-up text-gray-600 dark:text-gray-400"
            style={{ animationDelay: "0.2s" }}
          >
            {personalInfo.bio}
          </p>
        </div>

        <div
          className="flex animate-slide-up items-center gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#projects"
            className="rounded-full bg-primary-dark px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary dark:bg-primary dark:text-gray-950 dark:hover:bg-primary-dark dark:hover:text-white"
          >
            View My Work
          </a>
          <a
            href="/Calvin_Cheng_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-primary-dark hover:text-primary-dark dark:border-gray-700 dark:text-gray-300 dark:hover:border-primary dark:hover:text-primary"
          >
            Download CV
          </a>
        </div>

        <div
          className="flex animate-slide-up items-center gap-5"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
