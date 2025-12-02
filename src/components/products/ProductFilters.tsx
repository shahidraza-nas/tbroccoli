"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export function ProductFilters() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("search") || "");
    const [category, setCategory] = useState(searchParams.get("category") || "");
    const [status, setStatus] = useState(searchParams.get("isActive") || "all");

    const handleFilter = () => {
        const params = new URLSearchParams();

        if (search) params.set("search", search);
        if (category) params.set("category", category);
        if (status !== "all") params.set("isActive", status);

        router.push(`/products?${params.toString()}`);
    };

    const handleReset = () => {
        setSearch("");
        setCategory("");
        setStatus("all");
        router.push("/products");
    };

    const hasActiveFilters = search || category || status !== "all";

    return (
        <div className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Filters
                </h3>
                {hasActiveFilters && (
                    <button
                        onClick={handleReset}
                        className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                    >
                        Clear all
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* Search */}
                <div>
                    <label
                        htmlFor="search"
                        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                    >
                        Search
                    </label>
                    <input
                        id="search"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search products..."
                        className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                        onKeyDown={(e) => e.key === "Enter" && handleFilter()}
                    />
                </div>

                {/* Category */}
                <div>
                    <label
                        htmlFor="category"
                        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                    >
                        Category
                    </label>
                    <input
                        id="category"
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Filter by category..."
                        className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                        onKeyDown={(e) => e.key === "Enter" && handleFilter()}
                    />
                </div>

                {/* Status */}
                <div>
                    <label
                        htmlFor="status"
                        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                    >
                        Status
                    </label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                    >
                        <option value="all">All</option>
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                    </select>
                </div>
            </div>

            <div className="flex justify-end">
                <Button onClick={handleFilter} size="sm">
                    Apply Filters
                </Button>
            </div>
        </div>
    );
}
