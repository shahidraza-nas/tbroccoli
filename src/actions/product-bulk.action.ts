"use server";

import { revalidatePath } from "next/cache";
import { deleteProduct, updateProduct } from "./product.action";

type ActionResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

/**
 * Bulk delete products
 * Using mock data for UI development
 */
export async function bulkDeleteProducts(
  productIds: string[]
): Promise<ActionResponse<{ deleted: number }>> {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    let deletedCount = 0;
    for (const id of productIds) {
      const result = await deleteProduct(id);
      if (result.success) {
        deletedCount++;
      }
    }

    // Revalidate products list
    revalidatePath("/products");

    return { success: true, data: { deleted: deletedCount } };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete products",
    };
  }
}

/**
 * Bulk update product status
 * Using mock data for UI development
 */
export async function bulkUpdateProductStatus(
  productIds: string[],
  isActive: boolean
): Promise<ActionResponse<{ updated: number }>> {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    let updatedCount = 0;
    for (const id of productIds) {
      const result = await updateProduct(id, { isActive });
      if (result.success) {
        updatedCount++;
      }
    }

    // Revalidate products list
    revalidatePath("/products");

    return { success: true, data: { updated: updatedCount } };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update products",
    };
  }
}
