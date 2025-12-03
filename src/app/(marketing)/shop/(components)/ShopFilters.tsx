"use client";

import { useState } from "react";

interface FilterOption {
    label: string;
    value: string;
    count: number;
    color?: string;
}

interface ShopFiltersProps {
    onFiltersChange?: (filters: any) => void;
}

export function ShopFilters({ onFiltersChange }: ShopFiltersProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 99]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);

    const handleColorToggle = (color: string) => {
        const newColors = selectedColors.includes(color)
            ? selectedColors.filter(c => c !== color)
            : [...selectedColors, color];
        setSelectedColors(newColors);
    };

    const handleSizeToggle = (size: string) => {
        const newSizes = selectedSizes.includes(size)
            ? selectedSizes.filter(s => s !== size)
            : [...selectedSizes, size];
        setSelectedSizes(newSizes);
    };

    const handleBrandToggle = (brand: string) => {
        const newBrands = selectedBrands.includes(brand)
            ? selectedBrands.filter(b => b !== brand)
            : [...selectedBrands, brand];
        setSelectedBrands(newBrands);
    };

    const handleAvailabilityToggle = (availability: string) => {
        const newAvailability = selectedAvailability.includes(availability)
            ? selectedAvailability.filter(a => a !== availability)
            : [...selectedAvailability, availability];
        setSelectedAvailability(newAvailability);
    };

    const applyFilters = () => {
        if (onFiltersChange) {
            onFiltersChange({
                colors: selectedColors,
                sizes: selectedSizes,
                brands: selectedBrands,
                availability: selectedAvailability,
                priceRange
            });
        }
        setIsOpen(false);
    };

    const colorFilters: FilterOption[] = [
        { label: "Black", value: "black", count: 5, color: "#000000" },
        { label: "Blue", value: "blue", count: 7, color: "#87CEEB" },
        { label: "Brown", value: "brown", count: 2, color: "#8B4513" },
        { label: "Green", value: "green", count: 3, color: "#90EE90" },
        { label: "Grey", value: "grey", count: 1, color: "#808080" },
        { label: "Mint", value: "mint", count: 1, color: "#98FF98" },
    ];

    const sizeFilters: FilterOption[] = [
        { label: "S", value: "s", count: 15 },
        { label: "M", value: "m", count: 16 },
        { label: "L", value: "l", count: 12 },
        { label: "XL", value: "xl", count: 2 },
    ];

    const brandFilters: FilterOption[] = [
        { label: "Elessi", value: "elessi", count: 12 },
        { label: "Melianna", value: "melianna", count: 8 },
        { label: "Mervellie", value: "mervellie", count: 9 },
        { label: "Misara", value: "misara", count: 9 },
    ];

    const availabilityFilters: FilterOption[] = [
        { label: "In Stock", value: "in-stock", count: 37 },
        { label: "Out Of Stock", value: "out-of-stock", count: 1 },
    ];

    return (
        <div className="relative">
            {/* Filter Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-sm font-bold uppercase text-gray-900 hover:text-[#FF6B6B]"
            >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                </svg>
                <span>× Filters</span>
            </button>

            {/* Filter Panel - Dropdown below button */}
            {isOpen && (
                <div className="absolute left-0 top-full z-50 mt-2 w-[800px] bg-white shadow-xl">
                    {/* Filter Content - Horizontal Layout */}
                    <div className="grid grid-cols-4 gap-6 border-b border-gray-100 bg-gray-50 p-6">
                                {/* Color Filter */}
                                <div>
                                    <h3 className="mb-3 text-sm font-bold text-black">Color</h3>
                                    <div className="space-y-2.5">
                                        {colorFilters.map((filter) => (
                                            <button
                                                key={filter.value}
                                                className="flex w-full items-center gap-2 text-left hover:opacity-70"
                                                onClick={() => handleColorToggle(filter.color!)}
                                            >
                                                <div
                                                    className={`h-5 w-5 shrink-0 rounded-full border ${
                                                        selectedColors.includes(filter.color!)
                                                            ? "border-2 border-black"
                                                            : "border border-gray-300"
                                                    }`}
                                                    style={{ backgroundColor: filter.color }}
                                                ></div>
                                                <span className="flex-1 text-sm text-gray-700">
                                                    {filter.label}
                                                </span>
                                                <span className="text-xs text-gray-400">({filter.count})</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Size Filter */}
                                <div>
                                    <h3 className="mb-3 text-sm font-bold text-black">Size</h3>
                                    <div className="space-y-2.5">
                                        {sizeFilters.map((filter) => (
                                            <label key={filter.value} className="flex items-center gap-2 hover:opacity-70">
                                                <input 
                                                    type="checkbox" 
                                                    checked={selectedSizes.includes(filter.value)}
                                                    onChange={() => handleSizeToggle(filter.value)}
                                                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-0 focus:ring-offset-0" 
                                                />
                                                <span className="flex-1 text-sm text-gray-700">{filter.label}</span>
                                                <span className="text-xs text-gray-400">({filter.count})</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Brands Filter */}
                                <div>
                                    <h3 className="mb-3 text-sm font-bold text-black">Brands</h3>
                                    <div className="space-y-2.5">
                                        {brandFilters.map((filter) => (
                                            <label key={filter.value} className="flex items-center gap-2 hover:opacity-70">
                                                <input 
                                                    type="checkbox" 
                                                    checked={selectedBrands.includes(filter.value)}
                                                    onChange={() => handleBrandToggle(filter.value)}
                                                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-0 focus:ring-offset-0" 
                                                />
                                                <span className="flex-1 text-sm text-gray-700">{filter.label}</span>
                                                <span className="text-xs text-gray-400">({filter.count})</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Filter */}
                                <div>
                                    <h3 className="mb-3 text-sm font-bold text-black">Price</h3>
                                    <div className="space-y-3">
                                        <div className="relative h-1 rounded-full bg-gray-300">
                                            <div
                                                className="absolute h-full rounded-full bg-[#FF6B6B]"
                                                style={{
                                                    left: `${(priceRange[0] / 99) * 100}%`,
                                                    right: `${100 - (priceRange[1] / 99) * 100}%`,
                                                }}
                                            ></div>
                                            <input
                                                type="range"
                                                min="0"
                                                max="99"
                                                value={priceRange[0]}
                                                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                                                className="absolute inset-0 w-full opacity-0"
                                            />
                                            <input
                                                type="range"
                                                min="0"
                                                max="99"
                                                value={priceRange[1]}
                                                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                                className="absolute inset-0 w-full opacity-0"
                                            />
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            Price: ${priceRange[0]}.00 — ${priceRange[1]}.00
                                        </div>
                                        <button 
                                            onClick={applyFilters}
                                            className="w-full bg-black px-6 py-2 text-xs font-bold uppercase tracking-wide text-white hover:bg-gray-800"
                                        >
                                            FILTER
                                        </button>
                                    </div>
                                </div>
                            </div>

                    {/* Availability Section - Full Width Below */}
                    <div className="bg-white px-6 py-5">
                        <h3 className="mb-3 text-sm font-bold text-black">Availability</h3>
                        <div className="flex gap-6">
                            {availabilityFilters.map((filter) => (
                                <label key={filter.value} className="flex items-center gap-2 hover:opacity-70">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedAvailability.includes(filter.value)}
                                        onChange={() => handleAvailabilityToggle(filter.value)}
                                        className="h-4 w-4 rounded border-gray-300 text-black focus:ring-0 focus:ring-offset-0" 
                                    />
                                    <span className="text-sm text-gray-700">{filter.label}</span>
                                    <span className="text-xs text-gray-400">({filter.count})</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
