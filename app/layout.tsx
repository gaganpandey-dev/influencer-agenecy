import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Inter } from "next/font/google";
import Navbar  from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Vmerg - Influencer Marketing Platform",
    template: "%s | Vmerg",
  },
  description:
    "Turn creator partnerships into measurable brand growth. Scale influencer campaigns with verified creators and data-driven strategies.",
  keywords: [
    "influencer marketing",
    "creator partnerships",
    "brand campaigns",
    "influencer strategy",
  ],
  authors: [{ name: "Vmerg" }],
  creator: "Vmerg",
  openGraph: {
    title: "Vmerg - Influencer Marketing Platform",
    description:
      "Scale influencer campaigns with verified creators and data-driven strategies.",
    url: "https://vmerg.com",
    siteName: "Vmerg",
    images: [
      {
        url: "https://vmerg.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vmerg - Influencer Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vmerg - Influencer Marketing Platform",
    description:
      "Scale influencer campaigns with verified creators and data-driven strategies.",
    images: ["https://vmerg.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-[100dvh] bg-white font-sans antialiased text-slate-900">
        <ThemeProvider>

          {/* 🔥 GLOBAL NAVBAR */}
          <Navbar />

          {/* 🔥 MAIN CONTENT */}
          <main className="pt-[88px]">{children}</main>

        </ThemeProvider>
      </body>
    </html>
  );
}