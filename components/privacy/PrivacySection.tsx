// components/privacy/PrivacySection.tsx
import type { Block, PrivacySectionData as Section } from "@/lib/privacy-content";

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "p":
      return <p className="text-base leading-7 text-slate-600">{block.text}</p>;

    case "h3":
      return (
        <h3 className="pt-3 text-lg font-semibold leading-7 text-blue-900">
          {block.text}
        </h3>
      );

    case "ul":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-7 text-slate-600">
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="space-y-2.5">
          {block.items.map((item, i) => (
            <li key={item} className="flex gap-3 text-base leading-7 text-slate-600">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-900/10 text-xs font-semibold text-blue-900"
              >
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );

    case "kv":
      return (
        <dl className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          {block.items.map(({ label, value, href }) => (
            <div
              key={label}
              className="grid gap-1 px-5 py-3.5 sm:grid-cols-[14rem_1fr] sm:gap-6"
            >
              <dt className="text-sm font-semibold text-slate-900">{label}</dt>
              <dd className="break-words text-sm leading-6 text-slate-600">
                {href ? (
                  <a
                    href={href}
                    className="font-medium text-blue-900 underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          ))}
        </dl>
      );
  }
}

export default function PrivacySection({ section }: { section: Section }) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-28 border-b border-slate-200 py-10 first:pt-0 last:border-b-0 print:break-inside-avoid"
    >
      <h2
        id={`${section.id}-heading`}
        className="mb-5 flex items-start gap-3 text-2xl font-bold leading-8 text-slate-900"
      >
        <span className="mt-0.5 inline-flex h-8 min-w-8 items-center justify-center rounded-lg bg-blue-900 px-2 text-sm font-semibold text-white">
          {section.number}
        </span>
        <span>{section.title}</span>
      </h2>

      <div className="space-y-4">
        {section.blocks.map((block, i) => (
          <BlockView key={i} block={block} />
        ))}
      </div>
    </section>
  );
}
