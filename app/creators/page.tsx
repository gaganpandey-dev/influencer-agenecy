"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function CreatorsPage() {
  const [form, setForm] = useState({
    name: "",
    instagram: "",
    niche: "",
    followers: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Creator Application - VMerg Media
Name: ${form.name}
Instagram: ${form.instagram}
Niche: ${form.niche}
Followers: ${form.followers}
Ready to collaborate with brands!`
    );

    window.open(`https://wa.me/918660783740?text=${text}`, "_blank");
  };

  const perks = [
    "₹50K+ monthly payouts",
    "Weekly payments",
    "500+ trusted brands",
    "Content creation support",
    "Performance analytics",
    "24hr creator support",
  ];

  const niches = [
    "Beauty",
    "Fashion",
    "Finance",
    "Crypto",
    "Fitness",
    "Lifestyle",
    "Tech",
    "Food",
  ];

  return (
    <>
      <Navbar activeSection="/creators" />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50/80 to-fuchsia-50/60">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-purple-200/40 to-pink-200/30 blur-3xl"
            animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-gradient-to-r from-fuchsia-200/40 to-pink-200/30 blur-3xl"
            animate={{ y: [0, 30, 0], scale: [1, 1.03, 1] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <section className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-28 md:pb-32 md:pt-36 lg:pb-40">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid items-start gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20"
          >
            <motion.div variants={itemVariants} className="space-y-10 lg:max-w-2xl">
              <motion.span
                variants={itemVariants}
                className="inline-flex items-center gap-3 rounded-3xl border-2 border-purple-200/70 bg-gradient-to-r from-purple-50/90 to-white/95 px-8 py-4 text-sm font-black uppercase tracking-[0.3em] text-slate-800 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:bg-purple-50/80"
              >
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg" />
                For Creators
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="text-5xl font-black leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-[8rem]"
              >
                <motion.span
                  className="block bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                >
                  Join
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-purple-800 via-pink-900 to-slate-900 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                >
                  10K+
                </motion.span>
                <motion.span className="inline-block bg-gradient-to-r from-fuchsia-700 via-pink-800 to-purple-900 bg-clip-text text-transparent">
                  Creators
                </motion.span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="max-w-xl text-xl leading-8 text-slate-700 backdrop-blur-sm"
              >
                Get paid by 500+ trusted brands. Weekly payouts. Content support.
                <strong className="font-semibold text-slate-900">
                  {" "}₹50K+ monthly earnings potential.
                </strong>
              </motion.p>

              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                {perks.map((perk) => (
                  <motion.div
                    key={perk}
                    className="group flex items-center gap-3 rounded-2xl border border-purple-200/50 bg-white/90 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-purple-50/80 hover:shadow-2xl hover:shadow-purple-500/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg transition-transform duration-300 group-hover:scale-125" />
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-purple-700">
                      {perk}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="relative">
                <motion.div
                  className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-purple-50/95 via-white/90 to-pink-50/80 shadow-2xl backdrop-blur-3xl"
                  animate={{ scale: [1, 1.02, 1], rotate: [-0.5, 0.5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
                <motion.form
                  onSubmit={handleSubmit}
                  className="relative rounded-[2rem] border-2 border-white/60 bg-gradient-to-br from-white/95 to-purple-50/95 p-8 shadow-2xl backdrop-blur-3xl transition-all duration-700 hover:-translate-y-2 md:p-12"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <div className="mb-10 text-center">
                    <motion.p
                      className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100/80 px-6 py-2 text-sm font-black uppercase tracking-widest text-purple-700"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="h-2 w-2 rounded-full bg-purple-500" />
                      Apply Now
                    </motion.p>

                    <motion.h3
                      className="mb-4 bg-gradient-to-r from-slate-950 via-slate-900 to-purple-800 bg-clip-text text-4xl font-black text-transparent md:text-5xl"
                      whileHover={{ scale: 1.02 }}
                    >
                      Join VMerg Creators
                    </motion.h3>

                    <motion.p
                      className="mx-auto max-w-md text-lg leading-relaxed text-slate-700"
                      whileHover={{ scale: 1.01 }}
                    >
                      3 minute application. Get brand deals in 24hrs.
                    </motion.p>
                  </div>

                  <div className="space-y-6">
                    <motion.input
                      name="name"
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-3xl border-2 border-slate-200/70 bg-white/95 px-6 py-5 text-lg font-semibold text-slate-900 shadow-lg backdrop-blur-xl transition-all duration-300 placeholder:text-slate-500 hover:border-purple-300/80 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-200/60"
                      whileFocus={{ scale: 1.02, y: -2 }}
                      required
                    />

                    <motion.input
                      name="instagram"
                      placeholder="@instagram handle *"
                      value={form.instagram}
                      onChange={handleChange}
                      className="w-full rounded-3xl border-2 border-slate-200/70 bg-white/95 px-6 py-5 text-lg font-semibold text-slate-900 shadow-lg backdrop-blur-xl transition-all duration-300 placeholder:text-slate-500 hover:border-purple-300/80 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-200/60"
                      whileFocus={{ scale: 1.02, y: -2 }}
                      required
                    />

                    <motion.select
                      name="niche"
                      value={form.niche}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-3xl border-2 border-slate-200/70 bg-white/95 px-6 py-5 text-lg font-semibold text-slate-900 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-purple-300/80 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-200/60"
                      whileFocus={{ scale: 1.02, y: -2 }}
                      required
                    >
                      <option value="" disabled>
                        Select Your Niche
                      </option>
                      {niches.map((niche) => (
                        <option key={niche} value={niche}>
                          {niche}
                        </option>
                      ))}
                    </motion.select>

                    <motion.input
                      name="followers"
                      placeholder="Followers (e.g. 10K, 50K)"
                      value={form.followers}
                      onChange={handleChange}
                      className="w-full rounded-3xl border-2 border-slate-200/70 bg-white/95 px-6 py-5 text-lg font-semibold text-slate-900 shadow-lg backdrop-blur-xl transition-all duration-300 placeholder:text-slate-500 hover:border-purple-300/80 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-200/60"
                      whileFocus={{ scale: 1.02, y: -2 }}
                      required
                    />

                    <motion.button
                      type="submit"
                      className="group relative w-full overflow-hidden rounded-[2rem] bg-gradient-to-r from-purple-600 via-pink-600 to-fuchsia-600 px-8 py-7 text-xl font-black text-white shadow-2xl transition-all duration-500 hover:shadow-2xl"
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.4)",
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3 font-black tracking-wide">
                        Join Creators Now
                      </span>
                    </motion.button>
                  </div>
                </motion.form>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}