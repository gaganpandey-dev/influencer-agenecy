"use client";

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
    <footer className="relative mt-24 border-t border-slate-200 bg-gradient-to-b from-white to-slate-100/70">

      {/* GLOW */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="py-16 lg:py-20">

          {/* TOP */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-black text-slate-950">Vmerg</h3>
                <p className="mt-3 text-slate-600 max-w-md">
                  Scale your brand with performance-driven influencer campaigns.
                  We handle creator discovery, campaign execution, and optimization.
                </p>
              </div>

              {/* CTA */}
              <div className="flex gap-4 flex-wrap">
                <a
                  href="tel:+918660783740"
                  className="flex items-center gap-2 bg-slate-950 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition"
                >
                  <Phone size={16} />
                  Contact Sales
                </a>

                <a
                  href="https://wa.me/918660783740"
                  target="_blank"
                  className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-xl border hover:bg-emerald-100 transition"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid sm:grid-cols-2 gap-8">

              {/* LINKS */}
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    { name: "About", link: "/about" },
                    { name: "Services", link: "/services" },
                    { name: "Work", link: "/work" },
                    { name: "Brands", link: "/brands" },
                    { name: "Creators", link: "/creators" },
                  ].map((item) => (
                    <li key={item.name}>
                      <a href={item.link} className="hover:text-cyan-600 transition">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTACT */}
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2 items-center">
                    <Phone size={16} />
                    <a href="tel:+918660783740">+91 86607 83740</a>
                  </li>
                  <li className="flex gap-2 items-center">
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

          {/* MID */}
          <div className="mt-16 pt-10 border-t grid md:grid-cols-3 gap-10">

            {/* CATEGORIES */}
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Beauty", "Tech", "Finance", "Gaming", "Lifestyle"].map((c) => (
                  <span key={c} className="px-3 py-1 border rounded-full hover:bg-cyan-50 transition">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* 🔥 SOCIAL PREMIUM */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>

              <div className="flex gap-4">

                {[
                  {
                    href: "https://www.instagram.com/vmerg_/",
                    icon: Instagram,
                    color: "from-pink-500 via-red-500 to-yellow-500",
                    label: "Instagram",
                  },
                  {
                    href: "https://x.com/vmerg_",
                    icon: Twitter,
                    color: "from-slate-800 to-black",
                    label: "X",
                  },
                  {
                    href: "https://www.linkedin.com/company/vmerg/",
                    icon: Linkedin,
                    color: "from-blue-500 to-blue-700",
                    label: "LinkedIn",
                  },
                  {
                    href: "#",
                    icon: Facebook,
                    color: "from-blue-400 to-blue-600",
                    label: "Facebook",
                  },
                ].map(({ href, icon: Icon, color, label }, i) => (

                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >

                    {/* ICON */}
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                    >
                      <Icon size={18} />
                    </div>

                    {/* TOOLTIP */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
                      {label}
                    </span>

                  </a>
                ))}

              </div>
            </div>

            {/* CTA */}
            <div className="bg-emerald-50 p-5 rounded-xl border">
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

          {/* BOTTOM */}
          <div className="mt-10 pt-6 border-t flex flex-col md:flex-row justify-between text-sm text-slate-500 gap-4">
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