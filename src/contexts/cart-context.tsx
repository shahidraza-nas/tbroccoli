"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import type { Cart } from "@/types/cart";
import { getCart, addToCart as addToCartAction } from "@/actions/cart.action";

interface CartContextValue {
  cart: Cart | null;
  itemCount: number;
  isLoading: boolean;
  addItem: (productId: string, quantity: number) => Promise<void>;
  refreshCart: () => Promise<void>;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshCart = useCallback(async () => {
    try {
      const result = await getCart();
      if (result.success && result.data) {
        setCart(result.data);
      }
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addItem = useCallback(async (productId: string, quantity: number) => {
    try {
      const result = await addToCartAction({ productId, quantity });
      if (result.success && result.data) {
        setCart(result.data);
      } else {
        throw new Error(result.error || "Failed to add item");
      }
    } catch (error) {
      console.error("Failed to add to cart:", error);
      throw error;
    }
  }, []);

  useEffect(() => {
    refreshCart();
  }, [refreshCart]);

  const itemCount = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        itemCount,
        isLoading,
        addItem,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
