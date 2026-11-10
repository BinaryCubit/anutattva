// app/privacy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PrivacySection from "@/components/privacy/PrivacySection";
import PrivacyToc from "@/components/privacy/PrivacyToc";
import { PRIVACY_META, PRIVACY_SECTIONS } from "@/lib/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | Anutattva Foundation",
  description:
    "How Anutattva Foundation collects, uses, protects, retains and deletes personal information, including our consent-first approach and 90-day deletion policy.",
  alternates: { canonical: "/privacy" },
};

// Short highlights, each taken from sections 3, 7 and 8 of the policy.
const HIGHLIGHTS = [
  {
    title: "Consent first",
    text: "No pre-selected checkboxes, and consent is never assumed from a website visit.",
  },
  {
    title: "90-day deletion cycle",
    text: "Enquiry data and post-course data are reviewed and deleted within 90 days, subject to legal retention.",
  },
  {
    title: "No sale of data",
    text: "Student personal information is not sold or commercially traded.",
  },
];

export default function PrivacyPage() {
  const tocItems = PRIVACY_SECTIONS.map(({ id, number, title }) => ({ id, number, title }));

  return (
    <main className="bg-slate-50">
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
                privacy
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {PRIVACY_META.title}
          </h1>
          <p className="mt-3 text-lg font-medium uppercase tracking-wide text-amber-400">
            {PRIVACY_META.organisation}
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
            <div>
              <dt className="text-blue-200 print:text-slate-500">Effective date</dt>
              <dd className="font-semibold">{PRIVACY_META.effectiveDate}</dd>
            </div>
            <div>
              <dt className="text-blue-200 print:text-slate-500">Last updated</dt>
              <dd className="font-semibold">{PRIVACY_META.lastUpdated}</dd>
            </div>
            <div>
              <dt className="text-blue-200 print:text-slate-500">Website</dt>
              <dd className="font-semibold">{PRIVACY_META.website.replace("https://", "")}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 pt-10">
        <ul className="grid gap-4 sm:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <li
              key={h.title}
              className="rounded-xl border border-slate-200 border-t-4 border-t-amber-500 bg-white p-5 shadow-sm"
            >
              <p className="font-semibold text-slate-900">{h.title}</p>
              <p className="mt-1.5 text-sm leading-6 text-slate-600">{h.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <aside>
            <PrivacyToc items={tocItems} />
          </aside>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            {PRIVACY_SECTIONS.map((section) => (
              <PrivacySection key={section.id} section={section} />
            ))}
          </article>
        </div>
      </div>

      <section className="bg-white print:hidden">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-slate-900">
              Want to access, correct or delete your data?
            </h2>
            <p className="mt-2 text-slate-600">
              Email info@anutattvafoundation.in and we will guide you through the process.
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
