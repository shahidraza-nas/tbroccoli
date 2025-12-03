/**
 * Common/Shared Types
 */

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  totalProducts: number;
  revenueChange: number; // Percentage change
  ordersChange: number;
  customersChange: number;
  productsChange: number;
  recentOrders: number;
  pendingOrders: number;
  lowStockProducts: number;
}

export interface SalesData {
  date: string;
  revenue: number;
  orders: number;
}

export interface TableColumn<T = any> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
}
