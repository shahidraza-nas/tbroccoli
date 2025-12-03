import type { ShippingAddress } from "./order";

/**
 * Customer Types
 */

export interface Customer {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatarUrl?: string;
  defaultShippingAddress?: ShippingAddress;
  defaultBillingAddress?: ShippingAddress;
  totalOrders: number;
  totalSpent: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CustomerFilter {
  search?: string;
  isActive?: boolean;
  sortBy?: "name" | "totalOrders" | "totalSpent" | "createdAt";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export interface CustomerListResponse {
  customers: Customer[];
  total: number;
  page: number;
  limit: number;
}
