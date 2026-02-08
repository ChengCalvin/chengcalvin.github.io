export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
      {children}
    </h2>
  );
}
