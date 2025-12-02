"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Product, CreateProduct } from "@/schemas/product-schema";
import { CreateProductSchema, UpdateProductSchema } from "@/schemas/product-schema";
import { createProduct, updateProduct } from "@/actions/product.action";
import { Button } from "@/components/ui/button";

interface ProductFormProps {
    product?: Product;
    mode: "create" | "edit";
}

export function ProductForm({ product, mode }: ProductFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const schema = mode === "create" ? CreateProductSchema : UpdateProductSchema;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: product
            ? {
                id: product.id,
                name: product.name,
                description: product.description || "",
                price: product.price,
                sku: product.sku,
                category: product.category || "",
                stock: product.stock || 0,
                isActive: product.isActive,
            }
            : {
                name: "",
                description: "",
                price: 0,
                sku: "",
                category: "",
                stock: 0,
                isActive: true,
            },
    });

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const result =
                mode === "create"
                    ? await createProduct(data as CreateProduct)
                    : await updateProduct(product!.id!, data);

            if (result.success) {
                router.push("/products");
                router.refresh();
            } else {
                setError(result.error || "An error occurred");
            }
        } catch (err) {
            setError("An unexpected error occurred");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200">
                    {error}
                </div>
            )}

            {/* Product Name */}
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-900 dark:text-zinc-50"
                >
                    Product Name *
                </label>
                <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                    placeholder="Enter product name"
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.name.message}
                    </p>
                )}
            </div>

            {/* Description */}
            <div>
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-zinc-900 dark:text-zinc-50"
                >
                    Description
                </label>
                <textarea
                    {...register("description")}
                    id="description"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                    placeholder="Enter product description"
                />
                {errors.description && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.description.message}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* SKU */}
                <div>
                    <label
                        htmlFor="sku"
                        className="block text-sm font-medium text-zinc-900 dark:text-zinc-50"
                    >
                        SKU *
                    </label>
                    <input
                        {...register("sku")}
                        type="text"
                        id="sku"
                        className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                        placeholder="Enter SKU"
                    />
                    {errors.sku && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.sku.message}
                        </p>
                    )}
                </div>

                {/* Category */}
                <div>
                    <label
                        htmlFor="category"
                        className="block text-sm font-medium text-zinc-900 dark:text-zinc-50"
                    >
                        Category
                    </label>
                    <input
                        {...register("category")}
                        type="text"
                        id="category"
                        className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                        placeholder="Enter category"
                    />
                    {errors.category && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.category.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Price */}
                <div>
                    <label
                        htmlFor="price"
                        className="block text-sm font-medium text-zinc-900 dark:text-zinc-50"
                    >
                        Price *
                    </label>
                    <input
                        {...register("price", { valueAsNumber: true })}
                        type="number"
                        step="0.01"
                        id="price"
                        className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                        placeholder="0.00"
                    />
                    {errors.price && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.price.message}
                        </p>
                    )}
                </div>

                {/* Stock */}
                <div>
                    <label
                        htmlFor="stock"
                        className="block text-sm font-medium text-zinc-900 dark:text-zinc-50"
                    >
                        Stock
                    </label>
                    <input
                        {...register("stock", { valueAsNumber: true })}
                        type="number"
                        id="stock"
                        className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                        placeholder="0"
                    />
                    {errors.stock && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.stock.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Active Status */}
            <div className="flex items-center gap-2">
                <input
                    {...register("isActive")}
                    type="checkbox"
                    id="isActive"
                    className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-2 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900"
                />
                <label
                    htmlFor="isActive"
                    className="text-sm font-medium text-zinc-900 dark:text-zinc-50"
                >
                    Product is active
                </label>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-3 border-t border-zinc-200 pt-6 dark:border-zinc-800">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.back()}
                    disabled={isSubmitting}
                >
                    Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting
                        ? mode === "create"
                            ? "Creating..."
                            : "Updating..."
                        : mode === "create"
                            ? "Create Product"
                            : "Update Product"}
                </Button>
            </div>
        </form>
    );
}
