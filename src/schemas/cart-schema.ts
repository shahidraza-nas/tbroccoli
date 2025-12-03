import * as z from "zod";

/**
 * Cart Validation Schemas
 */

export const CartItemSchema = z.object({
  id: z.string().uuid(),
  productId: z.string().uuid(),
  quantity: z.number().int().min(1).max(999),
  price: z.number().min(0),
  subtotal: z.number().min(0),
});

export const AddToCartSchema = z.object({
  productId: z.string().uuid(),
  quantity: z.number().int().min(1).max(999).default(1),
});

export const UpdateCartItemSchema = z.object({
  itemId: z.string().uuid(),
  quantity: z.number().int().min(0).max(999), // 0 to remove item
});

export const CartSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid().optional(),
  items: z.array(CartItemSchema),
  subtotal: z.number().min(0),
  tax: z.number().min(0),
  shipping: z.number().min(0),
  discount: z.number().min(0).default(0),
  total: z.number().min(0),
});

export type AddToCart = z.infer<typeof AddToCartSchema>;
export type UpdateCartItem = z.infer<typeof UpdateCartItemSchema>;
