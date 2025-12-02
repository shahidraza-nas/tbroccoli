/**
 * Loading skeleton for product edit page
 */
export default function ProductEditLoading() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <div className="h-9 w-48 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="mt-2 h-4 w-64 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="space-y-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
              <div className="h-10 w-full animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
            </div>
          ))}
          <div className="flex justify-end gap-3 pt-4">
            <div className="h-10 w-24 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-10 w-24 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>
      </div>
    </div>
  );
}
