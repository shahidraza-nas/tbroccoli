export default function CustomerLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Header */}
            <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
                <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <a href="/" className="text-xl font-bold">
                        TBroccoli
                    </a>
                    <div className="flex items-center gap-4">
                        <a
                            href="/shop"
                            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                        >
                            Continue Shopping
                        </a>
                    </div>
                </div>
            </header>

            <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
                    {/* Sidebar navigation */}
                    <aside className="space-y-1">
                        <h2 className="mb-4 text-lg font-semibold">My Account</h2>
                        <nav className="space-y-1">
                            <a
                                href="/account"
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                            >
                                Overview
                            </a>
                            <a
                                href="/account/orders"
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                            >
                                Orders
                            </a>
                            <a
                                href="/account/profile"
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                            >
                                Profile
                            </a>
                            <a
                                href="/account/addresses"
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                            >
                                Addresses
                            </a>
                            <a
                                href="/account/settings"
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                            >
                                Settings
                            </a>
                        </nav>
                        <div className="pt-4">
                            <a
                                href="/auth/login"
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950"
                            >
                                Sign Out
                            </a>
                        </div>
                    </aside>

                    {/* Main content */}
                    <main>{children}</main>
                </div>
            </div>
        </div>
    );
}
