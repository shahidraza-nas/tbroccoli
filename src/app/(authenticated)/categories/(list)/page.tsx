import { getCategories } from "@/actions/category.action";
import { CategoryCard } from "@/components/categories/CategoryCard";
import Link from "next/link";

export default async function CategoriesPage() {
  const { success, data, error } = await getCategories({ sortBy: "order", sortOrder: "asc" });

  if (!success || !data) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Failed to load categories</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{error}</p>
        </div>
      </div>
    );
  }

  const { categories, total } = data;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Manage product categories ({total} total)
          </p>
        </div>
        <Link
          href="/categories/new"
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Add Category
        </Link>
      </div>

      {categories.length === 0 ? (
        <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800">
          <div className="text-center">
            <h3 className="text-lg font-semibold">No categories found</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Get started by creating your first category
            </p>
            <Link
              href="/categories/new"
              className="mt-4 inline-block rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Add Category
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.id}`}>
              <CategoryCard category={category} variant="list" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
