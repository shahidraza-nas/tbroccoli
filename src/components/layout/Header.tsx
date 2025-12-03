"use client";

import Link from "next/link";
import { CartButton } from "@/components/cart/CartButton";

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-baseline text-2xl font-bold tracking-tight text-black">
                            TBroccoli<span className="ml-0.5 text-[#FF6B6B]">.</span>
                        </Link>
                    </div>

                    {/* Center Navigation */}
                    <nav className="hidden items-center gap-8 lg:flex">
                        <div className="group relative">
                            <Link href="/" className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-[#FF6B6B]">
                                DEMO
                                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="group relative">
                            <Link href="/shop" className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-[#FF6B6B]">
                                SHOP
                                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="group relative">
                            <Link href="/shop/categories" className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-[#FF6B6B]">
                                PRODUCT
                                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="group relative">
                            <Link href="#" className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-[#FF6B6B]">
                                ELEMENTS
                                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                        </div>
                        <Link href="/dashboard" className="flex items-center gap-1 text-sm font-medium text-[#FF6B6B] transition-colors hover:text-[#FF5252]">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            BUY
                        </Link>
                    </nav>

                    {/* Right Icons */}
                    <div className="flex items-center gap-5">
                        {/* Search Icon */}
                        <button className="text-gray-700 hover:text-[#FF6B6B]" aria-label="Search">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* User Icon */}
                        <Link href="/auth/login" className="text-gray-700 hover:text-[#FF6B6B]" aria-label="Account">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </Link>

                        {/* Wishlist Icon with Badge */}
                        <button className="relative text-gray-700 hover:text-[#FF6B6B]" aria-label="Wishlist">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF6B6B] text-[9px] font-medium text-white">
                                0
                            </span>
                        </button>

                        {/* Cart Icon with Badge */}
                        <CartButton />
                    </div>
                </div>
            </div>
        </header>
    );
}
