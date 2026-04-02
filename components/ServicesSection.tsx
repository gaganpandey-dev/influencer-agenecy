"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Influencer Discovery",
    desc: "Access 50K+ verified creators across YouTube, Instagram, and regional platforms with smart filtering by audience, niche, and engagement.",
    note: "100% verified profiles with reliable contact details for faster outreach.",
  },
  {
    id: "02",
    title: "Campaign Strategy",
    desc: "Plan creator mix, audience targeting, content angles, and rollout timelines with a data-led campaign strategy built for your goals.",
    note: "Delivered as a clear campaign roadmap your team can execute fast.",
  },
  {
    id: "03",
    title: "Full Execution",
    desc: "From outreach and negotiation to approvals and live launch, we manage the complete workflow with one dedicated team.",
    note: "Single point of contact across the entire campaign lifecycle.",
  },
  {
    id: "04",
    title: "Regional Campaigns",
    desc: "Run localized campaigns across Hindi, Tamil, Telugu, Bengali, and other regional markets using native creator networks.",
    note: "Local language creators help build stronger trust and authentic reach.",
  },
  {
    id: "05",
    title: "24×7 Support",
    desc: "Get quick support on WhatsApp, call, and email with live coordination during campaign execution and reporting.",
    note: "Available across India time zones for faster issue resolution.",
  },
  {
    id: "06",
    title: "Performance Scaling",
    desc: "Track views, clicks, installs, engagement, and ROAS in real time and scale the creator combinations that perform best.",
    note: "Double down on winning creators and proven content patterns.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-cyan-50/30 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-16 h-64 w-64 rounded-full bg-cyan-100/40 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-teal-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center md:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-800 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl lg:text-6xl">
            End-to-end influencer marketing
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            Launch, manage, and scale creator campaigns across YouTube,
            Instagram, and regional platforms with strategy, execution, and
            performance tracking in one flow.
          </p>
        </div>

        {/* Services Grid */}
        <ul className="grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => {
            const isActive = active === index;

            return (
              <li key={service.id} className="h-full">
                <button
                  type="button"
                  onClick={() => setActive(isActive ? null : index)}
                  className={`group relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] border bg-white p-7 text-left transition-all duration-500 md:p-8 ${
                    isActive
                      ? "border-cyan-200 shadow-[0_20px_60px_rgba(6,182,212,0.14)]"
                      : "border-slate-200 shadow-[0_10px_40px_rgba(15,23,42,0.05)] hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]"
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500" />

                  <div className="mb-6 flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                      {service.id}
                    </span>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-300 ${
                        isActive
                          ? "border-cyan-200 bg-cyan-50 text-cyan-700"
                          : "border-slate-200 bg-slate-50 text-slate-500 group-hover:border-cyan-200 group-hover:bg-cyan-50 group-hover:text-cyan-700"
                      }`}
                    >
                      Explore
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="text-2xl font-black leading-tight text-slate-950 transition-colors duration-300 group-hover:text-cyan-700">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {service.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-400 transition-all duration-300 group-hover:text-cyan-700">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    <div
                      className={`grid transition-all duration-500 ${
                        isActive
                          ? "mt-6 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-slate-100 pt-5">
                          <p className="text-sm leading-6 text-slate-500">
                            {service.note}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute right-4 top-4 h-20 w-20 rounded-full bg-cyan-100/0 blur-2xl transition-all duration-500 group-hover:bg-cyan-100/70" />
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="mt-16 text-center md:mt-20">
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl md:p-8">
            <h3 className="text-2xl font-black text-slate-950">
              Need a campaign plan for your brand?
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-slate-600 leading-7">
              Share your category, budget, and goals. Get a focused campaign
              direction with creator recommendations and rollout ideas.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-7 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black"
              >
                Start Your Campaign
              </Link>

              <Link
                href="/brands"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 py-4 text-base font-bold text-slate-800 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
              >
                Explore For Brands
              </Link>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Response within 24 hours for qualified campaign briefs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}