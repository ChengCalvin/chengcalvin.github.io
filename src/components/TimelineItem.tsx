"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Code, Briefcase, BookOpen } from "lucide-react";
import { TimelineEntry } from "@/lib/types";

const iconMap = {
  education: GraduationCap,
  project: Code,
  work: Briefcase,
  learning: BookOpen,
};

export default function TimelineItem({
  entry,
  index,
}: {
  entry: TimelineEntry;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0;
  const Icon = iconMap[entry.type];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex w-full items-start gap-6 md:w-1/2 ${
        isLeft ? "md:ml-0 md:justify-end md:pr-12" : "md:ml-auto md:pl-12"
      } transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Center dot (desktop) */}
      <div
        className={`absolute top-2 hidden h-3 w-3 rounded-full bg-primary md:block ${
          isLeft ? "right-[-6.5px]" : "left-[-6.5px]"
        }`}
      />

      {/* Left dot (mobile) */}
      <div className="absolute left-[-6.5px] top-2 h-3 w-3 rounded-full bg-primary md:hidden" />

      <div className="ml-6 md:ml-0">
        <div className="mb-1 flex items-center gap-2">
          <Icon size={16} className="text-primary" />
          <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary-dark dark:text-primary">
            {entry.year}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {entry.title}
        </h3>
        {entry.subtitle && (
          <p className="text-sm text-primary-dark dark:text-primary">
            {entry.subtitle}
          </p>
        )}
        <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {entry.description}
        </p>
      </div>
    </div>
  );
}
