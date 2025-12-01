"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, User, Mail, MapPin, Bell, Shield, Save } from "lucide-react";
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Select, Checkbox } from "@/components/ui";
import { useState } from "react";

export default function ProfilPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
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
            Mon <span className="text-gradient-gold">Profil</span>
          </h1>
          <p className="text-blanc/60">
            Gérez vos informations personnelles et préférences
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-or" />
                  Informations Personnelles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Select
                    label="Civilité"
                    options={[
                      { value: "M", label: "Monsieur" },
                      { value: "Mme", label: "Madame" },
                    ]}
                    defaultValue="M"
                  />
                  <div />
                  <Input
                    label="Prénom"
                    defaultValue="Jean"
                  />
                  <Input
                    label="Nom"
                    defaultValue="Dupont"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-or" />
                  Coordonnées
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Email"
                    type="email"
                    defaultValue="jean.dupont@email.com"
                  />
                  <Input
                    label="Téléphone"
                    type="tel"
                    defaultValue="06 12 34 56 78"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-or" />
                  Adresse
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Input
                  label="Adresse"
                  defaultValue="123 Rue de la République"
                />
                <div className="grid md:grid-cols-3 gap-6">
                  <Input
                    label="Code postal"
                    defaultValue="75001"
                  />
                  <Input
                    label="Ville"
                    defaultValue="Paris"
                  />
                  <Select
                    label="Pays"
                    options={[
                      { value: "France", label: "France" },
                      { value: "Belgique", label: "Belgique" },
                      { value: "Suisse", label: "Suisse" },
                    ]}
                    defaultValue="France"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-or" />
                  Préférences de Notification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Checkbox
                  label="Recevoir des notifications par email pour mes demandes"
                  defaultChecked
                />
                <Checkbox
                  label="Recevoir des offres et promotions"
                  defaultChecked
                />
                <Checkbox
                  label="Recevoir des SMS de rappel"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-or" />
                  Sécurité
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Nouveau mot de passe"
                    type="password"
                    placeholder="••••••••"
                  />
                  <Input
                    label="Confirmer le mot de passe"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
                <p className="text-sm text-blanc/40">
                  Laissez ces champs vides si vous ne souhaitez pas modifier votre mot de passe.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Save Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-end"
          >
            <Button
              variant="primary"
              onClick={handleSave}
              className="gap-2"
            >
              <Save className="w-4 h-4" />
              {saved ? "Enregistré !" : "Enregistrer les modifications"}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
