"use client";

import { motion } from "framer-motion";
import { SearchForm } from "@/components/forms";
import { Card, CardContent } from "@/components/ui";
import { Shield, Clock, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Pièces garanties",
    description: "Toutes nos pièces sont vérifiées et garanties",
  },
  {
    icon: Clock,
    title: "Réponse sous 24h",
    description: "Notre équipe vous répond rapidement",
  },
  {
    icon: CheckCircle,
    title: "Devis gratuit",
    description: "Sans engagement de votre part",
  },
];

export default function RecherchePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Rechercher une <span className="text-gradient-gold">Pièce</span>
          </h1>
          <p className="text-blanc/60 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous pour nous envoyer votre demande.
            Nous vous répondrons dans les plus brefs délais avec un devis personnalisé.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          {benefits.map((benefit, index) => (
            <Card key={index} variant="glass" hover={false}>
              <CardContent className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-or/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-or" />
                </div>
                <div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-blanc/60">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card variant="glass" className="p-8 md:p-12">
            <SearchForm />
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
