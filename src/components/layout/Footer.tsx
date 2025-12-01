"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Car,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";

const footerLinks = {
  services: [
    { label: "Recherche de pièces", href: "/recherche" },
    { label: "Devis gratuit", href: "/recherche" },
    { label: "Livraison express", href: "#" },
    { label: "Garantie pièces", href: "#" },
  ],
  company: [
    { label: "À propos", href: "#" },
    { label: "Notre équipe", href: "#" },
    { label: "Carrières", href: "#" },
    { label: "Presse", href: "#" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "CGV", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-noir-dark border-t border-blanc/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Car className="w-10 h-10 text-or" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-montserrat text-gradient-gold">
                  CarZone
                </span>
                <span className="text-xs text-blanc/50 -mt-1">
                  Pièces Automobiles Premium
                </span>
              </div>
            </Link>
            <p className="text-blanc/60 mb-6 max-w-sm">
              Votre partenaire de confiance pour la recherche de pièces
              automobiles de qualité. Service premium et expertise garantie.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contact@carzone.fr"
                className="flex items-center gap-3 text-blanc/60 hover:text-or transition-colors"
              >
                <Mail className="w-5 h-5" />
                contact@carzone.fr
              </a>
              <a
                href="tel:+33123456789"
                className="flex items-center gap-3 text-blanc/60 hover:text-or transition-colors"
              >
                <Phone className="w-5 h-5" />
                01 23 45 67 89
              </a>
              <div className="flex items-center gap-3 text-blanc/60">
                <MapPin className="w-5 h-5" />
                Paris, France
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-blanc font-semibold font-montserrat mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blanc/60 hover:text-or transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-blanc font-semibold font-montserrat mb-4">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blanc/60 hover:text-or transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-blanc font-semibold font-montserrat mb-4">
              Légal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-blanc/60 hover:text-or transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-blanc/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-blanc/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} CarZone. Tous droits réservés.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-blanc/5 text-blanc/60 hover:bg-or/10 hover:text-or transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-or/10 text-or hover:bg-or hover:text-noir-deep transition-all"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
