import { timeline } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

export default function Journey() {
  return (
    <section id="journey" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading>My Journey</SectionHeading>

        <div className="relative">
          {/* Vertical line — left on mobile, center on desktop */}
          <div className="absolute left-0 top-0 h-full w-px bg-gray-200 md:left-1/2 dark:bg-gray-800" />

          <div className="flex flex-col gap-10">
            {timeline.map((entry, i) => (
              <TimelineItem key={i} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
