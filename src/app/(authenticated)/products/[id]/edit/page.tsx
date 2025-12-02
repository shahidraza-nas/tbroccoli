import { getProductById } from "@/actions/product.action";
import { notFound } from "next/navigation";
import { ProductForm } from "@/components/products/ProductForm";

/**
 * Product edit page
 * URL: /products/[id]/edit
 */
export default async function ProductEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { success, data: product, error } = await getProductById(id);

  if (!success || !product) {
    if (error === "Product not found") {
      notFound();
    }
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Failed to load product
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Product</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Update product information for {product.name}
        </p>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <ProductForm product={product} mode="edit" />
      </div>
    </div>
  );
}
