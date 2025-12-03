import { HeroSlider } from "@/components/home/HeroSlider";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { TrendingProducts } from "@/components/home/TrendingProducts";
import { PromotionalBanners } from "@/components/home/PromotionalBanners";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { FlashSaleBanner } from "@/components/home/FlashSaleBanner";
import { CustomerFavorites } from "@/components/home/CustomerFavorites";
import { StyleInspiration } from "@/components/home/StyleInspiration";
import { BrandLogos } from "@/components/home/BrandLogos";
import { FeaturesSection } from "@/components/home/FeaturesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSlider />
      <ShopByCategory />
      <TrendingProducts />
      <PromotionalBanners />
      <FeaturedCollections />
      <FlashSaleBanner />
      <CustomerFavorites />
      <StyleInspiration />
      <BrandLogos />
      <FeaturesSection />
    </div>
  );
}