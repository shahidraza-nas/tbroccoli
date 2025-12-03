import Link from "next/link";
import { ShopProductCard } from "@/components/products/ShopProductCard";

export function CustomerFavorites() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-black sm:text-4xl">Customer Favorites</h2>
            <p className="text-sm text-gray-600 sm:text-base">Top picks loved by our community</p>
          </div>
          <Link 
            href="/shop?sort=bestseller" 
            className="group flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-[#FF6B6B]"
          >
            View All Bestsellers
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <ShopProductCard
            id="9"
            name="Gathered Sleeve"
            price={17.00}
            originalPrice={19.00}
            image="https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&q=80"
            badge="-11%"
          />
          <ShopProductCard
            id="10"
            name="Gray T-Shirt"
            price={14.00}
            originalPrice={16.00}
            image="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=80"
            badge="SALE"
            colors={["#708090", "#2C2C2C"]}
          />
          <ShopProductCard
            id="11"
            name="Green Sweatshirt"
            price={37.00}
            image="https://images.unsplash.com/photo-1578996283135-d1bbf1e46d5c?w=400&q=80"
          />
          <ShopProductCard
            id="12"
            name="Hooded Anorak"
            price={32.00}
            image="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80"
            colors={["#F5F5DC", "#8FBC8F"]}
          />
          <ShopProductCard
            id="13"
            name="Short Sleeve Dress"
            price={24.00}
            image="https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400&q=80"
          />
        </div>
      </div>
    </section>
  );
}
