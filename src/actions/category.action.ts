"use server";

import { revalidatePath } from "next/cache";
import * as z from "zod";
import type { Category } from "@/types/category";
import { CreateCategorySchema, UpdateCategorySchema, CategoryFilterSchema } from "@/schemas/category-schema";

/**
 * Server Actions for Category Management
 * Currently using MOCK DATA for UI development
 * TODO: Replace with actual API calls to NestJS backend
 */

type ActionResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

// Mock data for UI development
const mockCategories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    slug: "electronics",
    description: "Electronic devices and accessories",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400",
    productCount: 15,
    isActive: true,
    order: 1,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    name: "Home Appliances",
    slug: "home-appliances",
    description: "Appliances for your home",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400",
    productCount: 8,
    isActive: true,
    order: 2,
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02"),
  },
  {
    id: "3",
    name: "Sports & Fitness",
    slug: "sports-fitness",
    description: "Sports equipment and fitness gear",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400",
    productCount: 12,
    isActive: true,
    order: 3,
    createdAt: new Date("2024-01-03"),
    updatedAt: new Date("2024-01-03"),
  },
  {
    id: "4",
    name: "Furniture",
    slug: "furniture",
    description: "Home and office furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
    productCount: 5,
    isActive: true,
    order: 4,
    createdAt: new Date("2024-01-04"),
    updatedAt: new Date("2024-01-04"),
  },
];

/**
 * Get list of categories with filtering
 */
export async function getCategories(filter?: Partial<z.infer<typeof CategoryFilterSchema>>): Promise<
  ActionResponse<{
    categories: Category[];
    total: number;
    page: number;
    limit: number;
  }>
> {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    let filteredCategories = [...mockCategories];

    // Apply filters
    if (filter?.search) {
      const search = filter.search.toLowerCase();
      filteredCategories = filteredCategories.filter(
        (c) => c.name.toLowerCase().includes(search) || (c.description && c.description.toLowerCase().includes(search))
      );
    }

    if (filter?.isActive !== undefined) {
      filteredCategories = filteredCategories.filter((c) => c.isActive === filter.isActive);
    }

    if (filter?.parentId !== undefined) {
      filteredCategories = filteredCategories.filter((c) => c.parentId === filter.parentId);
    }

    // Apply sorting
    if (filter?.sortBy) {
      filteredCategories.sort((a, b) => {
        const aValue = a[filter.sortBy as keyof Category];
        const bValue = b[filter.sortBy as keyof Category];
        const order = filter.sortOrder === "asc" ? 1 : -1;

        if (aValue === undefined && bValue === undefined) return 0;
        if (aValue === undefined) return 1;
        if (bValue === undefined) return -1;

        return aValue > bValue ? order : -order;
      });
    }

    // Apply pagination
    const page = filter?.page || 1;
    const limit = filter?.limit || 50;
    const start = (page - 1) * limit;
    const paginatedCategories = filteredCategories.slice(start, start + limit);

    return {
      success: true,
      data: {
        categories: paginatedCategories,
        total: filteredCategories.length,
        page,
        limit,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch categories",
    };
  }
}

/**
 * Get single category by ID
 */
export async function getCategoryById(id: string): Promise<ActionResponse<Category>> {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 200));

    const category = mockCategories.find((c) => c.id === id);

    if (!category) {
      return { success: false, error: "Category not found" };
    }

    return { success: true, data: category };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch category",
    };
  }
}

/**
 * Get category by slug
 */
export async function getCategoryBySlug(slug: string): Promise<ActionResponse<Category>> {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 200));

    const category = mockCategories.find((c) => c.slug === slug);

    if (!category) {
      return { success: false, error: "Category not found" };
    }

    return { success: true, data: category };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch category",
    };
  }
}

/**
 * Create new category
 */
export async function createCategory(categoryData: z.infer<typeof CreateCategorySchema>): Promise<ActionResponse<Category>> {
  try {
    // Validate input
    const validated = CreateCategorySchema.parse(categoryData);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Check for duplicate slug
    const existing = mockCategories.find((c) => c.slug === validated.slug);
    if (existing) {
      return { success: false, error: "Category with this slug already exists" };
    }

    const newCategory: Category = {
      id: String(mockCategories.length + 1),
      ...validated,
      productCount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Category;

    mockCategories.push(newCategory);

    // Revalidate categories list
    revalidatePath("/categories");

    return { success: true, data: newCategory };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message };
    }
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create category",
    };
  }
}

/**
 * Update existing category
 */
export async function updateCategory(
  id: string,
  categoryData: Partial<Category>
): Promise<ActionResponse<Category>> {
  try {
    // Validate input
    const validated = UpdateCategorySchema.parse({ id, ...categoryData });

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const index = mockCategories.findIndex((c) => c.id === id);
    if (index === -1) {
      return { success: false, error: "Category not found" };
    }

    // Check for duplicate slug
    if (validated.slug) {
      const existing = mockCategories.find((c) => c.slug === validated.slug && c.id !== id);
      if (existing) {
        return { success: false, error: "Category with this slug already exists" };
      }
    }

    mockCategories[index] = {
      ...mockCategories[index],
      ...validated,
      updatedAt: new Date(),
    } as Category;

    // Revalidate paths
    revalidatePath("/categories");
    revalidatePath(`/categories/${id}`);

    return { success: true, data: mockCategories[index] };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message };
    }
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update category",
    };
  }
}

/**
 * Delete category
 */
export async function deleteCategory(id: string): Promise<ActionResponse<void>> {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const index = mockCategories.findIndex((c) => c.id === id);
    if (index === -1) {
      return { success: false, error: "Category not found" };
    }

    // Check if category has products
    if (mockCategories[index].productCount > 0) {
      return {
        success: false,
        error: "Cannot delete category with products. Please reassign products first.",
      };
    }

    mockCategories.splice(index, 1);

    // Revalidate categories list
    revalidatePath("/categories");

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete category",
    };
  }
}

/**
 * Toggle category active status
 */
export async function toggleCategoryStatus(id: string, isActive: boolean): Promise<ActionResponse<Category>> {
  return updateCategory(id, { isActive });
}
