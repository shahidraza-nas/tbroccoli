import { getCategoryById } from "@/actions/category.action";
import { CategoryForm } from "@/components/categories/CategoryForm";
import { notFound } from "next/navigation";

export default async function EditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { success, data: category, error } = await getCategoryById(id);

  if (!success || !category) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Category</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Update category information
        </p>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <CategoryForm category={category} />
      </div>
    </div>
  );
}
