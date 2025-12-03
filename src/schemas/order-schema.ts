import * as z from "zod";

/**
 * Order Validation Schemas
 */

export const ShippingAddressSchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(100),
  addressLine1: z.string().min(5, "Address is required").max(200),
  addressLine2: z.string().max(200).optional(),
  city: z.string().min(2, "City is required").max(100),
  state: z.string().min(2, "State is required").max(100),
  postalCode: z.string().min(3, "Postal code is required").max(20),
  country: z.string().min(2, "Country is required").max(100),
  phone: z.string().min(10, "Valid phone number is required").max(20),
});

export const OrderItemSchema = z.object({
  productId: z.string().uuid(),
  quantity: z.number().int().min(1).max(999),
  price: z.number().min(0),
});

export const CreateOrderSchema = z.object({
  items: z.array(OrderItemSchema).min(1, "At least one item is required"),
  shippingAddress: ShippingAddressSchema,
  billingAddress: ShippingAddressSchema.optional(),
  paymentMethod: z.string().min(1, "Payment method is required"),
  notes: z.string().max(500).optional(),
});

export const UpdateOrderStatusSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(["pending", "processing", "shipped", "delivered", "cancelled", "refunded"]),
  notes: z.string().max(500).optional(),
});

export const OrderFilterSchema = z.object({
  status: z.enum(["pending", "processing", "shipped", "delivered", "cancelled", "refunded"]).optional(),
  paymentStatus: z.enum(["pending", "paid", "failed", "refunded"]).optional(),
  customerId: z.string().uuid().optional(),
  dateFrom: z.string().optional(),
  dateTo: z.string().optional(),
  search: z.string().optional(),
  sortBy: z.enum(["createdAt", "total", "status"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(10),
});

export type ShippingAddress = z.infer<typeof ShippingAddressSchema>;
export type CreateOrder = z.infer<typeof CreateOrderSchema>;
export type UpdateOrderStatus = z.infer<typeof UpdateOrderStatusSchema>;
export type OrderFilter = z.infer<typeof OrderFilterSchema>;
