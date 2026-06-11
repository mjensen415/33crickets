import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-page items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
          33Crickets
        </Link>
        <div className="flex items-center gap-8">
          {/* Thinking (blog) stays hidden until 3 posts exist, per plan */}
          <Link
            href="/services"
            className="hidden text-sm text-ink-muted transition-colors hover:text-ink sm:block"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="hidden text-sm text-ink-muted transition-colors hover:text-ink sm:block"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            Book a call
          </Link>
        </div>
      </nav>
    </header>
  );
}
