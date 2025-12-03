import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Checkbox component
 */

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex items-center">
        <input
          type="checkbox"
          id={checkboxId}
          className={cn(
            "h-4 w-4 rounded border-zinc-200 text-zinc-900",
            "focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "dark:border-zinc-800 dark:text-zinc-50 dark:focus:ring-zinc-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {label && (
          <label
            htmlFor={checkboxId}
            className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-50"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
