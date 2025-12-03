import { getProducts, getProductById } from "@/actions/product.action";
import { getCategories } from "@/actions/category.action";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { Badge } from "@/components/ui/badge";
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
        <div className="min-h-screen bg-white dark:bg-black">
            <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-8 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <Link href="/shop" className="hover:text-zinc-900 dark:hover:text-zinc-50">
                        Shop
                    </Link>
                    <span>/</span>
                    {product.category && (
                        <>
                            <Link
                                href={`/shop?category=${product.category}`}
                                className="hover:text-zinc-900 dark:hover:text-zinc-50"
                            >
                                {product.category}
                            </Link>
                            <span>/</span>
                        </>
                    )}
                    <span className="text-zinc-900 dark:text-zinc-50">{product.name}</span>
                </nav>

                {/* Product Detail */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="aspect-square overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900">
                            {product.images && product.images.length > 0 ? (
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center text-zinc-400">
                                    No image available
                                </div>
                            )}
                        </div>
                        {product.images && product.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {product.images.slice(1, 5).map((image, index) => (
                                    <div
                                        key={index}
                                        className="aspect-square overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900"
                                    >
                                        <img src={image} alt={`${product.name} ${index + 2}`} className="h-full w-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-3xl font-bold">{product.name}</h1>
                                {product.isActive ? (
                                    <Badge variant="success">In Stock</Badge>
                                ) : (
                                    <Badge variant="danger">Out of Stock</Badge>
                                )}
                            </div>
                            {product.category && (
                                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{product.category}</p>
                            )}
                        </div>

                        <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>

                        {product.description && (
                            <div>
                                <h2 className="mb-2 text-sm font-semibold uppercase text-zinc-600 dark:text-zinc-400">
                                    Description
                                </h2>
                                <p className="text-zinc-900 dark:text-zinc-50">{product.description}</p>
                            </div>
                        )}

                        <div className="space-y-4 border-y border-zinc-200 py-6 dark:border-zinc-800">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">SKU</span>
                                <span className="text-sm text-zinc-600 dark:text-zinc-400">{product.sku}</span>
                            </div>
                            {product.stock !== undefined && (
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Availability</span>
                                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                                        {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4">
                            <AddToCartButton
                                productId={product.id!}
                                productName={product.name}
                                disabled={!product.isActive || (product.stock !== undefined && product.stock === 0)}
                                size="lg"
                            />
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                Free shipping on orders over $100
                            </p>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="mt-16">
                        <h2 className="mb-6 text-2xl font-bold">You may also like</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {relatedProducts.map((relatedProduct) => (
                                <Link key={relatedProduct.id} href={`/shop/products/${relatedProduct.id}`}>
                                    <div className="group overflow-hidden rounded-lg border border-zinc-200 bg-white transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
                                        <div className="aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                                            {relatedProduct.images && relatedProduct.images.length > 0 ? (
                                                <img
                                                    src={relatedProduct.images[0]}
                                                    alt={relatedProduct.name}
                                                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center text-zinc-400">
                                                    No image
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold">{relatedProduct.name}</h3>
                                            <p className="mt-1 text-lg font-bold">${relatedProduct.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
