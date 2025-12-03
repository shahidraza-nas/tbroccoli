import type { Product } from "./product";

/**
 * Order Types
 */

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled" | "refunded";

export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  product: Product; // Snapshot at purchase time
  quantity: number;
  price: number;
  subtotal: number;
}

export interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

export interface Order {
  id: string;
  orderNumber: string; // e.g., "ORD-2024-0001"
  userId: string;
  customer: {
    id: string;
    email: string;
    name: string;
  };
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  billingAddress?: ShippingAddress;
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  status: OrderStatus;
  paymentMethod: string;
  paymentStatus: PaymentStatus;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  shippedAt?: Date;
  deliveredAt?: Date;
}

export interface OrderFilter {
  status?: OrderStatus;
  paymentStatus?: PaymentStatus;
  customerId?: string;
  dateFrom?: string;
  dateTo?: string;
  search?: string; // Search by order number, customer name
  sortBy?: "createdAt" | "total" | "status";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export interface OrderListResponse {
  orders: Order[];
  total: number;
  page: number;
  limit: number;
}
