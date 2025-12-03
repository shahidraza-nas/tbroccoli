import { getProducts } from "@/actions/product.action";
import { ShopHeader } from "../(components)/ShopHeader";
import { FilterBar } from "../(components)/FilterBar";
import { ProductGrid } from "../(components)/ProductGrid";
import { Pagination } from "../(components)/Pagination";

interface SearchPageProps {
    searchParams: {
        q?: string;
        page?: string;
    };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const query = searchParams.q || "";
    const page = Number(searchParams.page) || 1;

    const productsResult = await getProducts({
        search: query,
        limit: 12,
        page,
        sortBy: "createdAt",
        sortOrder: "desc"
    });

    const products = productsResult.data?.products || [];
    const totalPages = Math.ceil((productsResult.data?.total || 0) / 12);

    return (
        <div className="min-h-screen bg-white">
            <ShopHeader 
                title={query ? `Search Results for "${query}"` : "Search Products"} 
                breadcrumb="Home / Search" 
            />

            <section className="py-12">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {query && (
                        <p className="mb-8 text-center text-gray-600">
                            Found {productsResult.data?.total || 0} products matching &quot;{query}&quot;
                        </p>
                    )}
                    
                    <FilterBar />
                    
                    {products.length > 0 ? (
                        <>
                            <ProductGrid products={products} />
                            <Pagination currentPage={page} totalPages={totalPages} />
                        </>
                    ) : (
                        <div className="py-16 text-center">
                            <h3 className="text-xl font-semibold text-gray-900">No products found</h3>
                            <p className="mt-2 text-gray-600">Try adjusting your search terms</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
