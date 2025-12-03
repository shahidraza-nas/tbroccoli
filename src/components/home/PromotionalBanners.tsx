import Link from "next/link";

export function PromotionalBanners() {
  return (
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
  );
}
