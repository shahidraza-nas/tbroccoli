"use client";

import Link from "next/link";
import type { Category } from "@/types/category";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  category: Category;
  variant?: "grid" | "list";
}

export function CategoryCard({ category, variant = "grid" }: CategoryCardProps) {
  if (variant === "list") {
    return (
      <div className="flex items-center gap-4 rounded-lg border border-zinc-200 bg-white p-4 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
        {category.image && (
          <img
            src={category.image}
            alt={category.name}
            className="h-16 w-16 rounded-lg object-cover"
          />
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{category.name}</h3>
          {category.description && (
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{category.description}</p>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {category.productCount}
            </div>
            <div className="text-xs text-zinc-500">Products</div>
          </div>
          {category.isActive ? (
            <Badge variant="success">Active</Badge>
          ) : (
            <Badge variant="outline">Inactive</Badge>
          )}
        </div>
      </div>
    );
  }

  return (
    <Link href={`/shop/${category.slug}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg">
        {category.image && (
          <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-900">
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
            {!category.isActive && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <Badge variant="outline" className="bg-white">
                  Inactive
                </Badge>
              </div>
            )}
          </div>
        )}
        <CardContent className="p-4">
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{category.name}</h3>
          {category.description && (
            <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
              {category.description}
            </p>
          )}
          <div className="mt-2 text-sm text-zinc-500">
            {category.productCount} {category.productCount === 1 ? "Product" : "Products"}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
