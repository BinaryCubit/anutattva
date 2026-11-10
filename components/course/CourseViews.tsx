// components/courses/CourseViews.tsx
import Link from "next/link";
import { formatFee, type Course } from "@/lib/courses-content";

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2";

function enrolHref(course: Course, email: string) {
  const subject = `Enrolment enquiry: ${course.title} (Online)`;
  const body = [
    "Hello Anutattva Foundation team,",
    "",
    `I would like to enrol in the online ${course.title} course (${formatFee(course.fee)}).`,
    "",
    "Name:",
    "Contact number:",
    "Current qualification / occupation:",
    "",
    "Please share the next steps for admission.",
  ].join("\n");
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 text-xl font-bold text-slate-900">{children}</h3>;
}

function DotList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-7 text-slate-600">
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-7 text-slate-600">
          <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1.5 h-5 w-5 shrink-0 text-green-600" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.58 7.7 9.3a1 1 0 10-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Compact card for the course listing. */
export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 border-l-4 border-l-amber-500 bg-white p-6 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:p-8">
      <div className="max-w-2xl">
        <ul className="mb-3 flex flex-wrap gap-2">
          {[course.mode, course.duration, course.level].map((t, i) => (
            <li
              key={t}
              className={[
                "rounded-full px-3 py-1 text-xs font-semibold",
                i === 0 ? "bg-blue-900 text-white" : "bg-slate-100 text-slate-700",
              ].join(" ")}
            >
              {t}
            </li>
          ))}
        </ul>
        <h3 className="text-2xl font-bold text-slate-900">{course.title}</h3>
        <p className="mt-2 text-base leading-7 text-slate-600">{course.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {course.tools.map((tool) => (
            <li key={tool} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
              {tool}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
        <div className="sm:text-right">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Course fee</p>
          <p className="text-3xl font-bold text-blue-900">{formatFee(course.fee)}</p>
        </div>
        <a
          href={`#${course.id}`}
          className={`inline-flex items-center justify-center rounded-lg bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 ${focusRing}`}
        >
          View details
        </a>
      </div>
    </article>
  );
}

/** Full course page section with a sticky enrolment panel. */
export function CourseDetail({ course, email }: { course: Course; email: string }) {
  const facts = [
    { label: "Duration", value: course.duration },
    { label: "Level", value: course.level },
    { label: "Mode", value: course.mode },
  ];

  return (
    <article id={course.id} aria-labelledby={`${course.id}-title`} className="scroll-mt-28">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">Online course</p>
        <h2 id={`${course.id}-title`} className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {course.title}
        </h2>
        <p className="mt-2 text-lg text-slate-600">{course.tagline}</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
        {/* Main column */}
        <div className="space-y-12">
          <section>
            <Heading>Overview</Heading>
            <p className="text-base leading-7 text-slate-600">{course.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools covered">
              {course.tools.map((tool) => (
                <li key={tool} className="rounded-full bg-blue-900/10 px-3.5 py-1.5 text-sm font-semibold text-blue-900">
                  {tool}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <Heading>What you will learn</Heading>
            <CheckList items={course.outcomes} />
          </section>

          <section>
            <Heading>Curriculum</Heading>
            <div className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
              {course.modules.map((m, i) => (
                <details key={m.title} className="group" open={i === 0}>
                  <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50 ${focusRing}`}>
                    {m.title}
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" fill="currentColor">
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                    </svg>
                  </summary>
                  <div className="border-t border-slate-100 bg-slate-50 px-5 py-4">
                    <DotList items={m.topics} />
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section>
            <Heading>Who this course is for</Heading>
            <DotList items={course.audience} />
          </section>

          <section>
            <Heading>Why learn with us</Heading>
            <ul className="grid gap-4 sm:grid-cols-2">
              {course.features.map((f) => (
                <li key={f.title} className="rounded-xl border border-slate-200 border-t-4 border-t-amber-500 bg-white p-5 shadow-sm">
                  <p className="font-semibold text-slate-900">{f.title}</p>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">{f.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <Heading>Frequently asked questions</Heading>
            <div className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
              {course.faqs.map((f) => (
                <details key={f.q} className="group">
                  <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-medium text-slate-900 hover:bg-slate-50 ${focusRing}`}>
                    {f.q}
                    <span aria-hidden="true" className="text-xl leading-none text-slate-500 group-open:hidden">+</span>
                    <span aria-hidden="true" className="hidden text-xl leading-none text-slate-500 group-open:inline">–</span>
                  </summary>
                  <p className="border-t border-slate-100 bg-slate-50 px-5 py-4 text-base leading-7 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* Sticky enrolment panel */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="bg-blue-900 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">Course fee</p>
              <p className="mt-1 text-4xl font-bold">{formatFee(course.fee)}</p>
              <p className="mt-2 text-sm text-blue-100">
                Applicable GST and other statutory taxes are charged as per prevailing laws.
              </p>
            </div>

            <dl className="divide-y divide-slate-100 px-6">
              {facts.map((f) => (
                <div key={f.label} className="flex items-center justify-between py-3.5 text-sm">
                  <dt className="text-slate-500">{f.label}</dt>
                  <dd className="font-semibold text-slate-900">{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="space-y-3 p-6 pt-4">
              <a
                href={enrolHref(course, email)}
                className={`flex w-full items-center justify-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-amber-400 ${focusRing}`}
              >
                Enroll Now
              </a>
              <Link
                href="/contact-us"
                className={`flex w-full items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 ${focusRing}`}
              >
                Talk to our team
              </Link>
              <p className="pt-1 text-xs leading-5 text-slate-500">
                By enrolling you agree to our{" "}
                <Link href="/terms" className="font-medium text-blue-900 underline underline-offset-2">
                  Terms &amp; Conditions
                </Link>
                . Refunds follow the policy in{" "}
                <Link href="/terms#refund-cancellation" className="font-medium text-blue-900 underline underline-offset-2">
                  Section 7
                </Link>
                .
              </p>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
