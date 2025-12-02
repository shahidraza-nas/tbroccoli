import * as z from "zod";

/**
 * Product validation schemas using Zod
 */

export const ProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1, "Product name is required").max(200),
  description: z.string().optional(),
  price: z.number().min(0, "Price must be positive"),
  sku: z.string().min(1, "SKU is required"),
  category: z.string().optional(),
  stock: z.number().int().min(0, "Stock must be non-negative").optional(),
  images: z.array(z.string().url()).optional(),
  isActive: z.boolean().default(true),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const CreateProductSchema = ProductSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateProductSchema = ProductSchema.partial().required({
  id: true,
});

export const ProductFilterSchema = z.object({
  search: z.string().optional(),
  category: z.string().optional(),
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
  isActive: z.boolean().optional(),
  sortBy: z.enum(["name", "price", "createdAt", "updatedAt"]).optional(),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(10),
});

export type Product = z.infer<typeof ProductSchema>;
export type CreateProduct = z.infer<typeof CreateProductSchema>;
export type UpdateProduct = z.infer<typeof UpdateProductSchema>;
export type ProductFilter = z.infer<typeof ProductFilterSchema>;
