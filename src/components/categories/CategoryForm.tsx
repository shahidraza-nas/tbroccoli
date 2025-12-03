"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Category } from "@/types/category";
import { CreateCategorySchema, UpdateCategorySchema } from "@/schemas/category-schema";
import type { CreateCategory, UpdateCategory } from "@/schemas/category-schema";
import { createCategory, updateCategory } from "@/actions/category.action";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface CategoryFormProps {
  category?: Category;
  onSuccess?: () => void;
}

export function CategoryForm({ category, onSuccess }: CategoryFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEditMode = !!category;
  const schema = isEditMode ? UpdateCategorySchema : CreateCategorySchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<any>({
    resolver: zodResolver(schema),
    defaultValues: category
      ? {
          id: category.id,
          name: category.name,
          slug: category.slug,
          description: category.description || "",
          image: category.image || "",
          isActive: category.isActive,
          order: category.order,
        }
      : {
          name: "",
          slug: "",
          description: "",
          image: "",
          isActive: true,
          order: 0,
        },
  });

  // Auto-generate slug from name
  const name = watch("name");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isEditMode) {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setValue("slug", slug);
    }
  };

  const onSubmit = async (data: CreateCategory | UpdateCategory) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const result = isEditMode
        ? await updateCategory(category.id, data as Partial<Category>)
        : await createCategory(data as CreateCategory);

      if (!result.success) {
        setError(result.error || "An error occurred");
        return;
      }

      if (onSuccess) {
        onSuccess();
      } else {
        router.push("/categories");
        router.refresh();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <Alert variant="danger">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" required>
            Category Name
          </Label>
          <Input
            id="name"
            {...register("name")}
            onChange={(e) => {
              register("name").onChange(e);
              handleNameChange(e);
            }}
            placeholder="e.g., Electronics"
          />
          {errors.name && <p className="text-sm text-red-500">{String(errors.name.message)}</p>}
        </div>

        {/* Slug */}
        <div className="space-y-2">
          <Label htmlFor="slug" required>
            URL Slug
          </Label>
          <Input
            id="slug"
            {...register("slug")}
            placeholder="e.g., electronics"
            readOnly={isEditMode}
            className={isEditMode ? "bg-zinc-100 dark:bg-zinc-900" : ""}
          />
          {errors.slug && <p className="text-sm text-red-500">{String(errors.slug.message)}</p>}
          <p className="text-xs text-zinc-500">Used in category URL. Auto-generated from name.</p>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          {...register("description")}
          placeholder="Brief description of this category..."
          rows={3}
        />
        {errors.description && <p className="text-sm text-red-500">{String(errors.description.message)}</p>}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Image URL */}
        <div className="space-y-2">
          <Label htmlFor="image">Image URL</Label>
          <Input id="image" {...register("image")} placeholder="https://example.com/image.jpg" />
          {errors.image && <p className="text-sm text-red-500">{String(errors.image.message)}</p>}
        </div>

        {/* Order */}
        <div className="space-y-2">
          <Label htmlFor="order">Display Order</Label>
          <Input
            id="order"
            type="number"
            {...register("order", { valueAsNumber: true })}
            placeholder="0"
          />
          {errors.order && <p className="text-sm text-red-500">{String(errors.order.message)}</p>}
          <p className="text-xs text-zinc-500">Lower numbers appear first</p>
        </div>
      </div>

      {/* Active Status */}
      <div className="space-y-2">
        <Checkbox id="isActive" {...register("isActive")} label="Active (visible to customers)" />
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : isEditMode ? "Update Category" : "Create Category"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
