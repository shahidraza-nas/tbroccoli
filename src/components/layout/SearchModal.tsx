"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const popularSearches = [
    "Sweaters",
    "Dresses",
    "Jackets",
    "T-Shirts",
    "Accessories",
  ];

  return (
    <div className="fixed inset-0 z-[999]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative mx-auto max-w-3xl px-4 pt-20">
        <div className="rounded-2xl bg-white p-6 shadow-2xl">
          {/* Search Input */}
          <div className="relative mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full rounded-xl border border-gray-200 px-12 py-4 text-base focus:border-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/20"
              autoFocus
            />
            <svg
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Popular Searches */}
          {!searchQuery && (
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-900">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <Link
                    key={term}
                    href={`/shop/search?q=${term.toLowerCase()}`}
                    onClick={onClose}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-[#FF6B6B] hover:text-white"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Search Results (when typing) */}
          {searchQuery && (
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-900">Search Results</h3>
              <Link
                href={`/shop/search?q=${searchQuery}`}
                onClick={onClose}
                className="block rounded-lg border border-gray-200 p-4 text-sm text-gray-700 transition-colors hover:border-[#FF6B6B] hover:bg-gray-50"
              >
                Search for "{searchQuery}"
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
