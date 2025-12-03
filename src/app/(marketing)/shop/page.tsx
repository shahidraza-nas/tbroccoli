import { getProducts } from "@/actions/product.action";
import { ShopHeader } from "./(components)/ShopHeader";
import { ShopClient } from "./(components)/ShopClient";

export default async function ShopPage() {
    const productsResult = await getProducts({ 
        limit: 12, 
        sortBy: "createdAt", 
        sortOrder: "desc", 
        page: 1 
    });
    
    const products = productsResult.data?.products || [];
    const totalPages = Math.ceil((productsResult.data?.total || 0) / 12);

    return (
        <div className="min-h-screen bg-white">
            <ShopHeader title="Fashion" breadcrumb="Home" />

            <section className="py-16">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ShopClient products={products} totalPages={totalPages || 4} />
                </div>
            </section>
        </div>
    );
}
