"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ClipboardList,
  User,
  Car,
  Bell,
  LogIn,
  UserPlus,
  ArrowRight,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from "@/components/ui";
import { useState } from "react";

// Mock data for demonstration
const mockRequests = [
  {
    id: "CZ-ABC123-XY45",
    vehicle: "Volkswagen Golf 2019",
    part: "Disque de frein avant",
    status: "pending",
    date: "2024-01-15",
  },
  {
    id: "CZ-DEF456-ZW78",
    vehicle: "Peugeot 308 2021",
    part: "Alternateur",
    status: "quoted",
    date: "2024-01-12",
  },
  {
    id: "CZ-GHI789-AB12",
    vehicle: "Renault Clio 2018",
    part: "Phare avant gauche",
    status: "completed",
    date: "2024-01-08",
  },
];

const statusConfig = {
  pending: {
    label: "En attente",
    color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    icon: Clock,
  },
  quoted: {
    label: "Devis envoyé",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    icon: AlertCircle,
  },
  in_progress: {
    label: "En cours",
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    icon: Clock,
  },
  completed: {
    label: "Terminé",
    color: "bg-green-500/20 text-green-400 border-green-500/30",
    icon: CheckCircle,
  },
};

export default function EspaceClientPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold font-montserrat mb-4">
                Espace <span className="text-gradient-gold">Client</span>
              </h1>
              <p className="text-blanc/60">
                Accédez à votre espace personnel pour suivre vos demandes
              </p>
            </div>

            <Card variant="glass">
              <CardContent className="p-8">
                {/* Tabs */}
                <div className="flex gap-2 mb-8">
                  <button
                    onClick={() => setShowLogin(true)}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                      showLogin
                        ? "bg-or text-noir-deep"
                        : "bg-blanc/5 text-blanc/60 hover:bg-blanc/10"
                    }`}
                  >
                    <LogIn className="w-4 h-4 inline mr-2" />
                    Connexion
                  </button>
                  <button
                    onClick={() => setShowLogin(false)}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                      !showLogin
                        ? "bg-or text-noir-deep"
                        : "bg-blanc/5 text-blanc/60 hover:bg-blanc/10"
                    }`}
                  >
                    <UserPlus className="w-4 h-4 inline mr-2" />
                    Inscription
                  </button>
                </div>

                {showLogin ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setIsLoggedIn(true);
                    }}
                    className="space-y-4"
                  >
                    <Input
                      label="Email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                    />
                    <Input
                      label="Mot de passe"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 text-blanc/60">
                        <input type="checkbox" className="rounded" />
                        Se souvenir de moi
                      </label>
                      <Link href="#" className="text-or hover:underline">
                        Mot de passe oublié ?
                      </Link>
                    </div>
                    <Button type="submit" variant="primary" className="w-full">
                      Se connecter
                    </Button>
                  </form>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setIsLoggedIn(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <Input label="Prénom" placeholder="Jean" required />
                      <Input label="Nom" placeholder="Dupont" required />
                    </div>
                    <Input
                      label="Email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                    />
                    <Input
                      label="Mot de passe"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                    <Input
                      label="Confirmer le mot de passe"
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                    <Button type="submit" variant="primary" className="w-full">
                      Créer mon compte
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold font-montserrat mb-2">
            Bonjour, <span className="text-gradient-gold">Jean</span> 👋
          </h1>
          <p className="text-blanc/60">
            Bienvenue dans votre espace personnel CarZone
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: "Demandes en cours", value: "2", icon: ClipboardList },
            { label: "Devis reçus", value: "1", icon: AlertCircle },
            { label: "Véhicules", value: "3", icon: Car },
            { label: "Notifications", value: "5", icon: Bell },
          ].map((stat, index) => (
            <Card key={index} variant="glass" hover={false}>
              <CardContent className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-or/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-or" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blanc/60">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Requests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card variant="glass">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Mes Demandes Récentes</CardTitle>
                <Link href="/espace-client/demandes">
                  <Button variant="ghost" size="sm" className="gap-1">
                    Voir tout
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRequests.map((request) => {
                    const status = statusConfig[request.status as keyof typeof statusConfig];
                    return (
                      <div
                        key={request.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-noir-light/30 hover:bg-noir-light/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-or/10 flex items-center justify-center">
                            <Car className="w-5 h-5 text-or" />
                          </div>
                          <div>
                            <p className="font-medium">{request.part}</p>
                            <p className="text-sm text-blanc/60">
                              {request.vehicle}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium border ${status.color}`}
                          >
                            {status.label}
                          </span>
                          <span className="text-sm text-blanc/40 hidden md:block">
                            {new Date(request.date).toLocaleDateString("fr-FR")}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <Card variant="glass">
              <CardHeader>
                <CardTitle>Actions Rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/recherche" className="block">
                  <Button variant="primary" className="w-full gap-2">
                    <ClipboardList className="w-4 h-4" />
                    Nouvelle recherche
                  </Button>
                </Link>
                <Link href="/espace-client/profil" className="block">
                  <Button variant="secondary" className="w-full gap-2">
                    <User className="w-4 h-4" />
                    Mon profil
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="w-full gap-2"
                  onClick={() => setIsLoggedIn(false)}
                >
                  <LogIn className="w-4 h-4" />
                  Déconnexion
                </Button>
              </CardContent>
            </Card>

            {/* Saved Vehicles */}
            <Card variant="glass">
              <CardHeader>
                <CardTitle>Mes Véhicules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { brand: "Volkswagen", model: "Golf VII", year: "2019" },
                  { brand: "Peugeot", model: "308", year: "2021" },
                ].map((vehicle, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-noir-light/30"
                  >
                    <Car className="w-5 h-5 text-or" />
                    <div>
                      <p className="font-medium">
                        {vehicle.brand} {vehicle.model}
                      </p>
                      <p className="text-sm text-blanc/60">{vehicle.year}</p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="w-full">
                  + Ajouter un véhicule
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
