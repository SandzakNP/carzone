"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Car, User, Search } from "lucide-react";
import { Button } from "@/components/ui";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/recherche", label: "Rechercher une pièce" },
  { href: "/espace-client", label: "Espace Client" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-noir-deep/95 backdrop-blur-md shadow-lg border-b border-primary/10"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Car className="w-10 h-10 text-primary" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-montserrat text-gradient-gold">
                CarZone
              </span>
              <span className="text-xs text-blanc/50 -mt-1">
                Pièces Automobiles Premium
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-200",
                  pathname === link.href
                    ? "text-primary"
                    : "text-blanc/70 hover:text-blanc"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/espace-client">
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                Connexion
              </Button>
            </Link>
            <Link href="/recherche">
              <Button variant="primary" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Rechercher
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-blanc/70 hover:text-blanc transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-noir-deep/98 backdrop-blur-lg border-b border-primary/10"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "py-3 px-4 rounded-lg text-base font-medium transition-all",
                      pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-blanc/70 hover:bg-blanc/5 hover:text-blanc"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-blanc/10 flex flex-col gap-3">
                  <Link href="/espace-client">
                    <Button variant="secondary" className="w-full">
                      <User className="w-4 h-4 mr-2" />
                      Connexion
                    </Button>
                  </Link>
                  <Link href="/recherche">
                    <Button variant="primary" className="w-full">
                      <Search className="w-4 h-4 mr-2" />
                      Rechercher une pièce
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
