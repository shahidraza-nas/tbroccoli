export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
            {/* Minimal header for checkout */}
            <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
                <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <a href="/" className="text-xl font-bold">
                        TBroccoli
                    </a>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">Secure Checkout</div>
                </div>
            </header>

            {/* Main content */}
            <main className="container mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
        </div>
    );
}
