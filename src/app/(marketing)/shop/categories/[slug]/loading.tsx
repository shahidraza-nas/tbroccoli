export default function CategoryLoading() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Skeleton */}
            <section className="bg-gray-50 py-12">
                <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <div className="mx-auto h-10 w-48 animate-pulse bg-gray-200 rounded"></div>
                    <div className="mx-auto mt-2 h-4 w-32 animate-pulse bg-gray-200 rounded"></div>
                </div>
            </section>

            {/* Content Skeleton */}
            <section className="py-12">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Filter Bar Skeleton */}
                    <div className="mb-8 flex items-center justify-between">
                        <div className="h-10 w-24 animate-pulse bg-gray-200 rounded"></div>
                        <div className="h-10 w-32 animate-pulse bg-gray-200 rounded"></div>
                    </div>

                    {/* Product Grid Skeleton */}
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="space-y-4">
                                <div className="aspect-square animate-pulse bg-gray-200 rounded"></div>
                                <div className="h-4 w-3/4 animate-pulse bg-gray-200 rounded"></div>
                                <div className="h-4 w-1/2 animate-pulse bg-gray-200 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
