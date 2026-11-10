// components/careers/JobPosting.tsx
import type { Job } from "@/lib/careers-content";

function List({
  items,
  variant = "dot",
}: {
  items: string[];
  variant?: "dot" | "check";
}) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-7 text-slate-600">
          {variant === "check" ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="mt-1.5 h-5 w-5 shrink-0 text-green-600"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.58 7.7 9.3a1 1 0 10-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <span
              aria-hidden="true"
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
            />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold text-blue-900">{title}</h3>
      {children}
    </div>
  );
}

function applyHref(job: Job, email: string) {
  const subject = `Application: ${job.title}`;
  const body = [
    "Hello Anutattva Foundation team,",
    "",
    `I would like to apply for the position of ${job.title}.`,
    "",
    "Name:",
    "College / University:",
    "MBA specialisation:",
    "Contact number:",
    "",
    "Why I am interested in this role:",
    "",
    "(Please attach your resume.)",
  ].join("\n");
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Compact card for the "Open positions" list. */
export function JobCard({ job }: { job: Job }) {
  const tags = [job.type, job.department, job.location, job.workMode].filter(Boolean) as string[];

  return (
    <article className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 border-l-4 border-l-amber-500 bg-white p-6 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:p-8">
      <div className="max-w-2xl">
        <ul className="mb-3 flex flex-wrap gap-2">
          {tags.map((t, i) => (
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
        <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{job.title}</h3>
        <p className="mt-2 text-base leading-7 text-slate-600">{job.summary}</p>
      </div>
      <a
        href={`#${job.id}`}
        className="inline-flex shrink-0 items-center justify-center rounded-lg bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
      >
        View details
      </a>
    </article>
  );
}

/** Full job description. */
export function JobDetail({ job, email }: { job: Job; email: string }) {
  const facts: { label: string; value: string }[] = [
    { label: "Position type", value: job.type },
    { label: "Department", value: job.department },
    ...(job.location ? [{ label: "Location", value: job.location }] : []),
    ...(job.workMode ? [{ label: "Work mode", value: job.workMode }] : []),
    ...(job.duration ? [{ label: "Duration", value: job.duration }] : []),
    ...(job.stipend ? [{ label: "Stipend", value: job.stipend }] : []),
    ...(job.openings ? [{ label: "Openings", value: job.openings }] : []),
    ...(job.deadline ? [{ label: "Apply by", value: job.deadline }] : []),
  ];

  return (
    <article
      id={job.id}
      aria-labelledby={`${job.id}-title`}
      className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 bg-slate-50 p-6 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
          Now hiring
        </p>
        <h2
          id={`${job.id}-title`}
          className="mt-1 text-3xl font-bold tracking-tight text-slate-900"
        >
          {job.title}
        </h2>

        <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {f.label}
              </dt>
              <dd className="mt-0.5 text-sm font-medium text-slate-900">{f.value}</dd>
            </div>
          ))}
        </dl>

        <a
          href={applyHref(job, email)}
          className="mt-8 inline-flex items-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 print:hidden"
        >
          Apply by email
        </a>
      </div>

      <div className="space-y-10 p-6 sm:p-10">
        <Block title="About the role">
          <div className="space-y-4">
            {job.about.map((p) => (
              <p key={p} className="text-base leading-7 text-slate-600">
                {p}
              </p>
            ))}
          </div>
        </Block>

        <Block title="Key responsibilities">
          <List items={job.responsibilities} />
        </Block>

        <Block title="Who we are looking for">
          <List items={job.requirements} />
        </Block>

        <Block title="Good to have">
          <List items={job.preferred} />
        </Block>

        <Block title="What you will gain">
          <List items={job.gains} variant="check" />
        </Block>

        <Block title="How to apply">
          <ol className="space-y-3">
            {job.applySteps.map((s, i) => (
              <li key={s} className="flex gap-3 text-base leading-7 text-slate-600">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-900 text-xs font-semibold text-white"
                >
                  {i + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-base text-slate-600">
            Send your application to{" "}
            <a
              href={applyHref(job, email)}
              className="font-medium text-blue-900 underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-blue-800"
            >
              {email}
            </a>
            .
          </p>
        </Block>
      </div>
    </article>
  );
}
