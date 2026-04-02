"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const heroWrap = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const floatCard = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

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
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Brand Campaign Inquiry - VMerg Media
Name: ${form.name}
Email: ${form.email}
Brand: ${form.brand}
Budget: ${form.budget}
Ready to launch creator campaign!`
    );

    window.open(`https://wa.me/918660783740?text=${text}`, "_blank");
  };

  const stats = [
    { title: "Avg Campaign ROI", value: "3.8x", subtitle: "vs industry 2.1x", icon: "📊" },
    { title: "Trusted Brands", value: "500+", subtitle: "Live campaigns", icon: "🏢" },
    { title: "Influencers", value: "10K+", subtitle: "Vetted creators", icon: "👥" },
  ];

  const topInfluencers = [
    "Sushmita Sen",
    "Garima Chaurasia",
    "Rachana Ranade",
    "Neha Nagar",
    "iam.savithri",
    "Yashika Crypto",
    "financebyankita",
    "ca.bhagyashreethakkar",
    "navyanoor_astrotarot",
  ];

  const trustedBrands = [
    "CoinSwitch",
    "Kotak Mahindra",
    "Bybit",
    "OZiva",
    "Fast&Up",
    "Masai School",
    "Rapido",
    "Uniqlo",
  ];

  return (
    <>
      <Navbar activeSection="/brands" />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50/80 to-emerald-50/60">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-emerald-200/40 to-teal-200/30 blur-3xl"
            animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-gradient-to-r from-orange-200/40 to-amber-200/30 blur-3xl"
            animate={{ y: [0, 30, 0], scale: [1, 1.03, 1] }}
            transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
          />
        </div>

        <section className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-28 md:pb-32 md:pt-36 lg:pb-40">
          <motion.div
            variants={heroWrap}
            initial="hidden"
            animate="show"
            className="grid items-start gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20"
          >
            <motion.div className="space-y-10 lg:max-w-2xl">
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-3 rounded-3xl border-2 border-emerald-200/70 bg-gradient-to-r from-emerald-50/90 to-white/95 px-8 py-4 text-sm font-black uppercase tracking-[0.3em] text-slate-800 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:bg-emerald-50/80"
              >
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 shadow-lg" />
                Brands Only
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="text-5xl font-black leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-[8rem]"
              >
                <motion.span
                  className="block bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                >
                  Scale Your
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-emerald-800 via-emerald-900 to-slate-900 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                >
                  Brand 3.8X
                </motion.span>
                <motion.span className="inline-block bg-gradient-to-r from-orange-700 via-amber-800 to-emerald-900 bg-clip-text text-transparent">
                  Faster
                </motion.span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="max-w-xl text-xl leading-8 text-slate-700"
              >
                10,000+ vetted influencers across beauty, finance, crypto and lifestyle.
                <strong className="font-semibold text-slate-900"> Trusted by 500+ brands</strong> with 3.8x average ROI.
              </motion.p>

              <motion.div variants={fadeUp} className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.title}
                    variants={floatCard}
                    className="group relative rounded-3xl border border-slate-200/50 bg-white/90 p-8 shadow-xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-emerald-50/80 to-teal-50/80 shadow-xl transition-all duration-500 group-hover:scale-110">
                      <span className="text-3xl transition-transform duration-500 group-hover:scale-125">
                        {stat.icon}
                      </span>
                    </div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-slate-600 transition-colors group-hover:text-emerald-600">
                      {stat.title}
                    </p>
                    <p className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-800 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-600">
                      {stat.subtitle}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={floatCard}>
              <div className="relative">
                <motion.div
                  className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-emerald-50/95 via-white/90 to-slate-50/80 shadow-2xl backdrop-blur-3xl"
                  animate={{ scale: [1, 1.02, 1], rotate: [-0.5, 0.5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                <motion.form
                  onSubmit={handleSubmit}
                  className="relative rounded-[2rem] border-2 border-white/60 bg-gradient-to-br from-white/95 to-slate-50/95 p-8 shadow-2xl backdrop-blur-3xl transition-all duration-700 hover:-translate-y-2 md:p-12"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <div className="mb-10 text-center">
                    <motion.p
                      className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-6 py-2 text-sm font-black uppercase tracking-widest text-emerald-700"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      Launch Campaign
                    </motion.p>
                    <motion.h3
                      className="mb-4 bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-800 bg-clip-text text-4xl font-black text-transparent md:text-5xl"
                      whileHover={{ scale: 1.02 }}
                    >
                      Your Brand Details
                    </motion.h3>
                    <motion.p
                      className="mx-auto max-w-md text-lg leading-relaxed text-slate-700"
                      whileHover={{ scale: 1.01 }}
                    >
                      Get matched with perfect creators in 24hrs
                    </motion.p>
                  </div>

                  <div className="space-y-6">
                    <motion.input
                      name="name"
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-3xl border-2 border-slate-200/70 bg-white/95 px-6 py-5 text-lg font-semibold text-slate-900 shadow-lg backdrop-blur-xl transition-all duration-300 placeholder:text-slate-500 hover:border-emerald-300/80 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-200/60"
                      whileFocus={{ scale: 1.02, y: -2 }}
                      required
                    />
                    <motion.input
                      name="email"
                      type="email"
                      placeholder="Work Email *"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-3xl border-2 border-slate-200/70 bg-white/95 px-6 py-5 text-lg font-semibold text-slate-900 shadow-lg backdrop-blur-xl transition-all duration-300 placeholder:text-slate-500 hover:border-emerald-300/80 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-200/60"
                      whileFocus={{ scale: 1.02, y: -2 }}
                      required
                    />
                    <motion.input
                      name="brand"
                      placeholder="Brand Name *"
                      value={form.brand}
                      onChange={handleChange}
                      className="w-full rounded-3xl border-2 border-slate-200/70 bg-white/95 px-6 py-5 text-lg font-semibold text-slate-900 shadow-lg backdrop-blur-xl transition-all duration-300 placeholder:text-slate-500 hover:border-emerald-300/80 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-200/60"
                      whileFocus={{ scale: 1.02, y: -2 }}
                      required
                    />
                    <motion.select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-3xl border-2 border-slate-200/70 bg-white/95 px-6 py-5 text-lg font-semibold text-slate-900 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-emerald-300/80 focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-200/60"
                      whileFocus={{ scale: 1.02, y: -2 }}
                      required
                    >
                      <option value="" disabled>
                        Select Budget Range
                      </option>
                      <option value="₹50K – ₹1L">₹50K – ₹1L</option>
                      <option value="₹1L – ₹5L">₹1L – ₹5L</option>
                      <option value="₹5L – ₹10L">₹5L – ₹10L</option>
                      <option value="₹10L+">₹10L+</option>
                    </motion.select>

                    <motion.button
                      type="submit"
                      className="group relative w-full overflow-hidden rounded-[2rem] bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 px-8 py-7 text-xl font-black text-white shadow-2xl transition-all duration-500 hover:shadow-2xl"
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.4)",
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3 font-black tracking-wide">
                        Continue on WhatsApp
                      </span>
                    </motion.button>
                  </div>
                </motion.form>
              </div>
            </motion.div>
          </motion.div>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-7xl px-4 py-24"
          >
            <h2 className="mb-16 bg-gradient-to-r from-slate-900 to-emerald-800 bg-clip-text text-center text-4xl font-black text-transparent md:text-5xl">
              Top Influencers VMerg
            </h2>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {topInfluencers.map((influencer) => (
                <motion.div
                  key={influencer}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/50 bg-white/80 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={`/images/brands/${influencer.toLowerCase().replace(/ /g, "-")}.jpg`}
                    alt={influencer}
                    className="mb-4 h-32 w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <h4 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                    {influencer}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-7xl px-4 py-24"
          >
            <div className="mb-20 text-center">
              <h2 className="mb-4 bg-gradient-to-r from-emerald-800 via-slate-900 to-orange-700 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
                500+ Trusted Brands
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-slate-600">
                VMerg Media has powered campaigns for leading brands.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
              {trustedBrands.map((brand) => (
                <motion.div
                  key={brand}
                  className="group rounded-3xl border border-slate-200/50 bg-white/70 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={`/images/brands/${brand.toLowerCase().replace(/ /g, "-")}.jpg`}
                    alt={brand}
                    className="mx-auto mb-6 h-32 w-32 rounded-2xl object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <h4 className="text-center text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                    {brand}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </section>
      </main>
    </>
  );
}