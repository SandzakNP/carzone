"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "outline";
  hover?: boolean;
}

export function Card({
  children,
  className,
  variant = "default",
  hover = true,
}: CardProps) {
  const variants = {
    default: "bg-noir-dark border-blanc/10",
    glass: "glass",
    outline: "bg-transparent border-or/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-2xl border p-6 transition-all duration-300",
        variants[variant],
        hover && "hover:shadow-luxury hover:border-or/30",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold text-blanc font-montserrat",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-sm text-blanc/60 mt-1", className)}>{children}</p>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("", className)}>{children}</div>;
}

export function CardFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mt-4 pt-4 border-t border-blanc/10", className)}>
      {children}
    </div>
  );
}
