"use client";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const handlePageChange = (page: number) => {
        if (onPageChange && page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
                {[...Array(Math.min(totalPages, 4))].map((_, i) => {
                    const pageNum = i + 1;
                    const isActive = pageNum === currentPage;
                    
                    return (
                        <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                                isActive
                                    ? "bg-[#FF6B6B] text-white"
                                    : "border border-gray-300 text-gray-700 hover:border-black hover:text-black"
                            }`}
                        >
                            {pageNum}
                        </button>
                    );
                })}
                
                {totalPages > 4 && (
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage >= totalPages}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:border-black hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        →
                    </button>
                )}
            </div>
        </div>
    );
}
