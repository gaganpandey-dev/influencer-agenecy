"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  LineChart,
  Megaphone,
  ShieldCheck,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
};

const benefits = [
  {
    icon: Building2,
    title: "Audience-fit creator matching",
    desc: "We identify creators based on category relevance, audience fit, content quality and campaign suitability.",
  },
  {
    icon: LineChart,
    title: "Growth-focused campaign planning",
    desc: "Every activation is designed around awareness, engagement, leads, conversions and practical rollout goals.",
  },
  {
    icon: Megaphone,
    title: "End-to-end execution support",
    desc: "From briefing and outreach to approvals, coordination and delivery, we keep the workflow clear and efficient.",
  },
];

const steps = [
  "Share your campaign goal",
  "Get matched with suitable creators",
  "Approve direction and content plan",
  "Launch, track and optimize",
];

const trustPoints = [
  "Structured influencer planning",
  "Faster communication and coordination",
  "Better campaign clarity for brand teams",
];

const budgetOptions = ["₹50K - ₹1L", "₹1L - ₹5L", "₹5L+"];

export default function BrandsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    budget: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submitted successfully");
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.05),transparent_22%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex min-h-11 items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-800">
            <BadgeCheck size={16} />
            Campaigns designed for real brand outcomes
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.03em] text-slate-950 sm:text-5xl md:text-6xl">
            Scale your brand with the right influencer partnerships
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            We help brands launch creator-led campaigns with stronger audience
            fit, smoother execution and clearer performance direction.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#brand-form"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-800 active:scale-[0.985]"
            >
              Start your campaign
              <ArrowRight size={16} />
            </a>

            <p className="text-sm leading-6 text-slate-600">
              Clean planning, creator matching and campaign coordination.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              {...fadeUp}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 ring-1 ring-cyan-200/70">
                <Icon size={20} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <motion.div
            {...fadeUp}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
              How we work with brands
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700">
              Our process is built to reduce delays, improve communication and
              help your team move from idea to campaign launch with more clarity.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-950">
                      {step}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      A structured workflow that keeps campaign execution more
                      predictable and easier to manage.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
              <ShieldCheck size={16} />
              Trusted workflow for brand campaigns
            </div>

            <h2 className="mt-5 text-2xl font-bold text-slate-950 sm:text-3xl">
              Why brands work with Vmerg
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-700">
              We focus on quality execution, practical planning and better
              coordination between brand teams and creators.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <p className="text-sm font-semibold leading-6 text-slate-900">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          id="brand-form"
          {...fadeUp}
          className="mx-auto mt-16 max-w-2xl rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-8 md:p-10"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Start your campaign
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-700">
              Share a few details and we will understand your brand requirement
              before planning the right creator approach.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className="min-h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@company.com"
                value={form.email}
                onChange={handleChange}
                className="min-h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            <div>
              <label
                htmlFor="brand"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Brand name
              </label>
              <input
                id="brand"
                name="brand"
                placeholder="Enter your brand or company name"
                value={form.brand}
                onChange={handleChange}
                className="min-h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            <div>
              <label
                htmlFor="budget"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Campaign budget
              </label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="min-h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              >
                <option value="">Select budget range</option>
                {budgetOptions.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-800 active:scale-[0.99]"
            >
              Submit brand requirement
              <ArrowRight size={16} />
            </button>

            <p className="text-center text-sm leading-6 text-slate-500">
              We use your details only to understand your campaign requirement
              and contact you about the next steps.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}