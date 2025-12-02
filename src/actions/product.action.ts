"use server";

import { revalidatePath } from "next/cache";
import * as z from "zod";
import type { Product, CreateProduct, UpdateProduct, ProductFilter } from "@/schemas/product-schema";
import { ProductSchema, CreateProductSchema, UpdateProductSchema } from "@/schemas/product-schema";

/**
 * Server Actions for Product Management
 * Currently using MOCK DATA for UI development
 * TODO: Replace with actual API calls to NestJS backend
 */

type ActionResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

// Mock data for UI development
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99,
    sku: "WH-001",
    category: "Electronics",
    stock: 50,
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"],
    isActive: true,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    name: "Coffee Maker",
    description: "Automatic drip coffee maker with programmable timer",
    price: 79.99,
    sku: "CM-002",
    category: "Home Appliances",
    stock: 30,
    images: ["https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400"],
    isActive: true,
    createdAt: new Date("2024-01-16"),
    updatedAt: new Date("2024-01-16"),
  },
  {
    id: "3",
    name: "Running Shoes",
    description: "Comfortable running shoes with excellent cushioning",
    price: 129.99,
    sku: "RS-003",
    category: "Sports",
    stock: 100,
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"],
    isActive: true,
    createdAt: new Date("2024-01-17"),
    updatedAt: new Date("2024-01-17"),
  },
  {
    id: "4",
    name: "Desk Lamp",
    description: "LED desk lamp with adjustable brightness",
    price: 45.00,
    sku: "DL-004",
    category: "Furniture",
    stock: 0,
    images: ["https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400"],
    isActive: false,
    createdAt: new Date("2024-01-18"),
    updatedAt: new Date("2024-01-18"),
  },
  {
    id: "5",
    name: "Yoga Mat",
    description: "Non-slip yoga mat with carrying strap",
    price: 35.00,
    sku: "YM-005",
    category: "Sports",
    stock: 75,
    images: ["https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400"],
    isActive: true,
    createdAt: new Date("2024-01-19"),
    updatedAt: new Date("2024-01-19"),
  },
];

/**
 * Get list of products with filtering and pagination
 */
export async function getProducts(
  filter?: ProductFilter
): Promise<ActionResponse<{ products: Product[]; total: number; page: number; limit: number }>> {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    let filteredProducts = [...mockProducts];

    // Apply filters
    if (filter?.search) {
      const search = filter.search.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(search) ||
          (p.description && p.description.toLowerCase().includes(search))
      );
    }

    if (filter?.category) {
      filteredProducts = filteredProducts.filter((p) => p.category === filter.category);
    }

    if (filter?.isActive !== undefined) {
      filteredProducts = filteredProducts.filter((p) => p.isActive === filter.isActive);
    }

    if (filter?.minPrice) {
      filteredProducts = filteredProducts.filter((p) => p.price >= filter.minPrice!);
    }

    if (filter?.maxPrice) {
      filteredProducts = filteredProducts.filter((p) => p.price <= filter.maxPrice!);
    }

    // Apply sorting
    if (filter?.sortBy) {
      filteredProducts.sort((a, b) => {
        const aValue = a[filter.sortBy as keyof Product];
        const bValue = b[filter.sortBy as keyof Product];
        const order = filter.sortOrder === "asc" ? 1 : -1;
        
        if (aValue === undefined && bValue === undefined) return 0;
        if (aValue === undefined) return 1;
        if (bValue === undefined) return -1;
        
        return aValue > bValue ? order : -order;
      });
    }

    // Apply pagination
    const page = filter?.page || 1;
    const limit = filter?.limit || 10;
    const start = (page - 1) * limit;
    const paginatedProducts = filteredProducts.slice(start, start + limit);

    return {
      success: true,
      data: {
        products: paginatedProducts,
        total: filteredProducts.length,
        page,
        limit,
      },
    };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Failed to fetch products" };
  }
}

/**
 * Get single product by ID
 */
export async function getProductById(id: string): Promise<ActionResponse<Product>> {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    const product = mockProducts.find((p) => p.id === id);

    if (!product) {
      return { success: false, error: "Product not found" };
    }

    return { success: true, data: product };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Failed to fetch product" };
  }
}

/**
 * Create new product
 */
export async function createProduct(productData: CreateProduct): Promise<ActionResponse<Product>> {
  try {
    // Validate input
    const validated = CreateProductSchema.parse(productData);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newProduct: Product = {
      id: String(mockProducts.length + 1),
      ...validated,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Product;

    mockProducts.push(newProduct);

    // Revalidate products list
    revalidatePath("/products");

    return { success: true, data: newProduct };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message };
    }
    return { success: false, error: error instanceof Error ? error.message : "Failed to create product" };
  }
}

/**
 * Update existing product
 */
export async function updateProduct(id: string | number, productData: Partial<Product>): Promise<ActionResponse<Product>> {
  try {
    // Validate input
    const validated = UpdateProductSchema.parse({ id, ...productData });

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const index = mockProducts.findIndex((p) => p.id === String(id));
    if (index === -1) {
      return { success: false, error: "Product not found" };
    }

    mockProducts[index] = {
      ...mockProducts[index],
      ...validated,
      updatedAt: new Date(),
    } as Product;

    // Revalidate all product-related paths
    revalidatePath("/products");
    revalidatePath(`/products/${id}/edit`);

    return { success: true, data: mockProducts[index] };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message };
    }
    return { success: false, error: error instanceof Error ? error.message : "Failed to update product" };
  }
}

/**
 * Delete product
 */
export async function deleteProduct(id: string): Promise<ActionResponse<void>> {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const index = mockProducts.findIndex((p) => p.id === id);
    if (index === -1) {
      return { success: false, error: "Product not found" };
    }

    mockProducts.splice(index, 1);

    // Revalidate products list
    revalidatePath("/products");

    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Failed to delete product" };
  }
}

/**
 * Toggle product active status
 */
export async function toggleProductStatus(id: string, isActive: boolean): Promise<ActionResponse<Product>> {
  return updateProduct(id, { isActive });
}
