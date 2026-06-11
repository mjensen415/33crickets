import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-inverse text-inverse-text">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight">33Crickets</p>
          <p className="mt-1 text-sm opacity-70">
            Community leadership for AI companies.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/services" className="opacity-70 transition-opacity hover:opacity-100">
            Services
          </Link>
          <Link href="/about" className="opacity-70 transition-opacity hover:opacity-100">
            About
          </Link>
          <Link href="/contact" className="opacity-70 transition-opacity hover:opacity-100">
            Contact
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-page px-6 pb-8">
        <p className="font-mono text-xs uppercase opacity-50">
          © {new Date().getFullYear()} 33Crickets
        </p>
      </div>
    </footer>
  );
}
