import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | 33Crickets",
};

export default function Services() {
  return (
    <div className="mx-auto max-w-page px-6 py-24">
      <p className="font-mono text-xs uppercase text-accent">Services</p>
      <h1 className="mt-6 max-w-2xl text-3xl font-semibold">
        The 90-Day Community Foundation Sprint
      </h1>
      <p className="mt-6 max-w-content text-base text-ink-muted">
        Full page in progress. The short version: one flagship engagement,
        diagnose to build to operationalize, starting at $8K per month.
      </p>
    </div>
  );
}
