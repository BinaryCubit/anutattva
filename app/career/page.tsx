// app/careers/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { JobCard, JobDetail } from "@/components/careers/JobPosting";
import { CAREERS_META, JOBS, WHY_JOIN } from "@/lib/careers-content";

export const metadata: Metadata = {
  title: "Careers | Anutattva Foundation",
  description:
    "Explore career and internship opportunities at Anutattva Foundation, including the MBA Intern position in Sales & Marketing.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <main className="bg-slate-50">
      {/* Header: H1 + breadcrumb (design.md §3) */}
      <header className="bg-blue-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-blue-200">
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
                careers
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Build your career with {CAREERS_META.organisation}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-100">
            {CAREERS_META.tagline}
          </p>

          <a
            href="#open-positions"
            className="mt-8 inline-flex items-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900"
          >
            See open positions
          </a>
        </div>
      </header>

      {/* Why join us */}
      <section aria-labelledby="why-join-heading" className="mx-auto max-w-6xl px-6 py-14">
        <h2 id="why-join-heading" className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Why join us
        </h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_JOIN.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-slate-200 border-t-4 border-t-amber-500 bg-white p-5 shadow-sm"
            >
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Open positions */}
      <section
        id="open-positions"
        aria-labelledby="open-positions-heading"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-14"
      >
        <h2
          id="open-positions-heading"
          className="text-2xl font-bold text-slate-900 sm:text-3xl"
        >
          Open positions
        </h2>
        <p className="mt-2 text-slate-600">
          {JOBS.length === 1 ? "1 opening" : `${JOBS.length} openings`} currently available.
        </p>
        <div className="mt-8 space-y-5">
          {JOBS.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* Full descriptions */}
      <section aria-label="Job descriptions" className="mx-auto max-w-4xl space-y-10 px-6 pb-16">
        {JOBS.map((job) => (
          <JobDetail key={job.id} job={job} email={CAREERS_META.email} />
        ))}

        <p className="text-center text-sm leading-6 text-slate-500">
          Application details such as your resume are used only for recruitment and internship
          administration, as described in our{" "}
          <Link
            href="/privacy"
            className="font-medium text-blue-900 underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-blue-800"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      {/* Closing CTA band */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-slate-900">
              Don’t see the right role?
            </h2>
            <p className="mt-2 text-slate-600">
              Tell us about yourself and the work you would like to do. We will keep your
              details in mind for future openings.
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
