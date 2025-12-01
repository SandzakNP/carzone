"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center"
            >
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Demande envoyée avec{" "}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                succès !
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-medium text-lg mb-8"
            >
              Notre équipe recherche les meilleures offres pour vous. Vous
              recevrez un devis personnalisé sous 24h.
            </motion.p>

            {/* Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card variant="glass" className="text-left mb-8">
                <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  Récapitulatif de votre demande
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-primary-500/10">
                    <span className="text-gray-medium">Numéro de demande</span>
                    <span className="text-primary-400 font-mono">#CZ-2024-001</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-primary-500/10">
                    <span className="text-gray-medium">Véhicule</span>
                    <span className="text-white">Renault Clio - 2020</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-primary-500/10">
                    <span className="text-gray-medium">Type de pièce</span>
                    <span className="text-white">Freinage</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-medium">Délai de réponse</span>
                    <span className="text-primary-400">Sous 24h</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            >
              {[
                {
                  icon: "📧",
                  title: "Email de confirmation",
                  desc: "Vérifiez votre boîte mail",
                },
                {
                  icon: "🔍",
                  title: "Recherche en cours",
                  desc: "Nos experts cherchent pour vous",
                },
                {
                  icon: "💬",
                  title: "Devis personnalisé",
                  desc: "Recevez-le sous 24h",
                },
              ].map((step, index) => (
                <Card key={index} variant="bordered" hover={false} className="text-center p-4">
                  <span className="text-2xl mb-2 block">{step.icon}</span>
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-medium text-xs">{step.desc}</p>
                </Card>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/">
                <Button variant="outline">Retour à l&apos;accueil</Button>
              </Link>
              <Link href="/recherche">
                <Button>Nouvelle recherche</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}