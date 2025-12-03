"use client";

import { ShopFilters } from "./ShopFilters";
import { useState } from "react";

interface AppliedFilters {
    colors?: string[];
    sizes?: string[];
    brands?: string[];
    availability?: string[];
    priceRange?: number[];
}

interface FilterBarProps {
    onGridChange?: (cols: number) => void;
}

export function FilterBar({ onGridChange }: FilterBarProps) {
    const [appliedFilters, setAppliedFilters] = useState<AppliedFilters>({});
    const [gridCols, setGridCols] = useState(3);

    const hasFilters = 
        (appliedFilters.colors?.length || 0) > 0 ||
        (appliedFilters.sizes?.length || 0) > 0 ||
        (appliedFilters.brands?.length || 0) > 0 ||
        (appliedFilters.availability?.length || 0) > 0;

    const handleClearAll = () => {
        setAppliedFilters({});
    };

    const handleGridChange = (cols: number) => {
        setGridCols(cols);
        if (onGridChange) {
            onGridChange(cols);
        }
    };

    return (
        <>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-6">
                {/* Filter Button */}
                <ShopFilters onFiltersChange={setAppliedFilters} />

                {/* View Options */}
                <div className="flex items-center gap-3">
                    {/* Grid View Icons */}
                    <div className="flex items-center gap-1.5">
                        <GridViewButton cols={2} active={gridCols === 2} onClick={() => handleGridChange(2)} />
                        <GridViewButton cols={3} active={gridCols === 3} onClick={() => handleGridChange(3)} />
                        <GridViewButton cols={4} active={gridCols === 4} onClick={() => handleGridChange(4)} />
                        <GridViewButton cols={5} active={gridCols === 5} onClick={() => handleGridChange(5)} />
                        <GridViewButton cols={6} active={gridCols === 6} onClick={() => handleGridChange(6)} />
                    </div>

                    {/* Sort Dropdown */}
                    <select className="border-0 bg-transparent text-sm uppercase text-gray-700 focus:outline-none">
                        <option>FEATURED</option>
                        <option>PRICE: LOW TO HIGH</option>
                        <option>PRICE: HIGH TO LOW</option>
                        <option>NEWEST</option>
                        <option>BEST SELLING</option>
                    </select>
                </div>
            </div>

            {/* Applied Filters Info Bar */}
            {hasFilters && (
                <div className="mb-6 flex items-center justify-between rounded-sm border border-gray-200 bg-white px-4 py-3">
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-black">
                            38 Products Found
                        </span>
                        {appliedFilters.priceRange && (
                            <>
                                <span className="text-gray-300">|</span>
                                <span className="text-sm text-gray-600">
                                    ${appliedFilters.priceRange[0]}.00-${appliedFilters.priceRange[1]}.00
                                </span>
                            </>
                        )}
                    </div>
                    <button 
                        onClick={handleClearAll}
                        className="text-xs text-gray-600 hover:text-black"
                    >
                        Clear all
                    </button>
                </div>
            )}
        </>
    );
}

function GridViewButton({ cols, active, onClick }: { cols: number; active: boolean; onClick: () => void }) {
    // Create proper grid layout based on column count
    const renderGrid = () => {
        switch (cols) {
            case 2:
                return (
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                        <rect x="1" y="1" width="6" height="6" fill="currentColor" />
                        <rect x="9" y="1" width="6" height="6" fill="currentColor" />
                        <rect x="1" y="9" width="6" height="6" fill="currentColor" />
                        <rect x="9" y="9" width="6" height="6" fill="currentColor" />
                    </svg>
                );
            case 3:
                return (
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                        <rect x="1" y="1" width="4" height="4" fill="currentColor" />
                        <rect x="6" y="1" width="4" height="4" fill="currentColor" />
                        <rect x="11" y="1" width="4" height="4" fill="currentColor" />
                        <rect x="1" y="6" width="4" height="4" fill="currentColor" />
                        <rect x="6" y="6" width="4" height="4" fill="currentColor" />
                        <rect x="11" y="6" width="4" height="4" fill="currentColor" />
                        <rect x="1" y="11" width="4" height="4" fill="currentColor" />
                        <rect x="6" y="11" width="4" height="4" fill="currentColor" />
                        <rect x="11" y="11" width="4" height="4" fill="currentColor" />
                    </svg>
                );
            case 4:
                return (
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                        <rect x="1" y="1" width="3" height="3" fill="currentColor" />
                        <rect x="5" y="1" width="3" height="3" fill="currentColor" />
                        <rect x="9" y="1" width="3" height="3" fill="currentColor" />
                        <rect x="13" y="1" width="2" height="3" fill="currentColor" />
                        <rect x="1" y="5" width="3" height="3" fill="currentColor" />
                        <rect x="5" y="5" width="3" height="3" fill="currentColor" />
                        <rect x="9" y="5" width="3" height="3" fill="currentColor" />
                        <rect x="13" y="5" width="2" height="3" fill="currentColor" />
                        <rect x="1" y="9" width="3" height="3" fill="currentColor" />
                        <rect x="5" y="9" width="3" height="3" fill="currentColor" />
                        <rect x="9" y="9" width="3" height="3" fill="currentColor" />
                        <rect x="13" y="9" width="2" height="3" fill="currentColor" />
                        <rect x="1" y="13" width="3" height="2" fill="currentColor" />
                        <rect x="5" y="13" width="3" height="2" fill="currentColor" />
                        <rect x="9" y="13" width="3" height="2" fill="currentColor" />
                        <rect x="13" y="13" width="2" height="2" fill="currentColor" />
                    </svg>
                );
            case 5:
                return (
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                        <rect x="1" y="1" width="2.4" height="2.4" fill="currentColor" />
                        <rect x="4" y="1" width="2.4" height="2.4" fill="currentColor" />
                        <rect x="7" y="1" width="2.4" height="2.4" fill="currentColor" />
                        <rect x="10" y="1" width="2.4" height="2.4" fill="currentColor" />
                        <rect x="13" y="1" width="2" height="2.4" fill="currentColor" />
                        <rect x="1" y="4" width="2.4" height="2.4" fill="currentColor" />
                        <rect x="4" y="4" width="2.4" height="2.4" fill="currentColor" />
                        <rect x="7" y="4" width="2.4" height="2.4" fill="currentColor" />
                        <rect x="10" y="4" width="2.4" height="2.4" fill="currentColor" />
                        <rect x="13" y="4" width="2" height="2.4" fill="currentColor" />
                        <rect x="1" y="7" width="2.4" height="2.4" fill="currentColor" />
                        <rect x="4" y="7" width="2.4" height="2.4" fill="currentColor" />
                        <rect x="7" y="7" width="2.4" height="2.4" fill="currentColor" />
                        <rect x="10" y="7" width="2.4" height="2.4" fill="currentColor" />
                        <rect x="13" y="7" width="2" height="2.4" fill="currentColor" />
                        <rect x="1" y="10" width="2.4" height="2.4" fill="currentColor" />
                        <rect x="4" y="10" width="2.4" height="2.4" fill="currentColor" />
                        <rect x="7" y="10" width="2.4" height="2.4" fill="currentColor" />
                        <rect x="10" y="10" width="2.4" height="2.4" fill="currentColor" />
                        <rect x="13" y="10" width="2" height="2.4" fill="currentColor" />
                        <rect x="1" y="13" width="2.4" height="2" fill="currentColor" />
                        <rect x="4" y="13" width="2.4" height="2" fill="currentColor" />
                        <rect x="7" y="13" width="2.4" height="2" fill="currentColor" />
                        <rect x="10" y="13" width="2.4" height="2" fill="currentColor" />
                        <rect x="13" y="13" width="2" height="2" fill="currentColor" />
                    </svg>
                );
            case 6:
                return (
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                        <rect x="1" y="1" width="2" height="2" fill="currentColor" />
                        <rect x="3.5" y="1" width="2" height="2" fill="currentColor" />
                        <rect x="6" y="1" width="2" height="2" fill="currentColor" />
                        <rect x="8.5" y="1" width="2" height="2" fill="currentColor" />
                        <rect x="11" y="1" width="2" height="2" fill="currentColor" />
                        <rect x="13.5" y="1" width="1.5" height="2" fill="currentColor" />
                        <rect x="1" y="3.5" width="2" height="2" fill="currentColor" />
                        <rect x="3.5" y="3.5" width="2" height="2" fill="currentColor" />
                        <rect x="6" y="3.5" width="2" height="2" fill="currentColor" />
                        <rect x="8.5" y="3.5" width="2" height="2" fill="currentColor" />
                        <rect x="11" y="3.5" width="2" height="2" fill="currentColor" />
                        <rect x="13.5" y="3.5" width="1.5" height="2" fill="currentColor" />
                        <rect x="1" y="6" width="2" height="2" fill="currentColor" />
                        <rect x="3.5" y="6" width="2" height="2" fill="currentColor" />
                        <rect x="6" y="6" width="2" height="2" fill="currentColor" />
                        <rect x="8.5" y="6" width="2" height="2" fill="currentColor" />
                        <rect x="11" y="6" width="2" height="2" fill="currentColor" />
                        <rect x="13.5" y="6" width="1.5" height="2" fill="currentColor" />
                        <rect x="1" y="8.5" width="2" height="2" fill="currentColor" />
                        <rect x="3.5" y="8.5" width="2" height="2" fill="currentColor" />
                        <rect x="6" y="8.5" width="2" height="2" fill="currentColor" />
                        <rect x="8.5" y="8.5" width="2" height="2" fill="currentColor" />
                        <rect x="11" y="8.5" width="2" height="2" fill="currentColor" />
                        <rect x="13.5" y="8.5" width="1.5" height="2" fill="currentColor" />
                        <rect x="1" y="11" width="2" height="2" fill="currentColor" />
                        <rect x="3.5" y="11" width="2" height="2" fill="currentColor" />
                        <rect x="6" y="11" width="2" height="2" fill="currentColor" />
                        <rect x="8.5" y="11" width="2" height="2" fill="currentColor" />
                        <rect x="11" y="11" width="2" height="2" fill="currentColor" />
                        <rect x="13.5" y="11" width="1.5" height="2" fill="currentColor" />
                        <rect x="1" y="13.5" width="2" height="1.5" fill="currentColor" />
                        <rect x="3.5" y="13.5" width="2" height="1.5" fill="currentColor" />
                        <rect x="6" y="13.5" width="2" height="1.5" fill="currentColor" />
                        <rect x="8.5" y="13.5" width="2" height="1.5" fill="currentColor" />
                        <rect x="11" y="13.5" width="2" height="1.5" fill="currentColor" />
                        <rect x="13.5" y="13.5" width="1.5" height="1.5" fill="currentColor" />
                    </svg>
                );
            default:
                return null;
        }
    };
    
    return (
        <button 
            onClick={onClick} 
            className={`p-2 transition-colors ${
                active 
                    ? "text-gray-900" 
                    : "text-gray-400 hover:text-gray-600"
            }`}
            aria-label={`${cols} column view`}
        >
            {renderGrid()}
        </button>
    );
}
