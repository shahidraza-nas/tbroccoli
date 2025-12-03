import Link from "next/link";
import Image from "next/image";
import { ShopProductCard } from "@/components/products/ShopProductCard";
import { CategoryCards } from "@/components/home/CategoryCards";
import { HeroSlider } from "@/components/home/HeroSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Hero Slider */}
      <HeroSlider />

      {/* Shop By Category - Modern Grid */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">Shop By Category</h2>
            <p className="text-base text-gray-600 sm:text-lg">Discover your style across our collections</p>
          </div>
          
          <div className="grid gap-4 sm:gap-6 md:grid-cols-4">
            {/* Large Featured Category */}
            <Link href="/shop?category=womens" className="group relative col-span-full overflow-hidden rounded-2xl md:col-span-2 md:row-span-2">
              <div className="relative h-[300px] sm:h-[400px] md:h-full">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
                  alt="Women's Collection"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm">Featured</span>
                  <h3 className="mb-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Women's</h3>
                  <p className="mb-4 text-sm text-white/90 sm:text-base">Elegant & Sophisticated</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Explore Collection
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Men's Category */}
            <Link href="/shop?category=mens" className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-[180px] sm:h-[200px]">
                <img
                  src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&q=80"
                  alt="Men's Collection"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <h3 className="mb-1 text-xl font-bold text-white sm:text-2xl">Men's</h3>
                  <p className="text-xs text-white/90 sm:text-sm">Sharp & Modern</p>
                </div>
              </div>
            </Link>

            {/* Accessories Category */}
            <Link href="/shop?category=accessories" className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-[180px] sm:h-[200px]">
                <img
                  src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&q=80"
                  alt="Accessories"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <h3 className="mb-1 text-xl font-bold text-white sm:text-2xl">Accessories</h3>
                  <p className="text-xs text-white/90 sm:text-sm">Complete Your Look</p>
                </div>
              </div>
            </Link>

            {/* Kids Category */}
            <Link href="/shop?category=kids" className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-[180px] sm:h-[200px]">
                <img
                  src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&q=80"
                  alt="Kids Collection"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <h3 className="mb-1 text-xl font-bold text-white sm:text-2xl">Kids</h3>
                  <p className="text-xs text-white/90 sm:text-sm">Playful & Comfy</p>
                </div>
              </div>
            </Link>

            {/* Sports Category */}
            <Link href="/shop?category=sports" className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-[180px] sm:h-[200px]">
                <img
                  src="https://images.unsplash.com/photo-1517438476312-10d79c077509?w=400&q=80"
                  alt="Sports Collection"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <h3 className="mb-1 text-xl font-bold text-white sm:text-2xl">Sports</h3>
                  <p className="text-xs text-white/90 sm:text-sm">Active & Dynamic</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Products - Carousel Style */}
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

      {/* Dual Banner Promotion */}
      <section className="bg-white py-8 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Winter Sale Banner */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
              <div className="relative flex h-[350px] items-center sm:h-[400px] lg:h-[450px]">
                <div className="relative z-10 w-full p-8 sm:w-1/2 sm:p-10 lg:p-12">
                  <span className="mb-3 inline-block rounded-full bg-black px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">Winter Sale</span>
                  <h3 className="mb-3 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    Up to<br />
                    <span className="text-[#FF6B6B]">50% Off</span>
                  </h3>
                  <p className="mb-6 text-sm text-gray-700 sm:text-base">Cozy essentials for cold days</p>
                  <Link 
                    href="/shop?sale=winter" 
                    className="inline-block bg-black px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-gray-800 hover:shadow-xl"
                  >
                    Shop Winter
                  </Link>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 sm:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                    alt="Winter Collection"
                    className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* New Arrivals Banner */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100">
              <div className="relative flex h-[350px] items-center sm:h-[400px] lg:h-[450px]">
                <div className="relative z-10 w-full p-8 sm:w-1/2 sm:p-10 lg:p-12">
                  <span className="mb-3 inline-block rounded-full bg-black px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">New In</span>
                  <h3 className="mb-3 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    Spring<br />
                    Essentials
                  </h3>
                  <p className="mb-6 text-sm text-gray-700 sm:text-base">Fresh styles for the season</p>
                  <Link 
                    href="/shop?collection=new" 
                    className="inline-block bg-black px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-gray-800 hover:shadow-xl"
                  >
                    Discover Now
                  </Link>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 sm:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
                    alt="Spring Collection"
                    className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections Grid */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-black sm:text-4xl">Featured Collections</h2>
            <p className="text-sm text-gray-600 sm:text-base">Curated selections just for you</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ShopProductCard
              id="5"
              name="Elessi Knit"
              price={96.00}
              image="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80"
              colors={["#87CEEB", "#708090"]}
            />
            <ShopProductCard
              id="6"
              name="Elessi Young T-Shirt"
              price={32.00}
              image="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80"
              colors={["#FFB6C1", "#8B7D82"]}
            />
            <ShopProductCard
              id="7"
              name="Floral Embroidery Jacket"
              price={99.00}
              image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80"
              badge="HOT"
            />
            <ShopProductCard
              id="8"
              name="Flowers Mini Dress"
              price={23.00}
              image="https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400&q=80"
            />
          </div>
        </div>
      </section>

      {/* Flash Sale Banner */}
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
              {[
                { value: "12", label: "Hours" },
                { value: "34", label: "Minutes" },
                { value: "56", label: "Seconds" },
              ].map((time, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 text-3xl font-bold text-white backdrop-blur-sm sm:h-20 sm:w-20 sm:text-4xl">
                    {time.value}
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-white/80 sm:text-sm">{time.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
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

      {/* Editorial Style - Lifestyle Inspiration */}
      <section className="bg-black py-16 text-white sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Style Inspiration</h2>
            <p className="text-base text-gray-400 sm:text-lg">Discover how to wear this season's must-haves</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Lifestyle Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-[400px] sm:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80"
                  alt="Street Style"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-gray-300">Street Style</span>
                  <h3 className="mb-2 text-2xl font-bold">Urban Comfort</h3>
                  <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#FF6B6B]">
                    Shop the Look
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Lifestyle Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-[400px] sm:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
                  alt="Minimalist Fashion"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-gray-300">Minimalist</span>
                  <h3 className="mb-2 text-2xl font-bold">Less is More</h3>
                  <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#FF6B6B]">
                    Shop the Look
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Lifestyle Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-[400px] sm:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80"
                  alt="Classic Elegance"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-gray-300">Classic</span>
                  <h3 className="mb-2 text-2xl font-bold">Timeless Pieces</h3>
                  <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#FF6B6B]">
                    Shop the Look
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="border-t border-gray-100 bg-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
            {/* Nike */}
            <svg className="h-12 w-auto fill-gray-400 transition-colors hover:fill-gray-900" viewBox="0 0 1000 356" xmlns="http://www.w3.org/2000/svg">
              <path d="M245.8 212.6l-38.1 85.7s-111.3-69.2-211.9-111.3c-25.7-10.7-34.4 6.5-22 20.6C7.4 250.8 140.4 348 140.4 348l118.9-267.1c8-17.8 0-27.4-16.3-21.8L0 146.4l245.8 66.2z"/>
            </svg>

            {/* Adidas */}
            <svg className="h-8 w-auto fill-gray-400 transition-colors hover:fill-gray-900" viewBox="0 0 2560 1024" xmlns="http://www.w3.org/2000/svg">
              <path d="M1024 0l-256 512h512L1024 0zm-384 768l-128 256h384l128-256H640zm640 0l-128 256h384l128-256h-384zm-512-256L640 768h384l128-256H768zm512 0l-128 256h384l128-256h-384z"/>
            </svg>

            {/* Zara */}
            <div className="font-serif text-4xl font-bold tracking-wider text-gray-400 transition-colors hover:text-gray-900">ZARA</div>

            {/* H&M */}
            <svg className="h-10 w-auto fill-gray-400 transition-colors hover:fill-gray-900" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm-80 320h-48V192h48v80h64v-80h48v160h-48v-64h-64v64zm160-96c0 26.5-21.5 48-48 48h-48v-96h48c26.5 0 48 21.5 48 48z"/>
            </svg>

            {/* Gucci */}
            <div className="font-serif text-3xl font-bold tracking-widest text-gray-400 transition-colors hover:text-gray-900">GUCCI</div>

            {/* Prada */}
            <div className="font-serif text-3xl font-light tracking-[0.3em] text-gray-400 transition-colors hover:text-gray-900">PRADA</div>

            {/* Versace */}
            <svg className="h-12 w-auto fill-gray-400 transition-colors hover:fill-gray-900" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <circle cx="256" cy="256" r="200" fill="none" stroke="currentColor" strokeWidth="24"/>
              <path d="M256 150c-30 0-55 25-55 55s25 55 55 55 55-25 55-55-25-55-55-55zm0 180c-50 0-90 40-90 90h180c0-50-40-90-90-90z"/>
            </svg>

            {/* Calvin Klein */}
            <div className="text-2xl font-bold tracking-widest text-gray-400 transition-colors hover:text-gray-900">CK</div>

            {/* Levi's */}
            <div className="font-serif text-3xl font-bold italic text-gray-400 transition-colors hover:text-gray-900">Levi's</div>

            {/* Tommy Hilfiger */}
            <div className="flex items-center gap-1">
              <div className="h-8 w-2 bg-red-600"></div>
              <div className="h-8 w-2 bg-white border border-gray-300"></div>
              <div className="h-8 w-2 bg-blue-600"></div>
              <span className="ml-2 text-xl font-bold text-gray-400 transition-colors hover:text-gray-900">TOMMY</span>
            </div>

            {/* Lacoste */}
            <svg className="h-10 w-auto fill-gray-400 transition-colors hover:fill-gray-900" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 100c-20 0-40 10-50 25-10-15-30-25-50-25-35 0-65 30-65 65v80c0 35 30 65 65 65 20 0 40-10 50-25 10 15 30 25 50 25 35 0 65-30 65-65v-80c0-35-30-65-65-65z"/>
              <circle cx="280" cy="150" r="8"/>
              <circle cx="320" cy="140" r="8"/>
            </svg>

            {/* Ralph Lauren */}
            <div className="text-xl font-serif tracking-wider text-gray-400 transition-colors hover:text-gray-900">RALPH LAUREN</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-gray-200 bg-white py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg className="h-12 w-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="mb-2 font-bold text-black">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $100</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg className="h-12 w-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-2 font-bold text-black">Secure Payment</h3>
              <p className="text-sm text-gray-600">100% secure payment</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg className="h-12 w-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="mb-2 font-bold text-black">Easy Returns</h3>
              <p className="text-sm text-gray-600">30 days return policy</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg className="h-12 w-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-2 font-bold text-black">24/7 Support</h3>
              <p className="text-sm text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}