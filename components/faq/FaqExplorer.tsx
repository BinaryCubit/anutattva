"use client";

// components/faq/FaqExplorer.tsx
import Link from "next/link";
import { useMemo, useState } from "react";
import type { FaqItem } from "@/lib/faq-content";

type Category = { id: string; label: string };

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2";

export default function FaqExplorer({
  items,
  categories,
}: {
  items: FaqItem[];
  categories: readonly Category[];
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const inCategory = active === "all" || item.category === active;
      const matches = !q || `${item.q} ${item.a}`.toLowerCase().includes(q);
      return inCategory && matches;
    });
  }, [items, query, active]);

  const visibleCategories = categories.filter((c) => filtered.some((i) => i.category === c.id));

  return (
    <div>
      {/* Search */}
      <div className="relative">
        <label htmlFor="faq-search" className="sr-only">
          Search questions
        </label>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.48l4.31 4.3a1 1 0 01-1.4 1.42l-4.31-4.31A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <input
          id="faq-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions, e.g. refund, certificate, fees"
          className="block w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-12 pr-4 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20"
        />
      </div>

      {/* Category chips */}
      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by topic">
        {[{ id: "all", label: "All topics" }, ...categories].map((c) => {
          const on = active === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              aria-pressed={on}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                focusRing,
                on
                  ? "bg-blue-900 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",
              ].join(" ")}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-sm text-slate-500" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "question" : "questions"}
      </p>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <p className="text-lg font-semibold text-slate-900">No matching questions</p>
          <p className="mt-2 text-slate-600">
            Try a different word, or{" "}
            <Link href="/contact-us" className="font-medium text-blue-900 underline underline-offset-2">
              ask our team
            </Link>
            .
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-10">
          {visibleCategories.map((cat) => (
            <section key={cat.id} aria-labelledby={`faq-${cat.id}`}>
              <h2 id={`faq-${cat.id}`} className="mb-4 text-xl font-bold text-slate-900">
                {cat.label}
              </h2>
              <div className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                {filtered
                  .filter((i) => i.category === cat.id)
                  .map((item) => (
                    <details key={item.id} className="group">
                      <summary
                        className={`flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50 ${focusRing}`}
                      >
                        {item.q}
                        <span aria-hidden="true" className="text-xl leading-none text-slate-500 group-open:hidden">
                          +
                        </span>
                        <span aria-hidden="true" className="hidden text-xl leading-none text-slate-500 group-open:inline">
                          –
                        </span>
                      </summary>
                      <div className="border-t border-slate-100 bg-slate-50 px-5 py-4">
                        <p className="text-base leading-7 text-slate-600">{item.a}</p>
                        {item.links && item.links.length > 0 && (
                          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                            {item.links.map((l) => (
                              <li key={l.href}>
                                <Link
                                  href={l.href}
                                  className="text-sm font-medium text-blue-900 underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-blue-800"
                                >
                                  {l.label} →
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </details>
                  ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
