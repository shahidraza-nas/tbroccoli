import { getProducts, getProductById } from "@/actions/product.action";
import { ProductDetailClient } from "./(components)/ProductDetailClient";
import { ShopProductCard } from "@/components/products/ShopProductCard";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { success, data: product } = await getProductById(id);

    if (!success || !product) {
        notFound();
    }

    // Get related products (same category)
    const relatedResult = await getProducts({
        category: product.category,
        limit: 4,
        page: 1,
        sortOrder: "desc",
    });
    const relatedProducts = relatedResult.data?.products.filter((p) => p.id !== product.id) || [];

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
                    <Link href="/" className="hover:text-black">
                        Home
                    </Link>
                    <span>/</span>
                    <Link href="/shop" className="hover:text-black">
                        Fashion
                    </Link>
                    <span>/</span>
                    <span className="text-black">{product.name}</span>
                </nav>

                {/* Product Detail */}
                <ProductDetailClient product={product} />

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="mt-16 border-t border-gray-200 pt-16">
                        <h2 className="mb-8 text-center text-2xl font-semibold text-black">You may also like</h2>
                        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <ShopProductCard
                                id="1"
                                name="Steady T-Shirt"
                                price={29.00}
                                image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80"
                            />
                            <ShopProductCard
                                id="2"
                                name="Coach Holder"
                                price={49.00}
                                image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80"
                            />
                            <ShopProductCard
                                id="3"
                                name="Jacket Slogan"
                                price={49.00}
                                image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80"
                            />
                            <ShopProductCard
                                id="4"
                                name="Puff Sleeve Shirt"
                                price={65.00}
                                image="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80"
                            />
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
