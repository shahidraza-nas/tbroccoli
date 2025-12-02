import { getProducts } from "@/actions/product.action";
import type { ProductFilter } from "@/types/product";
import { ProductListClient } from "@/components/products/ProductListClient";

/**
 * Products list page
 * URL: /products
 */
export default async function ProductsListPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;

    const filter = {
        search: typeof params.search === "string" ? params.search : undefined,
        category: typeof params.category === "string" ? params.category : undefined,
        isActive: params.isActive === "true" ? true : params.isActive === "false" ? false : undefined,
        page: params.page ? Number(params.page) : 1,
        limit: params.limit ? Number(params.limit) : 10,
        sortBy: params.sortBy as ProductFilter["sortBy"],
        sortOrder: (params.sortOrder as ProductFilter["sortOrder"]) || ("desc" as const),
    } satisfies ProductFilter;

    const { success, data, error } = await getProducts(filter);

    if (!success || !data) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                        Failed to load products
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{error}</p>
                </div>
            </div>
        );
    }

    const { products, total, page, limit } = data;

    return <ProductListClient products={products as any} total={total} page={page} limit={limit} />;
}
