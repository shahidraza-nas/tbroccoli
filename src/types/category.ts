/**
 * Category Types
 */

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string; // For hierarchical categories
  parent?: Category;
  children?: Category[];
  productCount: number;
  isActive: boolean;
  order: number; // For manual sorting
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryFilter {
  search?: string;
  parentId?: string | null; // null for root categories
  isActive?: boolean;
  sortBy?: "name" | "order" | "productCount" | "createdAt";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export interface CategoryListResponse {
  categories: Category[];
  total: number;
  page: number;
  limit: number;
}

export interface CategoryTree extends Category {
  children: CategoryTree[];
}
