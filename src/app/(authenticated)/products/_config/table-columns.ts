import type { TableColumn } from "@/types/product";
import type { Product } from "@/types/product";

/**
 * Product table column configuration
 */
export const productTableColumns: TableColumn<Product>[] = [
  {
    key: "name",
    label: "Product",
    sortable: true,
    width: "minmax(200px, 1fr)",
  },
  {
    key: "sku",
    label: "SKU",
    sortable: true,
    width: "150px",
  },
  {
    key: "category",
    label: "Category",
    sortable: true,
    width: "150px",
  },
  {
    key: "price",
    label: "Price",
    sortable: true,
    width: "120px",
    align: "right",
    render: (value: number) => `$${value.toFixed(2)}`,
  },
  {
    key: "stock",
    label: "Stock",
    sortable: true,
    width: "100px",
    align: "center",
    render: (value?: number) => value ?? "N/A",
  },
  {
    key: "isActive",
    label: "Status",
    sortable: true,
    width: "120px",
    align: "center",
  },
  {
    key: "actions",
    label: "Actions",
    sortable: false,
    width: "100px",
    align: "right",
  },
];
