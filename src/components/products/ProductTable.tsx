"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import { DeleteProductDialog } from "@/components/products/DeleteProductDialog";

interface ProductTableProps {
    products: Product[];
    selectedIds: string[];
    onSelectionChange: (ids: string[]) => void;
}

export function ProductTable({
    products,
    selectedIds,
    onSelectionChange,
}: ProductTableProps) {
    const [deleteDialog, setDeleteDialog] = useState<{
        open: boolean;
        productId: string;
        productName: string;
    }>({ open: false, productId: "", productName: "" });

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            onSelectionChange(products.map((p) => p.id));
        } else {
            onSelectionChange([]);
        }
    };

    const handleSelectOne = (productId: string, checked: boolean) => {
        if (checked) {
            onSelectionChange([...selectedIds, productId]);
        } else {
            onSelectionChange(selectedIds.filter((id) => id !== productId));
        }
    };

    const allSelected = products.length > 0 && selectedIds.length === products.length;
    const someSelected = selectedIds.length > 0 && selectedIds.length < products.length;

    return (
        <>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                        <tr>
                            <th className="w-12 px-6 py-3">
                                <input
                                    type="checkbox"
                                    checked={allSelected}
                                    ref={(input) => {
                                        if (input) input.indeterminate = someSelected;
                                    }}
                                    onChange={(e) => handleSelectAll(e.target.checked)}
                                    className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-2 focus:ring-zinc-900 dark:border-zinc-700"
                                />
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                Product
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                SKU
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                Price
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                Stock
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                Status
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                        {products.map((product) => (
                            <tr
                                key={product.id}
                                className={`hover:bg-zinc-50 dark:hover:bg-zinc-900 ${selectedIds.includes(product.id) ? "bg-zinc-50 dark:bg-zinc-900" : ""
                                    }`}
                            >
                                <td className="whitespace-nowrap px-6 py-4">
                                    <input
                                        type="checkbox"
                                        checked={selectedIds.includes(product.id)}
                                        onChange={(e) => handleSelectOne(product.id, e.target.checked)}
                                        className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-2 focus:ring-zinc-900 dark:border-zinc-700"
                                    />
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    <div className="flex items-center">
                                        <div>
                                            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                                                {product.name}
                                            </div>
                                            {product.category && (
                                                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                                                    {product.category}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400">
                                    {product.sku}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-900 dark:text-zinc-50">
                                    ${product.price.toFixed(2)}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400">
                                    {product.stock ?? "N/A"}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    <span
                                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${product.isActive
                                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                                : "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                                            }`}
                                    >
                                        {product.isActive ? "Active" : "Inactive"}
                                    </span>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                                    <div className="flex items-center justify-end gap-3">
                                        <a
                                            href={`/products/${product.id}/edit`}
                                            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                                        >
                                            Edit
                                        </a>
                                        <button
                                            onClick={() =>
                                                setDeleteDialog({
                                                    open: true,
                                                    productId: product.id,
                                                    productName: product.name,
                                                })
                                            }
                                            className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <DeleteProductDialog
                productId={deleteDialog.productId}
                productName={deleteDialog.productName}
                open={deleteDialog.open}
                onOpenChange={(open) =>
                    setDeleteDialog((prev) => ({ ...prev, open }))
                }
            />
        </>
    );
}
