import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a call | 33Crickets",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-page px-6 py-24">
      <p className="font-mono text-xs uppercase text-accent">Contact</p>
      <h1 className="mt-6 max-w-2xl text-3xl font-semibold">Book a call.</h1>
      <p className="mt-6 max-w-content text-base text-ink-muted">
        Calendar embed lands here. Thirty minutes, no deck, bring the hard
        problem.
      </p>
      {/* TODO: calendar embed (Calendly or SavvyCal), per plan. No form. */}
    </div>
  );
}
