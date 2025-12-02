import type { Product } from "@/types/product";

/**
 * Product card component for displaying product information
 */
export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      {product.images && product.images[0] && (
        <div className="aspect-square w-full bg-zinc-100 dark:bg-zinc-900">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              {product.name}
            </h3>
            {product.category && (
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {product.category}
              </p>
            )}
          </div>
          <span
            className={`ml-2 inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
              product.isActive
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
            }`}
          >
            {product.isActive ? "Active" : "Inactive"}
          </span>
        </div>
        {product.description && (
          <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
            {product.description}
          </p>
        )}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              SKU: {product.sku}
            </p>
          </div>
          {product.stock !== undefined && (
            <div className="text-right">
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                {product.stock} in stock
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
