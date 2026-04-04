"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] pt-12 pb-16 bg-white/70 backdrop-blur-sm">

      {/* 🔥 BACKGROUND (ALL DEVICES - CONTROLLED) */}
    <div
  className="absolute inset-0 z-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/hero-b.jpeg')" }}
/>

      {/* 🔥 OVERLAY (SMART GRADIENT) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white via-white/70 to-transparent lg:from-white/90 lg:via-white/60 lg:to-transparent" />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          <motion.div
            {...fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-800"
          >
            <BadgeCheck size={16} />
            Trusted by growth-focused brands
          </motion.div>

          <motion.h1
            {...fadeUp}
            className="mt-6 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-slate-950"
          >
            Turn creator partnerships into measurable brand growth
          </motion.h1>

          <motion.p
            {...fadeUp}
            className="mt-6 text-base sm:text-lg text-slate-700 max-w-xl"
          >
            <span className="font-semibold text-slate-900">VERGE</span> helps brands scale campaigns with better creator fit and stronger results.
          </motion.p>

          <motion.div
            {...fadeUp}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <a
              href="/brands"
              className="bg-slate-950 text-white px-5 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-slate-800"
            >
              Start Campaign <ArrowUpRight size={16} />
            </a>

            <a
              href="/work"
              className="border px-5 py-3 rounded-full hover:bg-slate-50"
            >
              View Work
            </a>
          </motion.div>

        </div>

        {/* 🔥 RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative flex justify-center"
        >

          {/* 🔥 MOBILE STACK (NO OVERLAP) */}
          <div className="flex flex-col gap-4 lg:hidden w-full max-w-[280px]">

            <Image src="/creator-1.jpeg" alt="" width={300} height={200} className="rounded-xl shadow-md object-cover h-[160px]" />
            <Image src="/creator-2.jpeg" alt="" width={300} height={200} className="rounded-xl shadow-md object-cover h-[160px]" />
            <Image src="/creator-3.jpeg" alt="" width={300} height={200} className="rounded-xl shadow-md object-cover h-[180px]" />

          </div>

          {/* 🔥 DESKTOP FLOATING STACK */}
          <div className="hidden lg:block relative w-[420px] h-[320px]">

            <motion.div
              whileHover={{ scale: 1.05, rotate: -4 }}
              className="absolute top-6 left-0 w-[260px] rounded-2xl overflow-hidden shadow-xl border bg-white"
            >
              <Image src="/creator-1.jpeg" alt="" width={300} height={200} className="h-[180px] object-cover" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: 4 }}
              className="absolute top-0 right-0 w-[260px] rounded-2xl overflow-hidden shadow-xl border bg-white"
            >
              <Image src="/creator-2.jpeg" alt="" width={300} height={200} className="h-[180px] object-cover" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.08 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] rounded-3xl overflow-hidden shadow-2xl border bg-white z-10"
            >
              <Image src="/creator-3.jpeg" alt="" width={400} height={250} className="h-[220px] object-cover" />
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}