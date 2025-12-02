"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import { ProductTable } from "@/components/products/ProductTable";
import { BulkActionsBar } from "@/components/products/BulkActionsBar";
import { ProductFilters } from "@/components/products/ProductFilters";

interface ProductListClientProps {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}

export function ProductListClient({
  products,
  total,
  page,
  limit,
}: ProductListClientProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Manage your product inventory ({total} total)
          </p>
        </div>
        <a
          href="/products/new"
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Add Product
        </a>
      </div>

      {/* Filters */}
      <ProductFilters />

      {/* Bulk Actions Bar */}
      <BulkActionsBar
        selectedIds={selectedIds}
        onClearSelection={() => setSelectedIds([])}
      />

      {products.length === 0 ? (
        <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800">
          <div className="text-center">
            <h3 className="text-lg font-semibold">No products found</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Get started by creating your first product
            </p>
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800">
          <ProductTable
            products={products}
            selectedIds={selectedIds}
            onSelectionChange={setSelectedIds}
          />

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-zinc-200 px-6 py-3 dark:border-zinc-800">
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              Showing {(page - 1) * limit + 1} to {Math.min(page * limit, total)} of{" "}
              {total} results
            </div>
            <div className="flex gap-2">
              {page > 1 && (
                <a
                  href={`/products?page=${page - 1}&limit=${limit}`}
                  className="rounded border border-zinc-200 px-3 py-1 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
                >
                  Previous
                </a>
              )}
              {page * limit < total && (
                <a
                  href={`/products?page=${page + 1}&limit=${limit}`}
                  className="rounded border border-zinc-200 px-3 py-1 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
                >
                  Next
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
