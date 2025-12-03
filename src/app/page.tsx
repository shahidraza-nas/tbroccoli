import Link from "next/link";
import { ShopProductCard } from "@/components/products/ShopProductCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Elessi Style */}
      <section className="relative bg-[#F7F7F7]">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div>
              <p className="mb-3 text-xs font-normal uppercase tracking-[0.3em] text-gray-500">
                TBroccoli Store
              </p>
              <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-black sm:text-6xl lg:text-7xl">
                Autum<br />& Winter 2021
              </h1>
              <Link
                href="/shop"
                className="inline-block bg-[#FF6B6B] px-10 py-3.5 text-sm font-medium uppercase tracking-widest text-white transition-all hover:bg-[#FF5252]"
              >
                SHOP NOW
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                alt="Fashion Model"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Her Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[350px_1fr]">
            {/* Left - Large Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80"
                alt="For Her"
                className="h-full w-full object-cover"
              />
              <div className="absolute left-4 top-4 bg-[#FFB84D] px-3 py-1.5">
                <p className="text-xs font-medium text-white">Benny Wise Top searched</p>
                <p className="text-lg font-bold text-white">Sweater Personally</p>
                <p className="text-xs text-white">58 Products | 56 Viewed</p>
              </div>
            </div>

            {/* Right - Products Grid */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">For Her</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ShopProductCard
                  id="1"
                  name="Puff Sleeve Shirt"
                  price={65.00}
                  originalPrice={80.00}
                  image="https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&q=80"
                  badge="-19%"
                />
                <ShopProductCard
                  id="2"
                  name="Short Sleeve Dress"
                  price={24.00}
                  image="https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400&q=80"
                  colors={["#8B9467", "#6B8E7D", "#4A5D4E"]}
                />
                <ShopProductCard
                  id="3"
                  name="Elessi Young T-Shirt"
                  price={32.00}
                  image="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80"
                  colors={["#FFB6C1", "#FFC0CB"]}
                />
                <ShopProductCard
                  id="4"
                  name="Chenille Sweater"
                  price={29.00}
                  image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80"
                  badge="HOT"
                  colors={["#87CEEB", "#FFD700"]}
                />
                <ShopProductCard
                  id="5"
                  name="Elessi Knit"
                  price={96.00}
                  image="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80"
                  colors={["#4682B4", "#708090"]}
                />
                <ShopProductCard
                  id="6"
                  name="Floral Embroidery Jacket"
                  price={99.00}
                  image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80"
                  colors={["#FFB6C1", "#DDA0A5"]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="bg-white py-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Mini Backpack Banner */}
            <div className="relative bg-gray-100 p-12 text-center">
              <h3 className="mb-2 text-2xl font-bold">Mini backpack</h3>
              <p className="text-gray-600">Bags & Accessories</p>
            </div>
            {/* Big Sale Banner */}
            <div className="relative bg-gray-100 p-12 text-center">
              <h3 className="mb-2 text-2xl font-bold">Big Sale</h3>
              <p className="text-3xl font-bold text-[#FF6B6B]">50% OFF</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Him Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold">For Him</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <ShopProductCard
              id="7"
              name="Simple T-Shirt"
              price={25.00}
              image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80"
            />
            <ShopProductCard
              id="8"
              name="Hooded Anorak"
              price={32.00}
              image="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80"
            />
            <ShopProductCard
              id="9"
              name="Mint Long Sleeve"
              price={19.00}
              originalPrice={21.00}
              image="https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400&q=80"
            />
            <ShopProductCard
              id="10"
              name="Colorful Jacket"
              price={89.00}
              image="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80"
            />
            <ShopProductCard
              id="11"
              name="Gray T-Shirt"
              price={14.00}
              originalPrice={16.00}
              image="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=80"
            />
            <ShopProductCard
              id="12"
              name="Pull Classic"
              price={29.00}
              image="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80"
            />
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-[#FF6B6B] py-4 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-white">
          UP TO 70% OFF THE ENTIRE STORE
        </p>
      </section>

      {/* Product Lists: Top Rated, Best Selling, On Sale */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Top Rated */}
            <div>
              <h3 className="mb-6 text-xl font-bold">Top Rated</h3>
              <div className="space-y-4">
                {[
                  { name: "Elessi Knit", price: 96.00, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200&q=80" },
                  { name: "Hoodie For Men", price: 88.00, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&q=80" },
                  { name: "Gray T-shirt", price: 14.00, originalPrice: 16.00, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&q=80" },
                ].map((product, index) => (
                  <div key={index} className="flex gap-4">
                    <img src={product.image} alt={product.name} className="h-20 w-20 object-cover" />
                    <div>
                      <h4 className="font-medium">{product.name}</h4>
                      <div className="flex gap-2">
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                        <span className="font-semibold">${product.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Selling */}
            <div>
              <h3 className="mb-6 text-xl font-bold">Best Selling</h3>
              <div className="space-y-4">
                {[
                  { name: "Gray T-shirt", price: 14.00, originalPrice: 16.00, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&q=80" },
                  { name: "Classic Wool Sweater", price: 36.00, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&q=80" },
                  { name: "Short Sleeve Dress", price: 24.00, image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=200&q=80" },
                ].map((product, index) => (
                  <div key={index} className="flex gap-4">
                    <img src={product.image} alt={product.name} className="h-20 w-20 object-cover" />
                    <div>
                      <h4 className="font-medium">{product.name}</h4>
                      <div className="flex gap-2">
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                        <span className="font-semibold">${product.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* On Sale */}
            <div>
              <h3 className="mb-6 text-xl font-bold">On Sale</h3>
              <div className="space-y-4">
                {[
                  { name: "Mint Long Sleeve", price: 19.00, originalPrice: 21.00, image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=200&q=80" },
                  { name: "Puff Sleeve Shirt", price: 65.00, originalPrice: 80.00, image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=200&q=80" },
                  { name: "Gray T-shirt", price: 14.00, originalPrice: 16.00, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=200&q=80" },
                ].map((product, index) => (
                  <div key={index} className="flex gap-4">
                    <img src={product.image} alt={product.name} className="h-20 w-20 object-cover" />
                    <div>
                      <h4 className="font-medium">{product.name}</h4>
                      <div className="flex gap-2">
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                        <span className="font-semibold">${product.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
