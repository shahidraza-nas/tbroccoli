import * as z from "zod";

/**
 * Customer Validation Schemas
 */

export const CustomerSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email("Valid email is required"),
  name: z.string().min(2, "Name is required").max(100),
  phone: z.string().min(10).max(20).optional(),
  avatarUrl: z.string().url().optional(),
  isActive: z.boolean().default(true),
});

export const UpdateProfileSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  phone: z.string().min(10).max(20).optional(),
});

export const CustomerFilterSchema = z.object({
  search: z.string().optional(),
  isActive: z.boolean().optional(),
  sortBy: z.enum(["name", "totalOrders", "totalSpent", "createdAt"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(10),
});

export type UpdateProfile = z.infer<typeof UpdateProfileSchema>;
export type CustomerFilter = z.infer<typeof CustomerFilterSchema>;
