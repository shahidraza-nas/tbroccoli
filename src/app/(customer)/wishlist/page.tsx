"use client";

import { useWishlist } from "@/contexts/WishlistContext";
import Link from "next/link";
import Image from "next/image";

export default function WishlistPage() {
  const { items, removeItem, itemCount } = useWishlist();

  if (itemCount === 0) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <div className="mb-6 flex justify-center">
            <svg className="h-24 w-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h1 className="mb-3 text-2xl font-bold text-gray-900">Your Wishlist is Empty</h1>
          <p className="mb-8 text-gray-600">Save your favorite items to your wishlist and shop them later.</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-lg bg-[#FF6B6B] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#FF5252]"
          >
            Continue Shopping
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
          <p className="mt-1 text-gray-600">{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
        </div>
        <Link
          href="/shop"
          className="text-sm font-medium text-[#FF6B6B] transition-colors hover:text-[#FF5252]"
        >
          Continue Shopping
        </Link>
      </div>

      {/* Wishlist Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-md transition-colors hover:bg-white hover:text-red-500"
                aria-label="Remove from wishlist"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              {item.category && (
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                  {item.category}
                </p>
              )}
              <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-gray-900">
                {item.name}
              </h3>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</span>
              </div>
              <Link
                href={`/shop/products/${item.id}`}
                className="block w-full rounded-lg bg-[#FF6B6B] py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#FF5252]"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
