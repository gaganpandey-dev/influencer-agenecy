"use client";

import {
  MessageCircle,
  Users,
  Globe,
  ArrowUpRight,
  BadgeCheck,
  LineChart,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
};

const staggerWrap = {
  whileInView: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  viewport: { once: true, amount: 0.12 },
};

const features = [
  {
    icon: Users,
    title: "Strong creator network",
    desc: "We connect brands with niche-fit creators across beauty, finance, gaming, tech, lifestyle and regional content segments.",
  },
  {
    icon: Globe,
    title: "Campaigns built for market fit",
    desc: "Every collaboration is planned around brand goals, audience match, platform relevance and practical execution.",
  },
  {
    icon: MessageCircle,
    title: "Fast and clear coordination",
    desc: "From first outreach to approvals and delivery, communication stays simple, timely and action-focused.",
  },
  {
    icon: LineChart,
    title: "Results-led execution",
    desc: "We focus on reach, engagement, response quality and campaign momentum that supports real business growth.",
  },
];

const metrics = [
  { value: "50+", label: "Brand connections" },
  { value: "10+", label: "Content categories" },
  { value: "2x", label: "Faster campaign flow" },
];

const pillars = [
  {
    title: "Strategy-first planning",
    desc: "Clear campaign direction before outreach, so every collaboration starts with a better brief and stronger purpose.",
  },
  {
    title: "Creator-led execution",
    desc: "A structured workflow that keeps creator communication, timelines and approvals clean and manageable.",
  },
  {
    title: "Measured business impact",
    desc: "Campaign decisions shaped around visibility, response quality and outcomes that support brand growth.",
  },
];

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-section-title"
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.05),transparent_24%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[28px] border border-slate-200/90 bg-white/95 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-8 md:p-10 lg:p-14">
          <motion.div {...fadeUp} className="max-w-4xl">
            <div className="inline-flex min-h-11 items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-800">
              <BadgeCheck size={16} className="shrink-0" />
              Trusted by growth-focused brands
            </div>

            <h2
              id="about-section-title"
              className="mt-6 max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-slate-950 sm:text-4xl md:text-5xl lg:text-[3.35rem]"
            >
              Why brands choose Vmerg for creator-led growth
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              We help brands run influencer campaigns with better creator fit,
              smoother execution and clearer business intent. Our approach is
              designed to reduce confusion, improve coordination and deliver
              campaigns that feel professional from planning to results.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
            <motion.div
              {...fadeUp}
              className="rounded-[26px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 ring-1 ring-cyan-200/70">
                <Users size={24} />
              </div>

              <h3 className="mt-6 text-2xl font-bold leading-tight text-slate-950 sm:text-[1.75rem]">
                Built for brands that want dependable execution
              </h3>

              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700">
                We combine creator discovery, campaign coordination and
                communication structure so your collaborations move faster and
                feel easier to manage across every stage.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                  >
                    <p className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs font-medium leading-5 text-slate-600 sm:text-sm">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950/20 active:scale-[0.985]"
                >
                  Start a conversation
                  <ArrowUpRight size={16} />
                </a>

                <p className="text-sm leading-6 text-slate-600">
                  Clear communication, faster coordination and brand-focused
                  campaign planning.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerWrap}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.12 }}
              className="space-y-4"
            >
              {features.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)] sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 ring-1 ring-cyan-200/70 transition-transform duration-200 group-hover:scale-[1.04]">
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-base font-semibold leading-6 text-slate-950 sm:text-lg">
                        {title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-700 sm:text-[15px] sm:leading-7">
                        {desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={staggerWrap}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.12 }}
            className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3"
          >
            {pillars.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors duration-200 hover:bg-white"
              >
                <p className="text-base font-semibold text-slate-950">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}