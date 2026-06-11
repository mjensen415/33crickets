import Link from "next/link";

/*
 * Home page. Section architecture adapted from Matt's Atlas design study:
 * problem-naming hero, receipts strip, gap concept block, one flagship
 * offer, stat strip, plain closer. All copy rewritten for 33Crickets
 * positioning per AGENT-CONTEXT.
 *
 * PENDING (per AGENT-CONTEXT): display basis for each logo (employment
 * vs. client vs. NDA) needs Matt's verification before launch.
 */

const logos = [
  "Fiverr",
  "Upwork",
  "Lyft",
  "Microsoft",
  "Yammer",
  "LindenLab",
  "OnLive",
];

const phases = [
  {
    label: "Weeks 1–4",
    name: "Diagnose",
    body: "Where your community actually stands. Audience, channels, what's working, what's quietly failing, and what your team can realistically own.",
  },
  {
    label: "Weeks 5–8",
    name: "Build",
    body: "The foundation. Strategy, programs, spaces, and the rituals that keep them running after launch week.",
  },
  {
    label: "Weeks 9–12",
    name: "Operationalize",
    body: "Make it yours. Playbooks, metrics, and a team that knows how to run the operation without me in the room.",
  },
];

const stats = [
  { value: "15+ years", caption: "building communities, from forums to AI products" },
  { value: "5M+ members", caption: "in Fiverr's global community, home of the Product Advisory Board" },
  { value: "100+ countries", caption: "represented in that community" },
];

export default function Home() {
  return (
    <div className="bg-paper text-ink">
      {/* Hero */}
      <section className="mx-auto max-w-page px-6 pt-24 pb-20 sm:pt-32">
        <p className="font-mono text-xs uppercase text-accent">
          Community leadership for AI companies · seed to Series B
        </p>
        <h1 className="mt-6 max-w-3xl text-display font-semibold">
          Your product shipped. Your community didn&apos;t.
        </h1>
        <p className="mt-6 max-w-content text-lg text-ink-muted">
          33Crickets is fractional community leadership for AI companies. One
          flagship engagement: a 90-day sprint that builds the community your
          product needs to stick.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-strong"
          >
            Book a call
          </Link>
          <Link
            href="/services"
            className="px-2 py-3 font-medium text-accent transition-colors hover:text-accent-strong"
          >
            See the sprint
          </Link>
        </div>
      </section>

      {/* Receipts strip */}
      <section className="border-y border-line">
        <div className="mx-auto max-w-page px-6 py-8">
          <p className="font-mono text-xs uppercase text-ink-faint">
            15+ years building communities at
          </p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {logos.map((name) => (
              <span
                key={name}
                className="font-mono text-sm uppercase tracking-wide text-ink-muted"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* The gap */}
      <section className="mx-auto max-w-page px-6 py-section-sm sm:py-section">
        <p className="font-mono text-xs uppercase text-accent">
          The community readiness gap
        </p>
        <div className="mt-6 max-w-content space-y-6 text-base">
          <p>
            AI companies ship products faster than they build the communities
            that sustain them. The launch goes fine. Then the questions pile up
            in Discord, your three best power users burn out answering them,
            and the team is too deep in the next release to notice the silence
            setting in.
          </p>
          <p>
            The other half of the problem has a name: adoption debt. It&apos;s
            the gap between someone buying your product and their team actually
            succeeding with it. Documentation doesn&apos;t close that gap.
            People do.
          </p>
          <p className="font-medium">We build the people part.</p>
        </div>
      </section>

      {/* Flagship offer */}
      <section className="bg-inverse text-inverse-text">
        <div className="mx-auto max-w-page px-6 py-section-sm sm:py-section">
          <p className="font-mono text-xs uppercase text-accent-tint">
            The flagship engagement
          </p>
          <h2 className="mt-6 max-w-2xl text-3xl font-semibold">
            The 90-Day Community Foundation Sprint
          </h2>
          <p className="mt-6 max-w-content text-base opacity-80">
            A fractional VP of Community engagement, productized. In 90 days we
            go from diagnosis to a running community operation your team owns.
            Ongoing advisory is the extension, not the default.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {phases.map((phase) => (
              <div
                key={phase.name}
                className="rounded-lg border border-inverse-text/15 p-6"
              >
                <p className="font-mono text-xs uppercase opacity-60">
                  {phase.label}
                </p>
                <h3 className="mt-3 text-xl font-medium">{phase.name}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-80">
                  {phase.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-content text-base opacity-80">
            Engagements start at $8K per month. If that number is a stretch,
            the sprint isn&apos;t the right tool for you yet, and I&apos;ll say
            so on the call.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-block rounded-md bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-strong"
          >
            See what&apos;s in the sprint
          </Link>
        </div>
      </section>

      {/* Stat strip */}
      <section className="mx-auto max-w-page px-6 py-section-sm">
        <div className="grid gap-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.value}>
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="mt-2 max-w-xs text-sm text-ink-muted">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-content border-t border-line pt-8 text-sm text-ink-muted">
          Hands-on with the modern AI stack: Claude Code, MCP, agents, n8n.
          You won&apos;t have to translate your product for me.
        </p>
      </section>

      {/* Closer */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-page px-6 py-section-sm sm:py-section">
          <h2 className="max-w-2xl text-3xl font-semibold">
            Build the community your product needs.
          </h2>
          <p className="mt-6 max-w-content text-base text-ink-muted">
            Thirty minutes. Bring your hardest community problem. If I&apos;m
            not the right tool for it, I&apos;ll tell you who is.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-strong"
          >
            Book a call
          </Link>
        </div>
      </section>
    </div>
  );
}
