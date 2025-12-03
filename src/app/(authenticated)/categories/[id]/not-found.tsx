export default function CategoryNotFound() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Category Not Found</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          The category you're looking for doesn't exist.
        </p>
        <a
          href="/categories"
          className="mt-4 inline-block rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Back to Categories
        </a>
      </div>
    </div>
  );
}
