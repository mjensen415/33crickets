import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a call | 33Crickets",
  description:
    "Thirty minutes, no deck. Bring your hardest community problem.",
};

/*
 * Contact is a calendar embed, not a form, per plan.
 * TODO: replace the placeholder below with the real scheduling embed
 * (tool + link pending from Matt). Most tools ship an inline embed
 * snippet; it drops into the placeholder div.
 */

export default function Contact() {
  return (
    <div className="bg-paper text-ink">
      <section className="mx-auto max-w-page px-6 pt-24 pb-16 sm:pt-28">
        <p className="font-mono text-xs uppercase text-accent">Contact</p>
        <h1 className="mt-6 max-w-3xl text-3xl font-semibold">
          Book a call.
        </h1>
        <p className="mt-6 max-w-content text-lg text-ink-muted">
          Thirty minutes, no deck. Bring the hard problem. If the sprint is
          the wrong tool for it, you&apos;ll hear that on the call, along
          with what I&apos;d try instead.
        </p>
      </section>

      <section className="mx-auto max-w-page px-6 pb-24">
        {/* Scheduling embed placeholder */}
        <div className="flex min-h-96 items-center justify-center rounded-lg border border-line bg-paper-raised">
          <div className="text-center">
            <p className="font-mono text-xs uppercase text-ink-faint">
              Calendar embed
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              Scheduling link goes live here shortly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
