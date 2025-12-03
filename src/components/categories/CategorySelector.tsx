"use client";

import { Select } from "@/components/ui/select";
import type { Category } from "@/types/category";

interface CategorySelectorProps {
  categories: Category[];
  value?: string;
  onChange: (categoryId: string) => void;
  placeholder?: string;
  includeAll?: boolean;
}

export function CategorySelector({
  categories,
  value,
  onChange,
  placeholder = "Select category...",
  includeAll = false,
}: CategorySelectorProps) {
  return (
    <Select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">{includeAll ? "All Categories" : placeholder}</option>
      {categories
        .filter((c) => c.isActive)
        .map((category) => (
          <option key={category.id} value={category.id}>
            {category.name} ({category.productCount})
          </option>
        ))}
    </Select>
  );
}
