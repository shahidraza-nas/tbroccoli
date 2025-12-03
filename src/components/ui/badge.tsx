import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Badge component for status indicators
 */

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "success" | "warning" | "danger" | "info" | "outline";
}

const badgeVariants = {
    default: "bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900",
    success: "bg-green-500 text-white dark:bg-green-600",
    warning: "bg-yellow-500 text-white dark:bg-yellow-600",
    danger: "bg-red-500 text-white dark:bg-red-600",
    info: "bg-blue-500 text-white dark:bg-blue-600",
    outline: "border border-zinc-200 text-zinc-900 dark:border-zinc-800 dark:text-zinc-50",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
                badgeVariants[variant],
                className
            )}
            {...props}
        />
    );
}
