"use client";

import { useState } from "react";
import { FilterBar } from "./FilterBar";
import { ProductGrid } from "./ProductGrid";
import { Pagination } from "./Pagination";

interface ShopClientProps {
    products: any[];
    totalPages: number;
}

export function ShopClient({ products, totalPages }: ShopClientProps) {
    const [gridCols, setGridCols] = useState(3);

    return (
        <>
            <FilterBar onGridChange={setGridCols} />
            <ProductGrid products={products} gridCols={gridCols} />
            <Pagination currentPage={1} totalPages={totalPages} />
        </>
    );
}
