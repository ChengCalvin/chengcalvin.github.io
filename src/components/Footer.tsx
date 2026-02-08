export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-6 py-8 dark:border-gray-800">
      <div className="mx-auto max-w-5xl text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Calvin Cheng. Built with Next.js &amp;
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
