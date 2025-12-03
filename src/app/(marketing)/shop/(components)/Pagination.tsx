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
        <div className="mt-16 flex justify-center">
            <div className="flex gap-2">
                {[...Array(Math.min(totalPages, 4))].map((_, i) => {
                    const pageNum = i + 1;
                    const isActive = pageNum === currentPage;
                    
                    return (
                        <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all ${
                                isActive
                                    ? "bg-[#FF6B6B] text-white shadow-md"
                                    : "text-gray-700 hover:text-[#FF6B6B]"
                            }`}
                        >
                            {pageNum}
                        </button>
                    );
                })}
                
                {totalPages > 4 && (
                    <>
                        <button
                            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                            disabled={currentPage >= totalPages}
                            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 hover:text-[#FF6B6B] disabled:cursor-not-allowed disabled:opacity-30"
                        >
                            →
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
