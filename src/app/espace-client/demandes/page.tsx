"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Car, Clock, CheckCircle, AlertCircle, Filter } from "lucide-react";
import { Button, Card, CardContent, Select } from "@/components/ui";
import { useState } from "react";

const mockRequests = [
  {
    id: "CZ-ABC123-XY45",
    vehicle: "Volkswagen Golf VII",
    year: "2019",
    part: "Disque de frein avant",
    category: "Freinage",
    status: "pending",
    date: "2024-01-15",
    urgency: "standard",
  },
  {
    id: "CZ-DEF456-ZW78",
    vehicle: "Peugeot 308",
    year: "2021",
    part: "Alternateur",
    category: "Électricité",
    status: "quoted",
    date: "2024-01-12",
    urgency: "urgent",
    quote: "185.00€",
  },
  {
    id: "CZ-GHI789-AB12",
    vehicle: "Renault Clio V",
    year: "2018",
    part: "Phare avant gauche",
    category: "Éclairage",
    status: "completed",
    date: "2024-01-08",
    urgency: "standard",
  },
  {
    id: "CZ-JKL012-CD34",
    vehicle: "BMW Série 3",
    year: "2020",
    part: "Capteur ABS",
    category: "Électronique",
    status: "in_progress",
    date: "2024-01-10",
    urgency: "tres_urgent",
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

const statusOptions = [
  { value: "all", label: "Tous les statuts" },
  { value: "pending", label: "En attente" },
  { value: "quoted", label: "Devis envoyé" },
  { value: "in_progress", label: "En cours" },
  { value: "completed", label: "Terminé" },
];

export default function DemandesPage() {
  const [filter, setFilter] = useState("all");

  const filteredRequests =
    filter === "all"
      ? mockRequests
      : mockRequests.filter((r) => r.status === filter);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/espace-client"
            className="inline-flex items-center gap-2 text-blanc/60 hover:text-blanc mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au tableau de bord
          </Link>
          <h1 className="text-3xl font-bold font-montserrat mb-2">
            Mes <span className="text-gradient-gold">Demandes</span>
          </h1>
          <p className="text-blanc/60">
            Consultez l&apos;historique et le statut de vos demandes de pièces
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="flex items-center gap-2 sm:w-64">
            <Filter className="w-5 h-5 text-blanc/40" />
            <Select
              options={statusOptions}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="flex-1"
            />
          </div>
          <div className="flex-1" />
          <Link href="/recherche">
            <Button variant="primary" className="w-full sm:w-auto">
              Nouvelle demande
            </Button>
          </Link>
        </motion.div>

        {/* Requests List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {filteredRequests.length === 0 ? (
            <Card variant="glass" className="text-center py-12">
              <CardContent>
                <p className="text-blanc/60 mb-4">
                  Aucune demande ne correspond à ce filtre
                </p>
                <Button variant="outline" onClick={() => setFilter("all")}>
                  Afficher toutes les demandes
                </Button>
              </CardContent>
            </Card>
          ) : (
            filteredRequests.map((request, index) => {
              const status =
                statusConfig[request.status as keyof typeof statusConfig];
              const StatusIcon = status.icon;

              return (
                <motion.div
                  key={request.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card variant="glass" className="hover:border-or/30 transition-colors cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-xl bg-or/10 flex items-center justify-center flex-shrink-0">
                          <Car className="w-7 h-7 text-or" />
                        </div>

                        {/* Main Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">
                                {request.part}
                              </h3>
                              <p className="text-blanc/60">
                                {request.vehicle} ({request.year})
                              </p>
                            </div>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${status.color}`}
                            >
                              <StatusIcon className="w-3 h-3" />
                              {status.label}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            <span className="text-blanc/40">
                              #{request.id}
                            </span>
                            <span className="text-blanc/40">•</span>
                            <span className="text-blanc/40">
                              {request.category}
                            </span>
                            <span className="text-blanc/40">•</span>
                            <span className="text-blanc/40">
                              {new Date(request.date).toLocaleDateString(
                                "fr-FR",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              )}
                            </span>
                            {request.quote && (
                              <>
                                <span className="text-blanc/40">•</span>
                                <span className="text-or font-semibold">
                                  Devis: {request.quote}
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Action */}
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Voir détails
                          </Button>
                          {request.status === "quoted" && (
                            <Button variant="primary" size="sm">
                              Accepter le devis
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })
          )}
        </motion.div>
      </div>
    </div>
  );
}
