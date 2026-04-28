export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Abhishek Nayak. Built with Next.js &amp; Framer Motion.
        </p>
        <p className="text-sm text-gray-600">Designed &amp; developed from scratch.</p>
      </div>
    </footer>
  );
}
