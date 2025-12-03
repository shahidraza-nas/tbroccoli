import Link from "next/link";

export function ShopByCategory() {
  return (
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
  );
}
