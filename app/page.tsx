"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import WorkGallery from "@/components/WorkGallery";
import AboutSection from "@/components/AboutSection";
import BrandsSection from "@/components/BrandsSection";
import Footer from "@/components/Footer";

const ContactSection = () => (
  <section
    id="contact"
    className="scroll-mt-[88px] bg-gradient-to-b from-slate-950 to-slate-900 py-24 text-white"
  >
    <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
      <h2 className="mb-6 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
        Ready to launch your campaign?
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-xl text-slate-300">
        Share your goals and budget. Get a custom influencer strategy within 24 hours.
      </p>

      <div className="mx-auto max-w-2xl rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl lg:p-12">
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-2xl border border-white/30 bg-white/20 px-6 py-4 text-white placeholder-slate-300 outline-none transition-all focus:border-cyan-400"
          />
          <input
            type="text"
            placeholder="Campaign budget or goals"
            className="w-full rounded-2xl border border-white/30 bg-white/20 px-6 py-4 text-white placeholder-slate-300 outline-none transition-all focus:border-cyan-400"
          />
          <button
            type="button"
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-600 px-8 py-5 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:from-cyan-600 hover:to-teal-700"
          >
            Get Your Strategy →
          </button>
        </div>
      </div>
    </div>
  </section>
);

const SECTIONS = [
  "home",
  "services",
  "trust",
  "work",
  "about",
  "brands",
  "contact",
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollY = window.scrollY + 120;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sectionId = SECTIONS[i];
        const element = document.getElementById(sectionId);

        if (element && element.offsetTop <= scrollY) {
          setActiveSection(sectionId);
          return;
        }
      }

      setActiveSection("home");
    };

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white antialiased">
     

      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <WorkGallery />
      <AboutSection />
      <BrandsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
