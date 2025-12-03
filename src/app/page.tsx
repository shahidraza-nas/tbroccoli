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

      {/* Category Cards */}
      <CategoryCards />

      {/* Featured Products */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-black">Trending Now</h2>
            <Link href="/shop" className="text-sm font-medium text-gray-600 hover:text-black">
              View All →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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

      {/* Split Banner Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden bg-[#F8E5D5]">
              <div className="absolute left-8 top-1/2 z-10 -translate-y-1/2">
                <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-600">Winter Collection</p>
                <h3 className="mb-4 text-4xl font-bold text-black">Up to 50% Off</h3>
                <Link href="/shop" className="inline-block border-2 border-black px-8 py-3 text-sm font-bold uppercase text-black transition-colors hover:bg-black hover:text-white">
                  Shop Now
                </Link>
              </div>
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                alt="Winter Collection"
                className="absolute right-0 h-full w-2/3 object-cover"
              />
            </div>
            <div className="relative h-[400px] overflow-hidden bg-[#E8F4F8]">
              <div className="absolute left-8 top-1/2 z-10 -translate-y-1/2">
                <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-600">New Arrivals</p>
                <h3 className="mb-4 text-4xl font-bold text-black">Spring Essentials</h3>
                <Link href="/shop" className="inline-block border-2 border-black px-8 py-3 text-sm font-bold uppercase text-black transition-colors hover:bg-black hover:text-white">
                  Discover
                </Link>
              </div>
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
                alt="Spring Collection"
                className="absolute right-0 h-full w-2/3 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-black">Best Sellers</h2>
            <Link href="/shop" className="text-sm font-medium text-gray-600 hover:text-black">
              View All →
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

      {/* Large Promotional Banner */}
      <section className="relative h-[500px] bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="container relative mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-full items-center">
            <div className="max-w-lg">
              <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gray-600">Limited Time Offer</p>
              <h2 className="mb-4 text-5xl font-bold text-black">Sale Up To<br />70% Off</h2>
              <p className="mb-6 text-lg text-gray-600">On selected items. Don't miss out!</p>
              <Link href="/shop" className="inline-block bg-[#FF6B6B] px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#FF5252]">
                Shop Sale
              </Link>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2">
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1000&q=80"
                alt="Sale"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-black">New Arrivals</h2>
            <Link href="/shop" className="text-sm font-medium text-gray-600 hover:text-black">
              View All →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <ShopProductCard
              id="14"
              name="Elessi Young T-Shirt"
              price={32.00}
              image="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80"
              badge="NEW"
              colors={["#FFB6C1", "#8B7D82"]}
            />
            <ShopProductCard
              id="15"
              name="Casis Holder"
              price={48.00}
              image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80"
              badge="NEW"
              colors={["#8B9467"]}
            />
            <ShopProductCard
              id="16"
              name="Flowers Mini Dress"
              price={23.00}
              image="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80"
              badge="NEW"
            />
            <ShopProductCard
              id="17"
              name="Gathered Sleeve Blouse"
              price={65.00}
              originalPrice={80.00}
              image="https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&q=80"
            />
          </div>
        </div>
      </section>

      {/* Red Banner */}
      <section className="bg-[#FF6B6B] py-3 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-white">
          UP TO 70% OFF THE ENTIRE STORE - MADE WITH LOVE BY TBROCCOLI
        </p>
      </section>

      {/* Product Lists: Top Rated, Best Selling, On Sale */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Top Rated */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-black">Top Rated</h3>
              <div className="space-y-4">
                {[
                  { name: "Elessi Knit", price: 96.00, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200&q=80" },
                  { name: "Hoodie For Men", price: 88.00, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&q=80" },
                  { name: "Gray T-shirt", price: 14.00, originalPrice: 16.00, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&q=80" },
                ].map((product, index) => (
                  <div key={index} className="flex gap-4">
                    <img src={product.image} alt={product.name} className="h-20 w-20 object-cover" />
                    <div>
                      <h4 className="text-sm font-medium text-black">{product.name}</h4>
                      <div className="mt-1 flex gap-2">
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                        <span className="text-sm font-semibold text-black">${product.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Selling */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-black">Best Selling</h3>
              <div className="space-y-4">
                {[
                  { name: "Gray T-shirt", price: 14.00, originalPrice: 16.00, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&q=80" },
                  { name: "Classic Wool Sweater", price: 36.00, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&q=80" },
                  { name: "Short Sleeve Dress", price: 24.00, image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=200&q=80" },
                ].map((product, index) => (
                  <div key={index} className="flex gap-4">
                    <img src={product.image} alt={product.name} className="h-20 w-20 object-cover" />
                    <div>
                      <h4 className="text-sm font-medium text-black">{product.name}</h4>
                      <div className="mt-1 flex gap-2">
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                        <span className="text-sm font-semibold text-black">${product.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* On Sale */}
            <div>
              <h3 className="mb-6 text-xl font-bold text-black">On Sale</h3>
              <div className="space-y-4">
                {[
                  { name: "Mint Long Sleeve", price: 19.00, originalPrice: 21.00, image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=200&q=80" },
                  { name: "Puff Sleeve Shirt", price: 65.00, originalPrice: 80.00, image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=200&q=80" },
                  { name: "Gray T-shirt", price: 14.00, originalPrice: 16.00, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&q=80" },
                ].map((product, index) => (
                  <div key={index} className="flex gap-4">
                    <img src={product.image} alt={product.name} className="h-20 w-20 object-cover" />
                    <div>
                      <h4 className="text-sm font-medium text-black">{product.name}</h4>
                      <div className="mt-1 flex gap-2">
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                        <span className="text-sm font-semibold text-black">${product.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="border-t border-gray-100 bg-white py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-60">
            <img src="https://via.placeholder.com/120x40/cccccc/666666?text=BRAND1" alt="Brand 1" className="h-10" />
            <img src="https://via.placeholder.com/120x40/cccccc/666666?text=BRAND2" alt="Brand 2" className="h-10" />
            <img src="https://via.placeholder.com/120x40/cccccc/666666?text=BRAND3" alt="Brand 3" className="h-10" />
            <img src="https://via.placeholder.com/120x40/cccccc/666666?text=BRAND4" alt="Brand 4" className="h-10" />
            <img src="https://via.placeholder.com/120x40/cccccc/666666?text=BRAND5" alt="Brand 5" className="h-10" />
            <img src="https://via.placeholder.com/120x40/cccccc/666666?text=BRAND6" alt="Brand 6" className="h-10" />
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