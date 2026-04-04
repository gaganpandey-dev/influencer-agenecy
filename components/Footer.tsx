"use client";

import Image from "next/image";
import {
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-slate-200 overflow-hidden">

      {/* 🔥 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: "url('/Footer-1.jpeg')",
        }}
      />

      {/* 🔥 LIGHT OVERLAY */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/20 via-white/10 to-white/30" />

      {/* 🔥 GLOW */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.15),transparent_40%)]" />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="py-14 sm:py-16 lg:py-20">

          {/* 🔥 TOP */}
          <div className="grid gap-10 lg:grid-cols-2">

            {/* LEFT */}
            <div className="space-y-6 text-center lg:text-left">

              {/* LOGO */}
              <div className="flex justify-center lg:justify-start">
                <div className="bg-white/60 backdrop-blur-md px-3 py-1 rounded-lg shadow-sm">
                  <Image
                    src="/vmerge.jpeg"
                    alt="Vmerg"
                    width={110}
                    height={40}
                  />
                </div>
              </div>

              <p className="text-slate-700 max-w-md mx-auto lg:mx-0">
                Scale your brand with performance-driven influencer campaigns.
                We handle creator discovery, execution and optimization.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="tel:+918660783740"
                  className="flex items-center justify-center gap-2 bg-slate-950 text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition"
                >
                  <Phone size={16} />
                  Contact Sales
                </a>

                <a
                  href="https://wa.me/918660783740"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-3 rounded-xl border hover:bg-emerald-100 transition"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center lg:text-left">

              {/* LINKS */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    { name: "About", link: "/about" },
                    { name: "Services", link: "/services" },
                    { name: "Work", link: "/work" },
                    { name: "Brands", link: "/brands" },
                    { name: "Creators", link: "/creators" },
                  ].map((item) => (
                    <li key={item.name}>
                      <a href={item.link} className="hover:text-indigo-600 transition">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTACT */}
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-center lg:justify-start gap-2">
                    <Phone size={16} />
                    <a href="tel:+918660783740">+91 86607 83740</a>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start gap-2">
                    <Mail size={16} />
                    <a href="mailto:vmergmedia@gmail.com">
                      vmergmedia@gmail.com
                    </a>
                  </li>
                  <li>📍 Vmerg Media Pvt Ltd, Bengaluru, India</li>
                </ul>
              </div>

            </div>
          </div>

          {/* 🔥 MID */}
          <div className="mt-14 pt-10 border-t grid gap-10 md:grid-cols-3 text-center md:text-left">

            {/* CATEGORIES */}
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs">
                {["Beauty", "Tech", "Finance", "Gaming", "Lifestyle"].map((c) => (
                  <span key={c} className="px-3 py-1 border rounded-full hover:bg-indigo-50 transition">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>

              <div className="flex justify-center md:justify-start gap-4">
                {[
                  {
                    href: "https://www.instagram.com/vmerg_/",
                    icon: Instagram,
                    color: "from-pink-500 via-red-500 to-yellow-500",
                  },
                  {
                    href: "https://x.com/vmerg_",
                    icon: Twitter,
                    color: "from-slate-800 to-black",
                  },
                  {
                    href: "https://www.linkedin.com/company/vmerg/",
                    icon: Linkedin,
                    color: "from-blue-500 to-blue-700",
                  },
                  {
                    href: "#",
                    icon: Facebook,
                    color: "from-blue-400 to-blue-600",
                  },
                ].map(({ href, icon: Icon, color }, i) => (
                  <a key={i} href={href} target="_blank" className="group">
                    <div className={`w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                      <Icon size={18} />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA CARD */}
            <div className="bg-emerald-50/80 backdrop-blur-md p-5 rounded-xl border">
              <h4 className="font-semibold mb-2">Quick Campaign Setup</h4>
              <p className="text-sm mb-3">
                Start your campaign planning instantly.
              </p>
              <a
                href="https://wa.me/918660783740"
                target="_blank"
                className="text-emerald-700 font-semibold"
              >
                Start Now →
              </a>
            </div>

          </div>

          {/* 🔥 BOTTOM */}
          <div className="mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between text-sm text-slate-600 gap-4">
            <p>© 2026 Vmerg Media Pvt Ltd</p>
            <div className="flex gap-4">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}