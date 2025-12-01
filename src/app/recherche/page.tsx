"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

export default function RecherchePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    marque: "",
    modele: "",
    annee: "",
    piece: "",
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const marques = [
    "Renault",
    "Peugeot",
    "Citroën",
    "Volkswagen",
    "BMW",
    "Mercedes",
    "Audi",
    "Toyota",
    "Ford",
    "Fiat",
  ];

  const categories = [
    { name: "Freinage", icon: "🛞" },
    { name: "Moteur", icon: "⚙️" },
    { name: "Suspension", icon: "🔧" },
    { name: "Électrique", icon: "⚡" },
    { name: "Carrosserie", icon: "🚗" },
    { name: "Transmission", icon: "🔩" },
  ];

  return (
    <div className="min-h-screen bg-dark">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Rechercher une{" "}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                pièce auto
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-medium"
            >
              Trouvez rapidement la pièce compatible avec votre véhicule
            </motion.p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex justify-between mb-4">
              {[1, 2, 3, 4].map((s) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: s * 0.1 }}
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 font-semibold transition-all duration-300 ${
                    s <= step
                      ? "bg-primary-500 border-primary-500 text-white"
                      : "border-dark-200 text-gray-medium"
                  }`}
                >
                  {s}
                </motion.div>
              ))}
            </div>
            <div className="h-2 bg-dark-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-medium">
              <span>Marque</span>
              <span>Modèle</span>
              <span>Année</span>
              <span>Pièce</span>
            </div>
          </div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <Card variant="glass" className="p-8">
              {/* Step 1: Marque */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Sélectionnez la marque de votre véhicule
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                    {marques.map((marque) => (
                      <button
                        key={marque}
                        onClick={() => {
                          setFormData({ ...formData, marque });
                          setStep(2);
                        }}
                        className={`p-4 rounded-lg border transition-all duration-300 text-center hover:border-primary-500 hover:bg-primary-500/10 ${
                          formData.marque === marque
                            ? "border-primary-500 bg-primary-500/10 text-primary-400"
                            : "border-dark-200 text-white"
                        }`}
                      >
                        {marque}
                      </button>
                    ))}
                  </div>
                  <Input
                    placeholder="Ou recherchez une marque..."
                    className="mb-4"
                  />
                </motion.div>
              )}

              {/* Step 2: Modèle */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Entrez le modèle de votre {formData.marque}
                  </h2>
                  <Input
                    label="Modèle du véhicule"
                    placeholder="Ex: Clio, 308, Golf..."
                    value={formData.modele}
                    onChange={(e) =>
                      setFormData({ ...formData, modele: e.target.value })
                    }
                    className="mb-8"
                  />
                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Retour
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      disabled={!formData.modele}
                    >
                      Continuer
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Année */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Année de mise en circulation
                  </h2>
                  <Input
                    label="Année"
                    placeholder="Ex: 2020"
                    type="number"
                    min="1990"
                    max="2024"
                    value={formData.annee}
                    onChange={(e) =>
                      setFormData({ ...formData, annee: e.target.value })
                    }
                    className="mb-8"
                  />
                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      Retour
                    </Button>
                    <Button
                      onClick={() => setStep(4)}
                      disabled={!formData.annee}
                    >
                      Continuer
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Catégorie de pièce */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Quelle pièce recherchez-vous ?
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {categories.map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => setFormData({ ...formData, piece: cat.name })}
                        className={`p-6 rounded-lg border transition-all duration-300 text-center hover:border-primary-500 hover:bg-primary-500/10 ${
                          formData.piece === cat.name
                            ? "border-primary-500 bg-primary-500/10"
                            : "border-dark-200"
                        }`}
                      >
                        <span className="text-3xl mb-2 block">{cat.icon}</span>
                        <span className="text-white font-medium">{cat.name}</span>
                      </button>
                    ))}
                  </div>
                  <Input
                    label="Ou décrivez la pièce recherchée"
                    placeholder="Ex: plaquettes de frein avant, filtre à huile..."
                    className="mb-8"
                  />
                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setStep(3)}>
                      Retour
                    </Button>
                    <Button onClick={() => window.location.href = "/confirmation"}>
                      Lancer la recherche
                    </Button>
                  </div>
                </motion.div>
              )}
            </Card>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto mt-8"
          >
            <Card variant="bordered" className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold">
                  Besoin d&apos;aide pour trouver votre pièce ?
                </h3>
                <p className="text-gray-medium text-sm">
                  Nos experts sont disponibles pour vous guider dans votre
                  recherche.
                </p>
              </div>
              <Button variant="secondary" size="sm">
                Nous contacter
              </Button>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}