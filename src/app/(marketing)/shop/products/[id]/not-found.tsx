export default function ProductNotFound() {
    return (
        <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-semibold">Product Not Found</h2>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    The product you're looking for doesn't exist or is no longer available.
                </p>
                <a
                    href="/shop"
                    className="mt-4 inline-block rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                    Continue Shopping
                </a>
            </div>
        </div>
    );
}
