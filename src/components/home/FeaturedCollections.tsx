import { ShopProductCard } from "@/components/products/ShopProductCard";

export function FeaturedCollections() {
  return (
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
  );
}
