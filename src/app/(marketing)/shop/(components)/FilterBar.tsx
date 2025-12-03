"use client";

export function FilterBar() {
    return (
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            {/* Filter Button */}
            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                </svg>
                FILTERS
            </button>

            {/* View Options */}
            <div className="flex items-center gap-4">
                {/* Grid View Icons */}
                <div className="flex gap-2">
                    <GridViewButton cols={1} active={false} />
                    <GridViewButton cols={2} active={false} />
                    <GridViewButton cols={3} active={false} />
                    <GridViewButton cols={4} active={true} />
                    <GridViewButton cols={5} active={false} />
                    <GridViewButton cols={6} active={false} />
                </div>

                {/* Sort Dropdown */}
                <select className="border border-gray-300 bg-white px-3 py-2 text-sm text-black focus:border-black focus:outline-none">
                    <option>FEATURED</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                    <option>Best Selling</option>
                </select>
            </div>
        </div>
    );
}

function GridViewButton({ cols, active }: { cols: number; active: boolean }) {
    const items = cols * cols;
    const gridCols = `grid-cols-${cols}`;
    
    return (
        <button className={`p-1 ${active ? "opacity-100" : "opacity-50 hover:opacity-75"}`}>
            <div className={`grid ${gridCols} gap-0.5`}>
                {[...Array(Math.min(items, 36))].map((_, i) => (
                    <div
                        key={i}
                        className={`bg-gray-400 ${
                            cols === 1 ? "h-2 w-8" :
                            cols === 2 ? "h-1.5 w-1.5" :
                            cols === 3 ? "h-1 w-1" :
                            "h-0.5 w-0.5"
                        }`}
                    ></div>
                ))}
            </div>
        </button>
    );
}
