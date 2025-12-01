"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

interface NavigationProps {
  items?: NavItem[];
  className?: string;
}

const defaultNavItems: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/recherche", label: "Rechercher" },
  { href: "/espace-client", label: "Espace Client" },
];

const Navigation = ({ items = defaultNavItems, className = "" }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <nav className={`flex items-center gap-6 ${className}`}>
      {items.map((item, index) => {
        const isActive = pathname === item.href;

        return (
          <Link key={item.href} href={item.href}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <span
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg
                  transition-all duration-300
                  ${
                    isActive
                      ? "text-primary-400 bg-primary-500/10"
                      : "text-gray-medium hover:text-primary-400 hover:bg-primary-500/5"
                  }
                `}
              >
                {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                />
              )}
            </motion.div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
