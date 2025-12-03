import Link from "next/link";
import { ShopProductCard } from "@/components/products/ShopProductCard";

export function TrendingProducts() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-black sm:text-4xl">Trending Now</h2>
            <p className="text-sm text-gray-600 sm:text-base">Popular items this season</p>
          </div>
          <Link 
            href="/shop" 
            className="group flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-[#FF6B6B]"
          >
            View All Products
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ShopProductCard
            id="1"
            name="Chenille Sweater"
            price={29.00}
            image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80"
            badge="HOT"
            colors={["#87CEEB", "#FFD700"]}
          />
          <ShopProductCard
            id="2"
            name="Classic Wool Sweater"
            price={36.00}
            image="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80"
            colors={["#2C2C2C", "#1A1A1A"]}
          />
          <ShopProductCard
            id="3"
            name="Coach Holder"
            price={48.00}
            image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80"
            colors={["#8B9467", "#A0A894"]}
          />
          <ShopProductCard
            id="4"
            name="Colorful Jacket"
            price={89.00}
            image="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80"
            colors={["#FFD700", "#2C2C2C", "#87CEEB"]}
          />
        </div>
      </div>
    </section>
  );
}
