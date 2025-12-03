import { Skeleton } from "@/components/ui/skeleton";

export default function ShopLoading() {
    return (
        <div className="min-h-screen">
            {/* Hero Skeleton */}
            <section className="bg-zinc-50 dark:bg-zinc-950">
                <div className="container mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
                    <Skeleton className="mx-auto h-12 w-3/4" />
                    <Skeleton className="mx-auto mt-6 h-6 w-1/2" />
                    <div className="mt-8 flex justify-center gap-4">
                        <Skeleton className="h-12 w-40" />
                        <Skeleton className="h-12 w-40" />
                    </div>
                </div>
            </section>

            {/* Categories Skeleton */}
            <section className="py-16">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Skeleton className="h-8 w-64" />
                    <Skeleton className="mt-2 h-5 w-96" />
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[...Array(4)].map((_, i) => (
                            <Skeleton key={i} className="h-80 w-full" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Skeleton */}
            <section className="bg-zinc-50 py-16 dark:bg-zinc-950">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Skeleton className="h-8 w-64" />
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[...Array(8)].map((_, i) => (
                            <Skeleton key={i} className="h-96 w-full" />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
