import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Alert component for notifications and messages
 */

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "success" | "warning" | "danger" | "info";
}

const alertVariants = {
    default: "bg-zinc-50 border-zinc-200 text-zinc-900 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-50",
    success: "bg-green-50 border-green-200 text-green-900 dark:bg-green-950 dark:border-green-800 dark:text-green-50",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-900 dark:bg-yellow-950 dark:border-yellow-800 dark:text-yellow-50",
    danger: "bg-red-50 border-red-200 text-red-900 dark:bg-red-950 dark:border-red-800 dark:text-red-50",
    info: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-50",
};

export function Alert({ className, variant = "default", children, ...props }: AlertProps) {
    return (
        <div
            role="alert"
            className={cn(
                "relative w-full rounded-lg border p-4",
                alertVariants[variant],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return <h5 className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />;
}

export function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return <div className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />;
}
