"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Mail, ArrowRight, Copy, Check, Car, Wrench } from "lucide-react";
import { Button, Card, CardContent } from "@/components/ui";

interface RequestData {
  requestNumber: string;
  brand: string;
  model: string;
  year: string;
  partName: string;
  category: string;
  email: string;
  firstName: string;
  lastName: string;
  submittedAt: string;
}

export default function ConfirmationPage() {
  const [requestData, setRequestData] = useState<RequestData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const storedData = sessionStorage.getItem("carzone_request");
    if (storedData) {
      setRequestData(JSON.parse(storedData));
    }
  }, []);

  const copyRequestNumber = () => {
    if (requestData?.requestNumber) {
      navigator.clipboard.writeText(requestData.requestNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!requestData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card variant="glass" className="max-w-md text-center p-8">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Aucune demande trouvée</h2>
            <p className="text-blanc/60 mb-6">
              Il semble que vous n&apos;ayez pas encore soumis de demande.
            </p>
            <Link href="/recherche">
              <Button variant="primary">Faire une recherche</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Demande Envoyée avec <span className="text-gradient-gold">Succès</span> !
          </h1>
          <p className="text-blanc/60 max-w-lg mx-auto">
            Merci {requestData.firstName} ! Votre demande a bien été enregistrée.
            Notre équipe vous contactera dans les plus brefs délais.
          </p>
        </motion.div>

        {/* Request Number Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card variant="glass" className="mb-6">
            <CardContent className="text-center py-8">
              <p className="text-blanc/60 mb-2">Numéro de demande</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl md:text-3xl font-bold font-montserrat text-primary">
                  {requestData.requestNumber}
                </span>
                <button
                  onClick={copyRequestNumber}
                  className="p-2 rounded-lg bg-blanc/5 hover:bg-blanc/10 transition-colors"
                  title="Copier le numéro"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-blanc/60" />
                  )}
                </button>
              </div>
              <p className="text-sm text-blanc/40 mt-4">
                Conservez ce numéro pour suivre votre demande
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card variant="glass" className="mb-6">
            <CardContent>
              <h3 className="font-semibold font-montserrat mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-primary" />
                Récapitulatif de votre demande
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4 py-3 border-b border-blanc/10">
                  <Car className="w-5 h-5 text-blanc/40 mt-0.5" />
                  <div>
                    <p className="text-sm text-blanc/60">Véhicule</p>
                    <p className="font-medium">
                      {requestData.brand} {requestData.model} ({requestData.year})
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-3 border-b border-blanc/10">
                  <Wrench className="w-5 h-5 text-blanc/40 mt-0.5" />
                  <div>
                    <p className="text-sm text-blanc/60">Pièce recherchée</p>
                    <p className="font-medium">{requestData.partName}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-3">
                  <Mail className="w-5 h-5 text-blanc/40 mt-0.5" />
                  <div>
                    <p className="text-sm text-blanc/60">Email de confirmation</p>
                    <p className="font-medium">{requestData.email}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card variant="glass" className="mb-8">
            <CardContent>
              <h3 className="font-semibold font-montserrat mb-4">
                Prochaines étapes
              </h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-semibold flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <div>
                    <p className="font-medium">Confirmation par email</p>
                    <p className="text-sm text-blanc/60">
                      Un email de confirmation vous a été envoyé à {requestData.email}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-semibold flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <div>
                    <p className="font-medium">Analyse de votre demande</p>
                    <p className="text-sm text-blanc/60">
                      Notre équipe analyse votre demande et recherche les meilleures options
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-semibold flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <div>
                    <p className="font-medium">Réception du devis</p>
                    <p className="text-sm text-blanc/60">
                      Vous recevrez un devis personnalisé sous 24h maximum
                    </p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <Button variant="outline" className="w-full sm:w-auto">
              Retour à l&apos;accueil
            </Button>
          </Link>
          <Link href="/recherche">
            <Button variant="primary" className="w-full sm:w-auto gap-2">
              Nouvelle recherche
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
