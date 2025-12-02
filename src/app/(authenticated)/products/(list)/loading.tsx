/**
 * Loading skeleton for products list page
 */
export default function ProductsListLoading() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <div className="h-9 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                    <div className="mt-2 h-4 w-64 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                </div>
                <div className="h-10 w-32 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <div className="rounded-lg border border-zinc-200 dark:border-zinc-800">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                    Product
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                    SKU
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                    Price
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                    Stock
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                            {[...Array(5)].map((_, i) => (
                                <tr key={i}>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="space-y-2">
                                            <div className="h-4 w-40 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                                            <div className="h-3 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="h-4 w-20 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="h-4 w-16 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="h-4 w-12 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="h-6 w-16 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right">
                                        <div className="ml-auto h-4 w-8 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
