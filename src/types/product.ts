/**
 * Product type definitions
 * These types match the API responses from NestJS backend
 */

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  sku: string;
  category?: string;
  stock?: number;
  images?: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductListResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ProductFilter {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  isActive?: boolean;
  sortBy?: "name" | "price" | "createdAt" | "updatedAt";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export interface CreateProductDto {
  name: string;
  description?: string;
  price: number;
  sku: string;
  category?: string;
  stock?: number;
  images?: string[];
  isActive?: boolean;
}

export interface UpdateProductDto extends Partial<CreateProductDto> {
  id: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  productCount?: number;
}

/**
 * Table column configuration type
 */
export interface TableColumn<T = any> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  width?: string;
  align?: "left" | "center" | "right";
  render?: (value: any, item: T) => React.ReactNode;
}
