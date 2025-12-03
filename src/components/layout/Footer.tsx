"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Logo & Contact */}
                    <div>
                        <h3 className="mb-4 text-2xl font-bold">TBroccoli.</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                            <p>Calista Wise 7292 Dictum Av. Antonio,</p>
                            <p>Italy.</p>
                            <p className="pt-3">(+01)-800-3456-88</p>
                            <p>contact@tbroccoli.com</p>
                            {/* Social Icons */}
                            <div className="flex gap-3 pt-4">
                                <Link href="#" className="text-gray-600 hover:text-black">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                </Link>
                                <Link href="#" className="text-gray-600 hover:text-black">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </Link>
                                <Link href="#" className="text-gray-600 hover:text-black">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" /></svg>
                                </Link>
                                <Link href="#" className="text-gray-600 hover:text-black">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Useful links</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/delivery" className="hover:text-black">Delivery Information</Link></li>
                            <li><Link href="/terms" className="hover:text-black">Terms & Condition</Link></li>
                            <li><Link href="/contact" className="hover:text-black">Customer Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-black">Privacy Policy</Link></li>
                            <li><Link href="/search" className="hover:text-black">Search Terms</Link></li>
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Get in touch</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            <div>
                                <p className="font-medium text-black">Whatsapp</p>
                                <p>+001 2233 456 291</p>
                            </div>
                            <div>
                                <p className="font-medium text-black">Real Live Support</p>
                                <p>Calista Antonio, Italy</p>
                            </div>
                            <div>
                                <p className="font-medium text-black">Monday - Friday</p>
                                <p>08:00 - 20:00</p>
                            </div>
                            <div>
                                <p className="font-medium text-black">Saturday</p>
                                <p>09:00 - 21:00</p>
                            </div>
                            <div>
                                <p className="font-medium text-black">Sunday</p>
                                <p>13:00 - 22:00</p>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Newsletter signup</h3>
                        <p className="mb-4 text-sm text-gray-600">
                            Subscribe to our newsletters now and stay up-to-date with new collections.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
                            />
                            <button className="bg-[#FF6B6B] px-6 py-2 text-xs font-semibold uppercase text-white hover:bg-[#FF5252]">
                                Subscribe
                            </button>
                        </div>
                        {/* Payment Icons */}
                        <div className="mt-4 flex gap-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" className="h-6" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 sm:flex-row">
                        <p>© {new Date().getFullYear()} TBroccoli - All Right reserved!</p>
                        <div className="flex gap-6">
                            <Link href="/accessibility" className="hover:text-black">Accessibility</Link>
                            <Link href="/about" className="hover:text-black">About Us</Link>
                            <Link href="/contact" className="hover:text-black">Contact</Link>
                            <Link href="/blog" className="hover:text-black">Blog</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
