import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading>About Me</SectionHeading>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          I started my career as an electrical engineer, but quickly realized my
          true passion was in software. In 2019, I taught myself to code — starting
          with JavaScript and React — and haven&apos;t stopped since. I enjoy building
          clean, intuitive applications and continuously expanding my skill set.
          When I&apos;m not coding, you&apos;ll find me exploring new technologies or
          working on side projects that challenge me to grow.
        </p>
      </div>
    </section>
  );
}
