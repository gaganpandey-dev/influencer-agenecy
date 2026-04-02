"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Fintech App Growth",
    category: "YouTube",
    image: "/creator-1.jpeg",
  },
  {
    title: "D2C Brand Scaling",
    category: "Instagram",
    image: "/creator-2.jpeg",
  },
  {
    title: "SaaS Product Launch",
    category: "UGC",
    image: "/creator-3.jpeg",
  },
  {
    title: "Gaming Campaign",
    category: "Meme",
    image: "/hero.jpeg",
  },
];

export default function WorkPage() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08),transparent_30%)]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <p className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
              CASE STUDIES
            </p>

            <h1 className="mt-6 text-5xl font-black text-slate-900 leading-tight">
              Campaigns that drive real growth
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              See how we help brands scale through influencer marketing and performance-driven campaigns.
            </p>

            {/* FILTER */}
            <div className="mt-8 flex gap-3 flex-wrap">
              {["All", "YouTube", "Instagram", "UGC", "Meme"].map((item, i) => (
                <button
                  key={i}
                  className={`px-5 py-2 rounded-full border ${
                    i === 0
                      ? "bg-cyan-600 text-white"
                      : "bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            className="relative"
          >
            <div className="p-[2px] rounded-[30px] bg-gradient-to-br from-purple-500 via-cyan-400 to-blue-500 shadow-2xl">
              <div className="rounded-[28px] overflow-hidden bg-white">
                <Image
                  src="/hero.jpeg"
                  alt="campaign"
                  width={700}
                  height={450}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white px-4 py-2 rounded-xl shadow border text-sm font-semibold">
              🚀 High ROI Campaign
            </div>
          </motion.div>
        </div>

        {/* 🔥 CASE STUDY GRID */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="group rounded-3xl overflow-hidden border bg-white shadow-sm hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition"
                />

                <span className="absolute top-3 left-3 bg-white px-3 py-1 text-xs rounded-full shadow">
                  {item.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 mt-2">
                  High-performing campaign delivering strong ROI through creators.
                </p>

                <button className="mt-4 text-cyan-600 font-semibold">
                  View Case →
                </button>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}