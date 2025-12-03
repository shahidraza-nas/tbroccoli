import type { Product } from "./product";

/**
 * Shopping Cart Types
 */

export interface CartItem {
  id: string;
  productId: string;
  product: Product; // Denormalized product data
  quantity: number;
  price: number; // Price at time of adding
  subtotal: number; // quantity * price
}

export interface Cart {
  id: string;
  userId?: string; // null for guest carts
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartSummary {
  itemCount: number;
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
}
