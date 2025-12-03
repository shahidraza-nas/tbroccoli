"use client";

import Link from "next/link";
import { useCart } from "@/contexts/cart-context";

export function CartButton() {
  const { itemCount, isLoading } = useCart();
  const displayCount = isLoading ? 0 : itemCount;

  return (
    <Link
      href="/cart"
      className="relative text-gray-700 hover:text-[#FF6B6B]"
      aria-label="Shopping cart"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
      <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF6B6B] text-[9px] font-medium text-white">
        {displayCount}
      </span>
    </Link>
  );
}
