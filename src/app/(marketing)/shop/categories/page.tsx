import { getCategories } from "@/actions/category.action";
import { ShopHeader } from "../(components)/ShopHeader";
import Link from "next/link";

export default async function CategoriesPage() {
    const categoriesResult = await getCategories({ 
        isActive: true, 
        sortBy: "order", 
        sortOrder: "asc", 
        page: 1, 
        limit: 12 
    });
    
    const categories = categoriesResult.data?.categories || [];

    return (
        <div className="min-h-screen bg-white">
            <ShopHeader title="Categories" breadcrumb="Home / Categories" />

            <section className="py-12">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`/shop/categories/${category.slug}`}
                                className="group relative overflow-hidden rounded-lg bg-gray-50 transition-all hover:shadow-lg"
                            >
                                {category.image && (
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-black">{category.name}</h3>
                                    {category.description && (
                                        <p className="mt-2 text-sm text-gray-600">{category.description}</p>
                                    )}
                                    <p className="mt-3 text-sm font-medium text-gray-900 group-hover:text-[#FF6B6B]">
                                        {category.productCount} Products →
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
