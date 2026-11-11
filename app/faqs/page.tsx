// app/faqs/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FaqExplorer from "@/components/faq/FaqExplorer";
import { FAQ_CATEGORIES, FAQ_META, FAQS } from "@/lib/faq-content";

export const metadata: Metadata = {
  title: "FAQs | Anutattva Foundation",
  description:
    "Answers to common questions about Anutattva Foundation courses, admission, fees, refunds, certificates, internships, placement assistance and privacy.",
  alternates: { canonical: "/faqs" },
};

export default function FaqPage() {
  // FAQ structured data (every question below is visible on the page).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="bg-slate-50">
      <script
        type="application/ld+json"
        // Escape "<" so content can never close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Header: H1 + breadcrumb (design.md §3) */}
      <header className="bg-blue-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-blue-200">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="font-medium text-white">
                faqs
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Frequently asked questions</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-100">{FAQ_META.tagline}</p>
        </div>
      </header>

      {/* Explorer */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <FaqExplorer items={FAQS} categories={FAQ_CATEGORIES} />
      </div>

      {/* Closing CTA band */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-slate-900">Still have questions?</h2>
            <p className="mt-2 text-slate-600">
              Write to {FAQ_META.email} or send us a message, and our team will be happy to help.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2"
            >
              Contact us
            </Link>
            <Link
              href="/enroll"
              className="inline-flex items-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2"
            >
              Enroll now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
