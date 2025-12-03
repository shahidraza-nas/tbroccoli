"use client";

import { CartProvider } from "@/contexts/cart-context";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider>
            <div className="min-h-screen bg-white">
                <TopBar />
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </CartProvider>
    );
}
