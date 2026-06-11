import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | 33Crickets",
};

export default function About() {
  return (
    <div className="mx-auto max-w-page px-6 py-24">
      <p className="font-mono text-xs uppercase text-accent">About</p>
      <h1 className="mt-6 max-w-2xl text-3xl font-semibold">
        Fifteen years of making communities work.
      </h1>
      <p className="mt-6 max-w-content text-base text-ink-muted">
        Full page in progress. Fiverr, Upwork, Lyft, Microsoft, and a Product
        Advisory Board built from a 5M+ member global community.
      </p>
    </div>
  );
}
