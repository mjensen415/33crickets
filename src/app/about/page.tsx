import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | 33Crickets",
  description:
    "Matt Jensen has spent 15+ years building communities at Fiverr, Upwork, Lyft, Microsoft, and more. 33Crickets brings that to AI companies.",
};

/*
 * PENDING before launch: founder photo (placeholder below) and logo
 * display basis verification, same as Home.
 */

export default function About() {
  return (
    <div className="bg-paper text-ink">
      {/* Hero: heritage headline lives here now */}
      <section className="mx-auto max-w-page px-6 pt-24 pb-16 sm:pt-28">
        <p className="font-mono text-xs uppercase text-accent">About</p>
        <h1 className="mt-6 max-w-3xl text-3xl font-semibold">
          Turn your customers into your community.
        </h1>
        <p className="mt-6 max-w-content text-lg text-ink-muted">
          That&apos;s been the job for fifteen years. The products change. The
          work doesn&apos;t.
        </p>
      </section>

      {/* Founder story */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-page grid gap-12 px-6 py-section-sm sm:grid-cols-[1fr_280px] sm:py-section">
          <div className="max-w-content space-y-6 text-base">
            <p>
              I&apos;m Matt Jensen. I&apos;ve built and led communities at
              Fiverr, Upwork, Lyft, Microsoft, Yammer, LindenLab, and OnLive.
              Fifteen-plus years of the same lesson from different angles:
              products don&apos;t keep people around. People keep people
              around.
            </p>
            <p>
              The program I point to first is the Fiverr Product Advisory
              Board, built from a global community of five million-plus
              members across more than a hundred countries. Real customers
              shaping a real roadmap, at a scale where &quot;just talk to
              your users&quot; stops being simple and starts being an
              operation.
            </p>
            <p>
              Now I do that work for AI companies, because they need it most
              and have it least. The industry ships models faster than anyone
              builds the human infrastructure around them. I also build with
              the modern stack myself: Claude Code, MCP, agents, n8n. When
              your engineers explain the product, I won&apos;t need the
              simplified version.
            </p>
          </div>
          {/* Founder photo placeholder. Swap for a real photo before launch. */}
          <div className="flex aspect-[4/5] items-center justify-center rounded-lg border border-line bg-accent-tint">
            <p className="font-mono text-xs uppercase text-ink-faint">
              Founder photo
            </p>
          </div>
        </div>
      </section>

      {/* Why 33Crickets */}
      <section className="bg-inverse text-inverse-text">
        <div className="mx-auto max-w-page px-6 py-section-sm">
          <p className="font-mono text-xs uppercase text-accent-tint">
            Why 33Crickets
          </p>
          <div className="mt-6 max-w-content space-y-6 text-base opacity-90">
            <p>
              The 33 is my wife&apos;s favorite number. The crickets are
              because I can chirp like one. Ask on our call and I&apos;ll
              prove it.
            </p>
            <p>
              Mostly, though, 33 crickets is just the right amount. One
              cricket is lonely. A thousand is a plague. Thirty-three is a
              pleasant evening: enough voices to feel alive, few enough that
              each one still matters. That&apos;s roughly the math of a good
              community, too.
            </p>
          </div>
        </div>
      </section>

      {/* Closer */}
      <section className="mx-auto max-w-page px-6 py-section-sm">
        <h2 className="max-w-2xl text-3xl font-semibold">
          Want to hear the chirp?
        </h2>
        <p className="mt-6 max-w-content text-base text-ink-muted">
          Thirty minutes. Bring your community problem, leave with a straight
          answer about whether I can help.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-md bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-strong"
        >
          Book a call
        </Link>
      </section>
    </div>
  );
}
