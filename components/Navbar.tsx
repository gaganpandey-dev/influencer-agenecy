"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Brands", href: "/brands" },
    { name: "Creators", href: "/creators" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    navItems.forEach((item) => {
      router.prefetch(item.href);
    });
  }, [router]);

  const isActive = (href: string) => {
    if (activeSection) return activeSection === href;
    return pathname === href;
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav
        className={`border-b backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-slate-200/80 bg-white/95 shadow-sm"
            : "border-transparent bg-white/80"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-black tracking-tight transition-all hover:scale-105"
              onClick={() => setMobileMenu(false)}
            >
              <span className="bg-gradient-to-r from-cyan-600 to-teal-700 bg-clip-text text-transparent">
                Vmerg
              </span>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className={`group relative py-2 text-sm font-semibold transition-all ${
                    isActive(item.href)
                      ? "text-cyan-700"
                      : "text-slate-900 hover:text-cyan-600"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-cyan-600 transition-all duration-300 ${
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}

              <Link
                href="/contact"
                className="ml-4 rounded-2xl border border-slate-900/20 bg-slate-950 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-black hover:shadow-lg"
              >
                Get Strategy
              </Link>
            </div>

            <button
              type="button"
              className="rounded-lg p-2 transition-colors hover:bg-slate-100 md:hidden"
              onClick={() => setMobileMenu((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenu && (
        <div className="fixed inset-0 top-[88px] z-40 border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 pb-20 pt-8">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className={`block w-full rounded-xl px-6 py-4 text-left font-semibold transition-all ${
                    isActive(item.href)
                      ? "border border-cyan-200 bg-gradient-to-r from-cyan-50 to-teal-50 text-cyan-700 shadow-lg"
                      : "text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <Link
                href="/contact"
                onClick={() => setMobileMenu(false)}
                className="block w-full rounded-2xl bg-slate-950 px-8 py-5 text-center text-lg font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-black hover:shadow-xl"
              >
                Get Strategy →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}