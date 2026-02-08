import { Code, Globe, RefreshCw } from "lucide-react";
import { services } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Code,
  Globe,
  RefreshCw,
};

export default function Services() {
  return (
    <section id="services" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Freelance Services</SectionHeading>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600 dark:text-gray-400">
          Available for freelance projects. Whether you need a polished frontend,
          a full website from scratch, or help modernizing an existing codebase —
          let&apos;s talk.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-primary/5"
              >
                {Icon && (
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary-dark dark:text-primary">
                    <Icon size={22} />
                  </div>
                )}
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
