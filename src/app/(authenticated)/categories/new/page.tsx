import { CategoryForm } from "@/components/categories/CategoryForm";

export default function NewCategoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create Category</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Add a new product category
        </p>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <CategoryForm />
      </div>
    </div>
  );
}
