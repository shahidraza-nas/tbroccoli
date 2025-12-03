import * as z from "zod";

/**
 * Category Validation Schemas
 */

export const CategorySchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1, "Category name is required").max(100),
  slug: z
    .string()
    .min(1, "Slug is required")
    .max(100)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens"),
  description: z.string().max(500).optional(),
  image: z.string().url("Must be a valid URL").optional(),
  parentId: z.string().uuid().optional(),
  isActive: z.boolean().default(true),
  order: z.number().int().min(0).default(0),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const CreateCategorySchema = CategorySchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateCategorySchema = CategorySchema.partial().required({
  id: true,
});

export const CategoryFilterSchema = z.object({
  search: z.string().optional(),
  parentId: z.string().uuid().optional().nullable(),
  isActive: z.boolean().optional(),
  sortBy: z.enum(["name", "order", "productCount", "createdAt"]).default("order"),
  sortOrder: z.enum(["asc", "desc"]).default("asc"),
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(50),
});

export type Category = z.infer<typeof CategorySchema>;
export type CreateCategory = z.infer<typeof CreateCategorySchema>;
export type UpdateCategory = z.infer<typeof UpdateCategorySchema>;
export type CategoryFilter = z.infer<typeof CategoryFilterSchema>;
