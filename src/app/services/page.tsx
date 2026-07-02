import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | 33Crickets",
  description:
    "One offer: the 90-Day Community Foundation Sprint. Fractional VP of Community for AI companies, seed to Series B. Engagements start at $8K per month.",
};

/*
 * Services page. One page, one flagship offer, per AGENT-CONTEXT.
 * Old service menu (forums, social, reputation, migration) is dead.
 * Hard part (price) goes first. Disqualify confidently.
 */

const phases = [
  {
    label: "Weeks 1–4",
    name: "Diagnose",
    happens:
      "I audit what you actually have. Where your users gather, who answers their questions, which channels are alive and which are theater. Interviews with your team and your most active users. A readiness assessment against the adoption debt your product is accumulating.",
    get: "A diagnosis your exec team can act on, and a community strategy scoped to what your stage can support.",
  },
  {
    label: "Weeks 5–8",
    name: "Build",
    happens:
      "The foundation goes up. Spaces stood up or restructured, a founding-member program, the first rituals and programs on a calendar, moderation and escalation paths that don't depend on heroics.",
    get: "A live community foundation with its first programs running, not a deck describing one.",
  },
  {
    label: "Weeks 9–12",
    name: "Operationalize",
    happens:
      "I work myself out of the job. Playbooks for everything we built, a metrics setup that tells you what's working, and training for whoever owns this next. If you need to hire, I help you scope and screen the role.",
    get: "Your team running the operation without me in the room.",
  },
];

const notAFit = [
  "You don't have a shipped product with real users yet. There's nothing to build a community around, and I'd be charging you to wait.",
  "You want a social media manager, an engagement person, or someone to babysit a forum. That's not this, and honestly it's not me.",
  "You're hoping community will fix churn caused by a product that isn't working. It won't. Fix the product first.",
  "You need pipeline dressed up as community. Real communities generate demand eventually, but if you need leads this quarter, buy ads.",
  "$8K a month is a stretch. No judgment, the timing is just wrong. Come back after the next raise.",
];

export default function Services() {
  return (
    <div className="bg-paper text-ink">
      {/* Hero: price first. That's the hard part, so it leads. */}
      <section className="mx-auto max-w-page px-6 pt-24 pb-16 sm:pt-28">
        <p className="font-mono text-xs uppercase text-accent">Services</p>
        <h1 className="mt-6 max-w-3xl text-3xl font-semibold">
          One offer: the 90-Day Community Foundation Sprint.
        </h1>
        <p className="mt-6 max-w-content text-lg text-ink-muted">
          A fractional VP of Community engagement, productized. Engagements
          start at $8K per month. That&apos;s the hard part, so it goes first.
        </p>
        <p className="mt-6 max-w-content text-base">
          What you get for it: a working community operation in 90 days.
          Strategy, spaces, programs, rituals, metrics, and a team that knows
          how to run all of it. Not a strategy deck. An operation.
        </p>
      </section>

      {/* Who it's for */}
      <section className="border-y border-line">
        <div className="mx-auto max-w-page px-6 py-12">
          <p className="max-w-content text-base text-ink-muted">
            Built for AI companies between seed and Series B. You&apos;ve
            shipped. Users are showing up faster than anyone on the team can
            hold relationships with them, and community keeps sliding to next
            quarter because everyone senior is busy shipping.
          </p>
        </div>
      </section>

      {/* The three phases */}
      <section className="mx-auto max-w-page px-6 py-section-sm sm:py-section">
        <p className="font-mono text-xs uppercase text-accent">
          How the 90 days run
        </p>
        <div className="mt-10 space-y-12">
          {phases.map((phase) => (
            <div
              key={phase.name}
              className="grid gap-6 border-t border-line pt-8 sm:grid-cols-[180px_1fr]"
            >
              <div>
                <p className="font-mono text-xs uppercase text-ink-faint">
                  {phase.label}
                </p>
                <h2 className="mt-2 text-xl font-medium">{phase.name}</h2>
              </div>
              <div className="max-w-content space-y-4">
                <p className="text-base">{phase.happens}</p>
                <p className="text-base text-ink-muted">
                  <span className="font-medium text-ink">You get: </span>
                  {phase.get}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* After the sprint */}
      <section className="bg-accent-tint">
        <div className="mx-auto max-w-page px-6 py-16">
          <p className="font-mono text-xs uppercase text-accent">
            After the sprint
          </p>
          <p className="mt-6 max-w-content text-base">
            Most teams keep me on as an ongoing advisor: a monthly cadence of
            strategy, unblocking, and a second set of eyes on the numbers.
            That&apos;s the extension, not the default. If your team is
            running well without me, that was the point.
          </p>
        </div>
      </section>

      {/* Not a fit */}
      <section className="mx-auto max-w-page px-6 py-section-sm sm:py-section">
        <p className="font-mono text-xs uppercase text-accent">
          Not a fit if
        </p>
        <div className="mt-8 max-w-content space-y-5">
          {notAFit.map((item) => (
            <p key={item} className="border-l-2 border-line pl-5 text-base">
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* Closer */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-page px-6 py-section-sm">
          <h2 className="max-w-2xl text-3xl font-semibold">
            Still here? Then it&apos;s probably a fit.
          </h2>
          <p className="mt-6 max-w-content text-base text-ink-muted">
            Thirty minutes, no deck. We&apos;ll figure out where your community
            actually stands, and I&apos;ll tell you plainly if the sprint is
            the wrong tool.
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
