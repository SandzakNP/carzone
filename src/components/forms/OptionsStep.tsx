"use client";

import { useFormContext } from "react-hook-form";
import { Input, Select, Checkbox, Card, CardContent } from "@/components/ui";
import Link from "next/link";

const urgencies = [
  { value: "standard", label: "Standard (5-7 jours)" },
  { value: "urgent", label: "Urgent (2-3 jours)" },
  { value: "tres_urgent", label: "Très urgent (24-48h)" },
];

const contactMethods = [
  { value: "email", label: "Email" },
  { value: "telephone", label: "Téléphone" },
  { value: "sms", label: "SMS" },
  { value: "whatsapp", label: "WhatsApp" },
];

export function OptionsStep() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedUrgency = watch("urgency");

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold font-montserrat mb-2">
          Options & Préférences
        </h2>
        <p className="text-blanc/60">
          Personnalisez votre demande selon vos besoins.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Select
          {...register("urgency")}
          label="Urgence"
          options={urgencies}
        />

        <Select
          {...register("contactMethod")}
          label="Mode de contact préféré"
          options={contactMethods}
        />

        <Input
          {...register("budget")}
          label="Budget indicatif (€)"
          type="number"
          placeholder="Ex: 200"
          helperText="Optionnel - nous aide à orienter nos recherches"
        />

        <Input
          {...register("availability")}
          label="Créneaux de disponibilité"
          placeholder="Ex: En semaine, 9h-18h"
        />
      </div>

      {selectedUrgency === "tres_urgent" && (
        <Card variant="glass" className="border-or/30 bg-or/5">
          <CardContent>
            <p className="text-sm text-or">
              ⚡ <strong>Demande très urgente</strong> - Notre équipe prioritaire
              vous contactera dans les plus brefs délais. Des frais de service
              express peuvent s&apos;appliquer.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4 pt-4 border-t border-blanc/10">
        <Checkbox
          {...register("acceptNotifications")}
          label="J'accepte de recevoir des notifications par email concernant l'avancement de ma demande et des offres personnalisées."
        />

        <Checkbox
          {...register("acceptTerms")}
          label={
            <>
              J&apos;ai lu et j&apos;accepte les{" "}
              <Link href="#" className="text-or hover:underline">
                conditions générales de vente
              </Link>{" "}
              et la{" "}
              <Link href="#" className="text-or hover:underline">
                politique de confidentialité
              </Link>
              . *
            </>
          }
          error={errors.acceptTerms?.message as string}
        />
      </div>

      {/* Recap */}
      <Card variant="glass">
        <CardContent>
          <h3 className="font-semibold font-montserrat mb-4">
            Récapitulatif de votre demande
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-blanc/10">
              <span className="text-blanc/60">Urgence</span>
              <span>
                {urgencies.find((u) => u.value === selectedUrgency)?.label}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-blanc/10">
              <span className="text-blanc/60">Contact préféré</span>
              <span>
                {contactMethods.find((c) => c.value === watch("contactMethod"))?.label}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-blanc/60">Délai de réponse estimé</span>
              <span className="text-or font-medium">24h maximum</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
