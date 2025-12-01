"use client";

import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, id, ...props }, ref) => {
    const checkboxId = id || props.name;

    return (
      <div className="flex flex-col">
        <label
          htmlFor={checkboxId}
          className={cn(
            "flex items-start gap-3 cursor-pointer group",
            props.disabled && "cursor-not-allowed opacity-50"
          )}
        >
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              ref={ref}
              id={checkboxId}
              type="checkbox"
              className="peer sr-only"
              {...props}
            />
            <div
              className={cn(
                "w-5 h-5 border rounded transition-all duration-200",
                "peer-focus:ring-2 peer-focus:ring-or/30 peer-focus:ring-offset-2 peer-focus:ring-offset-noir-deep",
                "peer-checked:bg-or peer-checked:border-or",
                error ? "border-red-500/50" : "border-blanc/30",
                "group-hover:border-or/50"
              )}
            />
            <Check className="absolute top-0.5 left-0.5 w-4 h-4 text-noir-deep opacity-0 peer-checked:opacity-100 transition-opacity" />
          </div>
          {label && (
            <span className="text-sm text-blanc/80 leading-relaxed">
              {label}
            </span>
          )}
        </label>
        {error && <p className="mt-1 ml-8 text-sm text-red-400">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
