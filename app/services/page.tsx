"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";

type Service = {
  name: string;
  description: string;
  stats: string;
  href: string;
  features: string[];
};

const SERVICES: Service[] = [
  {
    name: "Campaign Strategy & Planning",
    description:
      "We design data-driven influencer marketing strategies tailored to your brand goals, audience segments and campaign objectives.",
    stats: "Strategy First",
    href: "#strategy",
    features: ["Audience research", "Creator mix planning", "Performance forecasting"],
  },
  {
    name: "Creator Discovery & Matchmaking",
    description:
      "Get matched with high-performing influencers based on audience quality, engagement rate and niche relevance.",
    stats: "Perfect Fit",
    href: "#matchmaking",
    features: ["AI-powered shortlisting", "Manual vetting", "Performance history"],
  },
  {
    name: "End-to-End Campaign Execution",
    description:
      "From outreach to content delivery, we manage the complete campaign lifecycle ensuring smooth execution.",
    stats: "Full Managed",
    href: "#execution",
    features: ["Creator outreach", "Content approvals", "Launch coordination"],
  },
  {
    name: "Content & Creative Direction",
    description:
      "We guide creators with content frameworks, storytelling and brand alignment to maximize impact.",
    stats: "Creative Driven",
    href: "#content",
    features: ["Storytelling frameworks", "Brand guidelines", "Content optimization"],
  },
  {
    name: "Performance Tracking & Analytics",
    description:
      "Track reach, engagement, conversions and ROI with detailed reporting and campaign insights.",
    stats: "Data Backed",
    href: "#analytics",
    features: ["Real-time dashboards", "Conversion tracking", "ROI reporting"],
  },
  {
    name: "Multi-Platform Campaigns",
    description:
      "Execute campaigns across Instagram, YouTube, Shorts and emerging platforms for maximum reach.",
    stats: "All Platforms",
    href: "#platforms",
    features: ["Cross-platform strategy", "Format optimization", "Platform expertise"],
  },
];

const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function ServicesPage() {
  return (
    <>
      <Navbar activeSection="/services" />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        {/* Hero */}
        <section className="pt-28 pb-20 md:pt-32 md:pb-24 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl text-center mx-auto">
              <span className="inline-flex rounded-full bg-cyan-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Our Services
              </span>

              <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight tracking-[-0.03em] text-slate-900">
                Complete Influencer Marketing
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                From strategy to execution to measurement, we handle every aspect of influencer marketing so you can focus on growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service, i) => (
                <button
                  key={service.name}
                  type="button"
                  onClick={() => scrollToSection(service.href)}
                  className="group h-full flex flex-col rounded-3xl border border-slate-100/50 bg-white p-8 shadow-sm hover:shadow-2xl hover:border-cyan-200 hover:-translate-y-2 transition-all duration-300 text-left"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
                      {service.stats}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold leading-tight mb-4 text-slate-900">
                    {service.name}
                  </h3>

                  <p className="text-base leading-7 mb-8 flex-1 text-slate-700">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-600 group-hover:translate-x-1 transition-all duration-300">
                    Explore Service
                    <span aria-hidden="true">→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Detail Sections */}
        <section className="py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {SERVICES.map((service, i) => (
              <section
                key={service.name}
                id={service.href.replace("#", "")}
                className="scroll-mt-24 rounded-3xl border border-slate-200/50 bg-white p-8 md:p-12 mb-12 last:mb-0 shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid lg:grid-cols-[140px_1fr] gap-8 items-start">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-cyan-600/10 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl font-black text-cyan-600">
                      0{i + 1}
                    </span>
                  </div>

                  <div>
                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
                      {service.stats}
                    </span>

                    <h2 className="mt-6 text-2xl md:text-3xl font-black leading-tight text-slate-900">
                      {service.name}
                    </h2>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-10 grid sm:grid-cols-3 gap-4">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="rounded-xl border border-slate-200/50 bg-slate-50 px-4 py-3 text-sm text-slate-700 hover:bg-cyan-50 hover:border-cyan-200 transition-all duration-200"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center rounded-3xl bg-gradient-to-r from-slate-50 to-slate-100 p-12 md:p-16 border border-slate-200 shadow-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
                Ready to launch your next campaign?
              </h2>

              <p className="mx-auto max-w-2xl text-xl leading-8 text-slate-600 mb-12">
                Tell us your goals and target audience. We'll connect your brand with the right creators across the right categories.
              </p>

              <Link
                href="/#lead-form"
                className="inline-flex items-center gap-3 rounded-3xl bg-gradient-to-r from-cyan-500 to-teal-600 px-10 py-6 text-xl font-bold text-white shadow-2xl hover:-translate-y-1 hover:from-cyan-600 hover:to-teal-700 transition-all duration-300"
              >
                Start Your Campaign
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}