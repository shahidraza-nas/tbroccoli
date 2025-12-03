"use client";

import { useState } from "react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[998] lg:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 p-4">
            <span className="text-lg font-bold text-black">Menu</span>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-2">
              {/* Home */}
              <Link
                href="/"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#FF6B6B]"
              >
                HOME
              </Link>

              {/* Shop */}
              <div>
                <button
                  onClick={() => toggleSection("shop")}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  SHOP
                  <svg
                    className={`h-4 w-4 transition-transform ${openSection === "shop" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openSection === "shop" && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-100 pl-4">
                    <Link href="/shop?category=womens" onClick={onClose} className="block py-2 text-sm text-gray-600 hover:text-[#FF6B6B]">
                      Women
                    </Link>
                    <Link href="/shop?category=mens" onClick={onClose} className="block py-2 text-sm text-gray-600 hover:text-[#FF6B6B]">
                      Men
                    </Link>
                    <Link href="/shop?category=accessories" onClick={onClose} className="block py-2 text-sm text-gray-600 hover:text-[#FF6B6B]">
                      Accessories
                    </Link>
                    <Link href="/shop?sale=true" onClick={onClose} className="block py-2 text-sm text-gray-600 hover:text-[#FF6B6B]">
                      Sale
                    </Link>
                  </div>
                )}
              </div>

              {/* Categories */}
              <Link
                href="/shop/categories"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#FF6B6B]"
              >
                CATEGORIES
              </Link>

              {/* Dashboard */}
              <Link
                href="/dashboard"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-[#FF6B6B] transition-colors hover:bg-gray-50"
              >
                DASHBOARD
              </Link>
            </nav>
          </div>

          {/* Footer Links */}
          <div className="border-t border-gray-100 p-4">
            <div className="space-y-2">
              <Link
                href="/auth/login"
                onClick={onClose}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                onClick={onClose}
                className="block rounded-lg bg-[#FF6B6B] px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#FF5252]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
