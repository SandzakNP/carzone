"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function EspaceClientPage() {
  const orders = [
    {
      id: "CZ-2024-001",
      date: "28 Nov 2024",
      status: "En cours",
      statusColor: "primary",
      pieces: "Plaquettes de frein avant",
      vehicule: "Renault Clio 2020",
      price: "89,99 €",
    },
    {
      id: "CZ-2024-002",
      date: "25 Nov 2024",
      status: "Livré",
      statusColor: "green",
      pieces: "Filtre à huile + Filtre à air",
      vehicule: "Peugeot 308 2019",
      price: "45,50 €",
    },
    {
      id: "CZ-2024-003",
      date: "20 Nov 2024",
      status: "Livré",
      statusColor: "green",
      pieces: "Amortisseurs arrière",
      vehicule: "Citroën C3 2018",
      price: "156,00 €",
    },
  ];

  const stats = [
    { label: "Commandes", value: "12" },
    { label: "Économies", value: "245 €" },
    { label: "Points fidélité", value: "1,250" },
    { label: "Avis laissés", value: "8" },
  ];

  return (
    <div className="min-h-screen bg-dark">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12"
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Bienvenue,{" "}
                  <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                    Jean
                  </span>
                </h1>
                <p className="text-gray-medium">
                  Gérez vos commandes et accédez à vos avantages exclusifs
                </p>
              </div>
              <Button>Nouvelle recherche</Button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              {stats.map((stat, index) => (
                <Card key={index} variant="bordered" hover={false} className="text-center p-4">
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-medium text-sm">{stat.label}</div>
                </Card>
              ))}
            </motion.div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Orders Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2"
              >
                <Card variant="glass">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-white flex items-center gap-2">
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
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                      Mes commandes
                    </h2>
                    <Button variant="ghost" size="sm">
                      Voir tout
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {orders.map((order, index) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="p-4 bg-dark-100/50 rounded-lg border border-dark-200 hover:border-primary-500/30 transition-all duration-300"
                      >
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-primary-400 font-mono text-sm">
                                #{order.id}
                              </span>
                              <span
                                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                  order.statusColor === "green"
                                    ? "bg-green-500/20 text-green-400"
                                    : "bg-primary-500/20 text-primary-400"
                                }`}
                              >
                                {order.status}
                              </span>
                            </div>
                            <h3 className="text-white font-medium mb-1">
                              {order.pieces}
                            </h3>
                            <p className="text-gray-medium text-sm">
                              {order.vehicule} • {order.date}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-semibold">
                              {order.price}
                            </div>
                            <Button variant="ghost" size="sm" className="mt-2">
                              Détails
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                {/* Quick Actions */}
                <Card variant="bordered">
                  <h2 className="text-lg font-semibold text-white mb-4">
                    Actions rapides
                  </h2>
                  <div className="space-y-3">
                    {[
                      { icon: "🔍", label: "Rechercher une pièce" },
                      { icon: "📦", label: "Suivre une commande" },
                      { icon: "💬", label: "Contacter le support" },
                      { icon: "⚙️", label: "Paramètres du compte" },
                    ].map((action, index) => (
                      <button
                        key={index}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-primary-500/10 transition-colors text-left"
                      >
                        <span className="text-xl">{action.icon}</span>
                        <span className="text-white text-sm">{action.label}</span>
                      </button>
                    ))}
                  </div>
                </Card>

                {/* Loyalty Card */}
                <Card className="bg-gradient-to-br from-primary-600 to-primary-700 border-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-xl">⭐</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Carte Fidélité</div>
                      <div className="text-primary-100 text-sm">Niveau Or</div>
                    </div>
                  </div>
                  <div className="text-white/80 text-sm mb-2">Points disponibles</div>
                  <div className="text-3xl font-bold text-white mb-4">1,250</div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-white rounded-full" />
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-primary-100">
                    <span>Niveau Or</span>
                    <span>250 pts → Platine</span>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}