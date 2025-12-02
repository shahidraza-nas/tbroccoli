export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            TBroccoli
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Modern product management system built with Next.js 16, React 19, and Tailwind CSS 4
          </p>
          <div className="mt-10 flex gap-4">
            <a
              href="/products"
              className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              View Products
            </a>
            <a
              href="/dashboard"
              className="rounded-lg border border-zinc-200 px-6 py-3 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              Dashboard

              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
