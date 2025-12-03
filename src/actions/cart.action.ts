"use server";

import { revalidatePath } from "next/cache";
import * as z from "zod";
import type { Cart, CartItem } from "@/types/cart";
import { AddToCartSchema, UpdateCartItemSchema } from "@/schemas/cart-schema";
import { getProductById } from "./product.action";

/**
 * Server Actions for Shopping Cart
 * Currently using MOCK DATA with localStorage simulation
 * TODO: Replace with actual API calls to NestJS backend
 */

type ActionResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

// Mock cart storage (simulates per-user cart)
let mockCart: Cart = {
  id: "cart-1",
  userId: undefined,
  items: [],
  subtotal: 0,
  tax: 0,
  shipping: 0,
  discount: 0,
  total: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const TAX_RATE = 0.1; // 10%
const FREE_SHIPPING_THRESHOLD = 100;
const SHIPPING_COST = 10;

function calculateTotals(cart: Cart): Cart {
  const subtotal = cart.items.reduce((sum, item) => sum + item.subtotal, 0);
  const tax = subtotal * TAX_RATE;
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : subtotal > 0 ? SHIPPING_COST : 0;
  const total = subtotal + tax + shipping - cart.discount;

  return {
    ...cart,
    subtotal,
    tax,
    shipping,
    total,
    updatedAt: new Date(),
  };
}

/**
 * Get current cart
 */
export async function getCart(): Promise<ActionResponse<Cart>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return { success: true, data: calculateTotals(mockCart) };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch cart",
    };
  }
}

/**
 * Add item to cart
 */
export async function addToCart(input: z.infer<typeof AddToCartSchema>): Promise<ActionResponse<Cart>> {
  try {
    const validated = AddToCartSchema.parse(input);
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Get product details
    const productResult = await getProductById(validated.productId);
    if (!productResult.success || !productResult.data) {
      return { success: false, error: "Product not found" };
    }

    const product = productResult.data;

    // Check if item already exists in cart
    const existingItemIndex = mockCart.items.findIndex((item) => item.productId === validated.productId);

    if (existingItemIndex >= 0) {
      // Update quantity
      mockCart.items[existingItemIndex].quantity += validated.quantity;
      mockCart.items[existingItemIndex].subtotal =
        mockCart.items[existingItemIndex].quantity * mockCart.items[existingItemIndex].price;
    } else {
      // Add new item
      const newItem: CartItem = {
        id: `item-${Date.now()}`,
        productId: product.id!,
        product: product as any,
        quantity: validated.quantity,
        price: product.price,
        subtotal: product.price * validated.quantity,
      };
      mockCart.items.push(newItem);
    }

    const updatedCart = calculateTotals(mockCart);
    revalidatePath("/cart");

    return { success: true, data: updatedCart };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message };
    }
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to add to cart",
    };
  }
}

/**
 * Update cart item quantity
 */
export async function updateCartItem(input: z.infer<typeof UpdateCartItemSchema>): Promise<ActionResponse<Cart>> {
  try {
    const validated = UpdateCartItemSchema.parse(input);
    await new Promise((resolve) => setTimeout(resolve, 300));

    const itemIndex = mockCart.items.findIndex((item) => item.id === validated.itemId);

    if (itemIndex === -1) {
      return { success: false, error: "Item not found in cart" };
    }

    if (validated.quantity === 0) {
      // Remove item
      mockCart.items.splice(itemIndex, 1);
    } else {
      // Update quantity
      mockCart.items[itemIndex].quantity = validated.quantity;
      mockCart.items[itemIndex].subtotal = mockCart.items[itemIndex].price * validated.quantity;
    }

    const updatedCart = calculateTotals(mockCart);
    revalidatePath("/cart");

    return { success: true, data: updatedCart };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message };
    }
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update cart",
    };
  }
}

/**
 * Remove item from cart
 */
export async function removeFromCart(itemId: string): Promise<ActionResponse<Cart>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const itemIndex = mockCart.items.findIndex((item) => item.id === itemId);

    if (itemIndex === -1) {
      return { success: false, error: "Item not found in cart" };
    }

    mockCart.items.splice(itemIndex, 1);
    const updatedCart = calculateTotals(mockCart);
    revalidatePath("/cart");

    return { success: true, data: updatedCart };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to remove item",
    };
  }
}

/**
 * Clear entire cart
 */
export async function clearCart(): Promise<ActionResponse<void>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300));

    mockCart.items = [];
    mockCart = calculateTotals(mockCart);
    revalidatePath("/cart");

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to clear cart",
    };
  }
}
