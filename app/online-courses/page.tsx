// app/online-courses/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { CourseCard, CourseDetail } from "@/components/course/CourseViews";
import { COURSES, COURSES_META } from "@/lib/courses-content";

export const metadata: Metadata = {
  title: "Online Courses | Anutattva Foundation",
  description:
    "Industry-relevant online courses from Anutattva Foundation. Start with the 6-month Data Analytics course covering Excel, SQL, Python, Power BI and Tableau.",
  alternates: { canonical: "/online-courses" },
};

export default function OnlineCoursesPage() {
  return (
    <main className="bg-slate-50">
      {/* Header: H1 + breadcrumb (design.md §3) */}
      <header className="bg-blue-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-blue-200">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="font-medium text-white">
                online-courses
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Online Courses</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-100">{COURSES_META.tagline}</p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-blue-100">
            {["Flexible", "Learning path", "Community"].map((chip) => (
              <li key={chip} className="flex items-center gap-2">
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 text-amber-400" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.58 7.7 9.3a1 1 0 10-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Listing */}
      <section aria-labelledby="available-heading" className="mx-auto max-w-6xl px-6 py-14">
        <h2 id="available-heading" className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Available courses
        </h2>
        <div className="mt-8 space-y-5">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Details */}
      <section aria-label="Course details" className="mx-auto max-w-6xl space-y-20 px-6 pb-20">
        {COURSES.map((course) => (
          <CourseDetail key={course.id} course={course} email={COURSES_META.email} />
        ))}
      </section>

      {/* Closing CTA band */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-slate-900">Take the First Step Toward Your Future</h2>
            <p className="mt-2 text-slate-600">
              Join {COURSES_META.organisation} and gain career-defining skills. Learn from industry experts and transform your career.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </main>
  );
}
