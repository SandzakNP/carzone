"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type CardVariant = "default" | "glass" | "bordered";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  variant?: CardVariant;
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", variant = "default", hover = true, children, ...props }, ref) => {
    const baseClasses = "rounded-xl p-6 transition-all duration-300";

    const variants = {
      default: "bg-dark-100 border border-dark-200",
      glass:
        "bg-dark-100/50 backdrop-blur-xl border border-primary-500/20",
      bordered:
        "bg-dark-100 border-2 border-primary-500/30",
    };

    const hoverClasses = hover
      ? "hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10"
      : "";

    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -4 } : undefined}
        className={`${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;
