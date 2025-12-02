import { ProductForm } from "@/components/products/ProductForm";

/**
 * New product page
 * URL: /products/new
 */
export default function NewProductPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Product</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Add a new product to your inventory
        </p>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <ProductForm mode="create" />
      </div>
    </div>
  );
}
