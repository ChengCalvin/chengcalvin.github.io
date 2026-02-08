import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { personalInfo } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const links = [
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: Github,
  },
  {
    label: "Resume",
    href: "/Calvin_Cheng_Resume.pdf",
    icon: FileText,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading>Get in Touch</SectionHeading>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          I&apos;m always open to new opportunities and conversations. Feel free to
          reach out!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noopener noreferrer"}
              className="flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-primary-dark hover:text-primary-dark dark:border-gray-700 dark:text-gray-300 dark:hover:border-primary dark:hover:text-primary"
            >
              <link.icon size={18} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
