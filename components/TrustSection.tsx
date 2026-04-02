"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TrustSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-emerald-50/30 blur-3xl -translate-x-1/2" />
        <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-cyan-50/20 blur-3xl translate-x-1/2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24 md:mb-32">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-200/50 bg-emerald-50/80 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.2em] text-emerald-800 shadow-lg backdrop-blur-sm">
            Proven Results
          </span>

          <h2 className="mt-10 bg-gradient-to-r from-slate-950 to-slate-900 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em]">
            Real campaigns. Real results.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl md:text-2xl font-medium text-slate-700 leading-relaxed">
            50+ brands trust us to deliver measurable influencer marketing ROI across India
          </p>
        </div>

        {/* Stats Row - Bigger & Bolder */}
        <div className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "₹25Cr+", label: "Campaign Value", accent: "from-emerald-500 to-emerald-600" },
              { value: "350+", label: "Active Creators", accent: "from-cyan-500 to-cyan-600" },
              { value: "85%", label: "Client Retention", accent: "from-orange-500 to-orange-600" },
              { value: "7-14 days", label: "Launch Speed", accent: "from-purple-500 to-purple-600" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative isolate bg-gradient-to-t from-slate-50 to-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 border border-slate-100/50"
              >
                {/* Gradient accent line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div 
                  className={`text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r ${item.accent} bg-clip-text text-transparent mb-6 leading-none drop-shadow-lg`}
                >
                  {item.value}
                </div>
                
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-slate-600 group-hover:text-slate-900 transition-colors">
                  {item.label}
                </p>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-10 from-white via-white/50 blur-xl transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies - Structured Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              category: "D2C Beauty",
              badge: "emerald",
              title: "3.2M reach in 7 days",
              desc: "20 micro-influencers across Instagram Reels + YouTube Shorts. 8.2% engagement, 12K+ link clicks.",
              metrics: ["↑ 320% vs benchmark", "₹4.2/₹1K reach"],
            },
            {
              category: "FinTech App",
              badge: "cyan",
              title: "28K app installs",
              desc: "15 YouTube + regional Instagram creators. CPI ₹42 (vs ₹89 avg). 72% retention at day 7.",
              metrics: ["↓ 53% cost reduction", "ROI 4.8x"],
              colSpan: "md:col-span-2 lg:col-span-1"
            },
            {
              category: "Regional FMCG",
              badge: "purple",
              title: "15% sales lift",
              desc: "Tamil & Telugu creators across Tier 2/3 cities. 2.1M impressions, 18K store visits via UTM.",
              metrics: ["₹1.8Cr incremental sales", "Tier 2/3 focus"],
              colSpan: "md:col-span-2"
            }
          ].map((item, i) => (
            <div
              key={i}
              className={`
                group relative bg-gradient-to-b from-white to-slate-50/50 rounded-3xl 
                p-8 lg:p-10 shadow-xl hover:shadow-3xl hover:-translate-y-4 
                transition-all duration-700 border border-slate-100/50 overflow-hidden
                ${item.colSpan || ""}
              `}
            >
              {/* Category badge */}
              <span 
                className={`
                  inline-block px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wide shadow-lg
                  transition-all duration-500 group-hover:scale-105
                  ${item.badge === 'emerald' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : ''}
                  ${item.badge === 'cyan' ? 'bg-cyan-100 text-cyan-800 border-cyan-200' : ''}
                  ${item.badge === 'purple' ? 'bg-purple-100 text-purple-800 border-purple-200' : ''}
                `}
              >
                {item.category}
              </span>

              {/* Title */}
              <h3 className="mt-6 text-2xl lg:text-3xl font-black text-slate-950 mb-5 leading-tight group-hover:text-slate-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg mb-6 max-w-md">
                {item.desc}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-4">
                {item.metrics.map((metric, j) => (
                  <span
                    key={j}
                    className="inline-flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full text-sm font-bold text-slate-700 shadow-sm backdrop-blur-sm border border-slate-200/50 hover:bg-white hover:shadow-md transition-all"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Strong CTA */}
        <div className="text-center">
          <div className="group inline-flex items-center gap-3 bg-white/90 backdrop-blur-xl shadow-2xl border border-slate-200 rounded-3xl px-10 py-7 max-w-md mx-auto hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 hover:border-slate-300">
            <span className="text-xl lg:text-2xl font-black text-slate-950">
              Ready to see results like these?
            </span>
            <ArrowRight className="h-6 w-6 text-emerald-600 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
          
          <p className="mt-6 text-slate-500 text-lg max-w-lg mx-auto">
            Trusted by D2C, FinTech, FMCG and regional brands across India
          </p>
        </div>
      </div>
    </section>
  );
}