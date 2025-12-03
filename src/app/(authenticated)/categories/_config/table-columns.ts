import type { Category } from "@/types/category";
import type { TableColumn } from "@/types/common";

export const categoryTableColumns: TableColumn<Category>[] = [
  {
    key: "name",
    label: "Name",
    sortable: true,
  },
  {
    key: "slug",
    label: "Slug",
    sortable: false,
  },
  {
    key: "productCount",
    label: "Products",
    sortable: true,
  },
  {
    key: "isActive",
    label: "Status",
    sortable: true,
  },
  {
    key: "order",
    label: "Order",
    sortable: true,
  },
  {
    key: "actions",
    label: "Actions",
    sortable: false,
  },
];
