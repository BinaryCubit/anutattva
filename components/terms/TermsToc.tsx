"use client";

// components/terms/TermsToc.tsx
import { useEffect, useState } from "react";

type Item = { id: string; number: number; title: string };

function TocList({
  items,
  activeId,
  onNavigate,
}: {
  items: Item[];
  activeId: string;
  onNavigate?: () => void;
}) {
  return (
    <ol className="space-y-0.5">
      {items.map((s) => {
        const active = s.id === activeId;
        return (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={onNavigate}
              aria-current={active ? "location" : undefined}
              className={[
                "flex gap-2.5 rounded-lg px-3 py-1.5 text-sm leading-6 transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
                active
                  ? "bg-blue-900 font-semibold text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-blue-900",
              ].join(" ")}
            >
              <span className={active ? "text-amber-400" : "text-slate-400"}>
                {s.number}.
              </span>
              <span>{s.title}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export default function TermsToc({ items }: { items: Item[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the topmost section currently inside the "reading band".
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      {/* Mobile / tablet: collapsible */}
      <details className="group mb-8 rounded-xl border border-slate-200 bg-white shadow-sm lg:hidden print:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
          Table of contents
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-5 w-5 text-slate-500 transition-transform group-open:rotate-180"
            fill="currentColor"
          >
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
          </svg>
        </summary>
        <nav
          aria-label="Terms and Conditions sections"
          className="max-h-80 overflow-y-auto border-t border-slate-200 p-3"
        >
          <TocList items={items} activeId={activeId} />
        </nav>
      </details>

      {/* Desktop: sticky sidebar */}
      <nav
        aria-label="Terms and Conditions sections"
        className="sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-y-auto rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:block print:hidden"
      >
        <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
          On this page
        </p>
        <TocList items={items} activeId={activeId} />
      </nav>
    </>
  );
}
