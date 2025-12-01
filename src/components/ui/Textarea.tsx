"use client";

import { forwardRef, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-blanc/80 mb-2"
          >
            {label}
            {props.required && <span className="text-or ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "w-full px-4 py-3 bg-noir-light/50 border rounded-lg text-blanc placeholder-blanc/40 resize-none",
            "focus:outline-none focus:border-or/50 focus:ring-1 focus:ring-or/30 transition-all duration-300",
            error
              ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/30"
              : "border-blanc/10",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
        {helperText && !error && (
          <p className="mt-1 text-sm text-blanc/50">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
