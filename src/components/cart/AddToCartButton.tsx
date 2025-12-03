"use client";

import { useState } from "react";
import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";

interface AddToCartButtonProps {
  productId: string;
  productName: string;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export function AddToCartButton({
  productId,
  productName,
  variant = "default",
  size = "md",
  disabled = false,
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClick = async () => {
    if (isAdding || disabled) return;

    setIsAdding(true);
    try {
      await addItem(productId, 1);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (error) {
      console.error("Failed to add to cart:", error);
    } finally {
      setIsAdding(false);
    }
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  if (showSuccess) {
    return (
      <Button variant="outline" disabled className={sizeClasses[size]}>
        ✓ Added to Cart
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      disabled={isAdding || disabled}
      className={sizeClasses[size]}
    >
      {isAdding ? "Adding..." : "Add to Cart"}
    </Button>
  );
}
