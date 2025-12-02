import { cn } from "@/lib/utils";
import React from "react";

/**
 * Button component with variants
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg";
}

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
        "disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200":
            variant === "default",
          "border border-zinc-200 bg-transparent hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900":
            variant === "outline",
          "hover:bg-zinc-100 dark:hover:bg-zinc-900": variant === "ghost",
          "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600":
            variant === "destructive",
        },
        {
          "h-10 px-4 py-2 text-sm": size === "default",
          "h-8 px-3 text-xs": size === "sm",
          "h-12 px-6 text-base": size === "lg",
        },
        className
      )}
      {...props}
    />
  );
}
