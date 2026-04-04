"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* 🔥 LOGO */}
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setMobileMenu(false)}
            >
              <Image
                src="/vmerge.jpeg"   // 👈 ensure this file exists in /public
                alt="Vmerg"
                width={110}
                height={40}
                className="object-contain"
                priority
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className={`group relative py-2 text-sm font-semibold transition-all ${
                    isActive(item.href)
                      ? "text-indigo-600"
                      : "text-slate-900 hover:text-indigo-500"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-indigo-500 transition-all duration-300 ${
                      isActive(item.href)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}

              <Link
                href="/contact"
                className="ml-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.05] hover:shadow-lg"
              >
                Get Strategy
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              className="rounded-lg p-2 transition-colors hover:bg-slate-100 md:hidden"
              onClick={() => setMobileMenu((prev) => !prev)}
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 top-[70px] z-40 bg-white md:hidden">
          <div className="px-6 pt-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="block text-lg font-semibold text-slate-900 hover:text-indigo-600"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="block mt-6 text-center bg-indigo-600 text-white py-3 rounded-xl font-semibold"
            >
              Get Strategy →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}