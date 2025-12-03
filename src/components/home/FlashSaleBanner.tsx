"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function FlashSaleBanner() {
  const [time, setTime] = useState({ hours: 12, minutes: 34, seconds: 56 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#FF6B6B] via-[#FF8E53] to-[#FE6B8B] py-16 sm:py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm">
              ⚡ Limited Time Offer
            </div>
            <h2 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Flash Sale<br />
              Up to <span className="text-yellow-300">70% Off</span>
            </h2>
            <p className="mb-8 text-base text-white/90 sm:text-lg">Don't miss out on incredible savings across all categories</p>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link 
                href="/shop?sale=flash" 
                className="inline-block bg-black px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-gray-900 hover:shadow-2xl"
              >
                Shop Now
              </Link>
              <Link 
                href="/shop" 
                className="inline-block border-2 border-white px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#FF6B6B]"
              >
                Browse All
              </Link>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 text-3xl font-bold text-white backdrop-blur-sm sm:h-20 sm:w-20 sm:text-4xl">
                {String(time.hours).padStart(2, '0')}
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-white/80 sm:text-sm">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 text-3xl font-bold text-white backdrop-blur-sm sm:h-20 sm:w-20 sm:text-4xl">
                {String(time.minutes).padStart(2, '0')}
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-white/80 sm:text-sm">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 text-3xl font-bold text-white backdrop-blur-sm sm:h-20 sm:w-20 sm:text-4xl">
                {String(time.seconds).padStart(2, '0')}
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-white/80 sm:text-sm">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
