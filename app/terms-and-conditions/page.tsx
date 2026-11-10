// app/terms/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import TermsSection from "@/components/terms/TermsSection";
import TermsToc from "@/components/terms/TermsToc";
import { TERMS_META, TERMS_SECTIONS } from "@/lib/terms-content";

export const metadata: Metadata = {
  title: "Terms & Conditions | Anutattva Foundation",
  description:
    "Terms and Conditions governing the use of the Anutattva Foundation website, programmes, admissions, fees, certificates, internships and placement assistance.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const tocItems = TERMS_SECTIONS.map(({ id, number, title }) => ({ id, number, title }));

  return (
    <main className="bg-slate-50">
      {/* Page header: H1 + breadcrumb (see design.md §3) */}
      <header className="bg-blue-900 text-white print:bg-white print:text-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-blue-200 print:hidden">
            <ol className="flex items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="font-medium text-white">
                terms
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {TERMS_META.title}
          </h1>
          <p className="mt-3 text-lg font-medium uppercase tracking-wide text-amber-400">
            {TERMS_META.organisation}
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
            <div>
              <dt className="text-blue-200 print:text-slate-500">Effective date</dt>
              <dd className="font-semibold">{TERMS_META.effectiveDate}</dd>
            </div>
            <div>
              <dt className="text-blue-200 print:text-slate-500">Last updated</dt>
              <dd className="font-semibold">{TERMS_META.lastUpdated}</dd>
            </div>
            <div>
              <dt className="text-blue-200 print:text-slate-500">Website</dt>
              <dd className="font-semibold">{TERMS_META.website.replace("https://", "")}</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <aside>
            <TermsToc items={tocItems} />
          </aside>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            {TERMS_SECTIONS.map((section) => (
              <TermsSection key={section.id} section={section} />
            ))}

            <p className="mt-6 border-t border-slate-200 pt-6 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
              End of Terms and Conditions
            </p>
          </article>
        </div>
      </div>

      {/* Closing CTA band (design.md §3) */}
      <section className="bg-white print:hidden">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-slate-900">
              Questions about these Terms?
            </h2>
            <p className="mt-2 text-slate-600">
              Reach out to our team and we will be glad to help.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2"
          >
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}
