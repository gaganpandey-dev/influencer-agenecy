import Link from "next/link";

const badgeStyles = {
  New: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/50",
  Hot: "bg-rose-50 text-rose-700 ring-1 ring-rose-200/50", 
  Beta: "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200/50",
};

export default function DropdownColumn({ title, subtitle, links }) {
  return (
    <div className="min-w-[240px] max-w-sm">
      {/* HEADER */}
      <div className="mb-6 pb-4 border-b border-slate-200">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          {title}
        </p>
        {subtitle && (
          <p className="mt-1.5 text-sm text-slate-600 font-medium leading-5">
            {subtitle}
          </p>
        )}
      </div>

      {/* LINKS */}
      <ul className="space-y-2">
        {links?.map((item, index) => (
          <li key={`${item.href}-${index}`}>
            <Link
              href={item.href}
              className="group flex items-start gap-3 rounded-2xl px-4 py-3 hover:bg-slate-50/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 transition-all duration-200"
            >
              {/* Status indicator */}
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-[11px] font-bold shadow-sm ring-1 ring-white/30 group-hover:scale-105">
                →
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5">
                  <span className="text-base font-semibold text-slate-900 group-hover:text-slate-950 leading-6 transition-colors duration-200">
                    {item.label}
                  </span>

                  {item.badge && (
                    <span
                      className={`
                        text-xs px-2.5 py-1 rounded-full font-semibold uppercase 
                        tracking-[0.05em] ring-1 shadow-sm h-6 flex items-center
                        ${badgeStyles[item.badge]}
                      `}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="mt-1.5 text-sm text-slate-600 leading-5 max-w-none group-hover:text-slate-700 transition-colors">
                    {item.description}
                  </p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}