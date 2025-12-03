import { getCategoryBySlug } from "@/actions/category.action";
import { getProducts } from "@/actions/product.action";
import { ShopHeader } from "../../(components)/ShopHeader";
import { FilterBar } from "../../(components)/FilterBar";
import { ProductGrid } from "../../(components)/ProductGrid";
import { Pagination } from "../../(components)/Pagination";
import { notFound } from "next/navigation";

interface CategoryPageProps {
    params: {
        slug: string;
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const categoryResult = await getCategoryBySlug(params.slug);
    
    if (!categoryResult.success || !categoryResult.data) {
        notFound();
    }

    const category = categoryResult.data;
    const productsResult = await getProducts({ 
        categoryId: category.id, 
        limit: 12, 
        page: 1,
        sortBy: "createdAt",
        sortOrder: "desc"
    });
    
    const products = productsResult.data?.products || [];

    return (
        <div className="min-h-screen bg-white">
            <ShopHeader title={category.name} breadcrumb={`Home / Categories / ${category.name}`} />

            <section className="py-12">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {category.description && (
                        <p className="mb-8 text-center text-gray-600">{category.description}</p>
                    )}
                    
                    <FilterBar />
                    <ProductGrid products={products} />
                    <Pagination currentPage={1} totalPages={4} />
                </div>
            </section>
        </div>
    );
}
