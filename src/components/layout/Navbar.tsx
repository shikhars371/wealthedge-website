"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between sm:h-20">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 text-lg font-bold text-white">
            W
          </div>

          <div>
            <h2
              className={`text-lg font-bold transition sm:text-xl ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              WealthEdge
            </h2>

            <p
              className={`hidden text-xs sm:block ${
                scrolled
                  ? "text-slate-500"
                  : "text-white/70"
              }`}
            >
              Wealth Management
            </p>
          </div>
        </Link>

        {/* Consultation Button */}

        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:from-blue-500 hover:to-blue-600 sm:px-7 sm:py-3 sm:text-base"
        >
          Book Consultation
        </a>

      </div>
    </header>
  );
}