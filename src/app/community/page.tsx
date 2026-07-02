import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | 33Crickets",
  description:
    "The Founding 33: a community for people building with AI. Thirty-three founding seats, then the door closes for a while.",
};

/*
 * Waitlist-first launch, no form backend yet (Matt's call, 2026-07-01).
 * The application is a mailto. CONFIRM: public email address below is
 * Matt's personal gmail; swap to a branded address if he prefers.
 */

const APPLY_EMAIL = "mjensen415@gmail.com";
const APPLY_SUBJECT = "Founding 33";

export default function Community() {
  return (
    <div className="bg-paper text-ink">
      {/* Hero */}
      <section className="mx-auto max-w-page px-6 pt-24 pb-16 sm:pt-28">
        <p className="font-mono text-xs uppercase text-accent">Community</p>
        <h1 className="mt-6 max-w-3xl text-3xl font-semibold">
          Thirty-three founding seats.
        </h1>
        <p className="mt-6 max-w-content text-lg text-ink-muted">
          A community for people building with AI. Clients, indie hackers,
          tinkerers, and the AI-curious who actually ship.
        </p>
      </section>

      {/* How it starts */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-page px-6 py-section-sm">
          <div className="max-w-content space-y-6 text-base">
            <p>
              Every community I build for clients starts the same way: small
              on purpose. This one is no different. The first cohort is 33
              builders. We pick the platform together, set the rituals
              together, and decide together who the next 33 are.
            </p>
            <p>
              That&apos;s not scarcity theater. It&apos;s how good communities
              actually start. A big empty room makes everyone quieter. A
              small full one makes everyone louder.
            </p>
            <p>
              What you get inside: show your work and get feedback that
              isn&apos;t polite noise. Watch a community get built from zero,
              from the inside, by someone who does it for a living. Compare
              notes with people fighting the same adoption problems you are.
            </p>
            <p>
              The bar for getting in is that you make things, not that you
              pay me. Client of mine or total stranger, VC-backed or garage,
              doesn&apos;t matter.
            </p>
          </div>
        </div>
      </section>

      {/* Apply */}
      <section className="bg-inverse text-inverse-text">
        <div className="mx-auto max-w-page px-6 py-section-sm">
          <p className="font-mono text-xs uppercase text-accent-tint">
            The application
          </p>
          <h2 className="mt-6 max-w-2xl text-3xl font-semibold">
            Email me one thing you&apos;re building.
          </h2>
          <p className="mt-6 max-w-content text-base opacity-80">
            That&apos;s it. That&apos;s the application. One sentence about
            the thing, one link if it&apos;s public. I read every one and
            reply to every one.
          </p>
          <a
            href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(APPLY_SUBJECT)}`}
            className="mt-8 inline-block rounded-md bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-strong"
          >
            Claim a founding seat
          </a>
          <p className="mt-6 font-mono text-xs uppercase opacity-50">
            {APPLY_EMAIL} · subject: {APPLY_SUBJECT}
          </p>
        </div>
      </section>
    </div>
  );
}
