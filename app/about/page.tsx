"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brand: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Contact Inquiry
Name: ${form.name}
Email: ${form.email}
Brand: ${form.brand}
Message: ${form.message}`
    );

    window.open(`https://wa.me/918660783740?text=${text}`, "_blank");
  };

  // 🔥 UPDATED PROFESSIONAL CONTACT INFO
  const contactItems = [
    {
      title: "Email",
      value: "vmergmedia@gmail.com",
      desc: "For brand partnerships, campaign inquiries, and collaborations",
    },
    {
      title: "Phone / WhatsApp",
      value: "+91 86607 83740",
      desc: "Direct communication for faster campaign coordination and onboarding",
    },
    {
      title: "Head Office",
      value: "Gurugram, India",
      desc: "Serving brands across India and global markets with remote execution",
    },
  ];

  return (
    <>
      <Navbar activeSection="/contact" />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-slate-50 to-emerald-50/80">

        {/* BACKGROUND GLOW */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute left-[-6rem] top-20 h-72 w-72 rounded-full bg-emerald-200/25 blur-3xl animate-pulse" />
          <div className="absolute right-[-4rem] top-40 h-80 w-80 rounded-full bg-amber-200/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-teal-100/20 blur-3xl animate-pulse" />
        </motion.div>

        <section className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-28 md:pb-28 md:pt-32">

          {/* 🔥 HERO */}
          <div className="mb-14 max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex rounded-2xl border border-emerald-300/40 bg-white/70 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-700 shadow-sm backdrop-blur-md"
            >
              Contact us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-7xl"
            >
              Scale your brand with
              <span className="block bg-gradient-to-r from-emerald-700 via-teal-700 to-slate-900 bg-clip-text text-transparent">
                high-performing creator campaigns
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl"
            >
              Tell us about your campaign goals, target audience, and budget.
              We’ll design a tailored influencer strategy to maximize reach,
              engagement, and ROI.
            </motion.p>
          </div>

          {/* 🔥 GRID */}
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">

            {/* LEFT CONTACT INFO */}
            <div className="space-y-6">
              {contactItems.map((contact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="group rounded-3xl border border-slate-100/50 bg-white/80 p-8 shadow-lg backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition"
                >
                  <h3 className="mb-3 text-2xl font-black text-slate-900">
                    {contact.title}
                  </h3>
                  <p className="mb-2 text-xl font-extrabold text-emerald-700 break-words">
                    {contact.value}
                  </p>
                  <p className="text-base text-slate-600">
                    {contact.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* 🔥 FORM */}
            <motion.div
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              className="rounded-3xl border border-slate-100/50 bg-white/80 p-8 shadow-xl backdrop-blur-xl md:p-12"
            >
              <h3 className="mb-4 text-3xl font-black text-slate-900 md:text-4xl">
                Start Your Campaign
              </h3>

              <p className="mb-8 text-lg text-slate-600">
                Submit your details and continue directly on WhatsApp with a pre-filled campaign brief for faster onboarding.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border px-5 py-4 text-lg"
                  required
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border px-5 py-4 text-lg"
                  required
                />

                <input
                  name="brand"
                  placeholder="Brand / Company *"
                  value={form.brand}
                  onChange={handleChange}
                  className="w-full rounded-2xl border px-5 py-4 text-lg"
                  required
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Campaign goals, budget, timeline..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-2xl border px-5 py-4 text-lg"
                  required
                />

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-5 text-lg font-bold text-white hover:scale-[1.02] transition"
                >
                  Start Campaign Discussion →
                </button>
              </form>
            </motion.div>

          </div>
        </section>
      </main>
    </>
  );
}