"use client";

import { useFormContext } from "react-hook-form";
import { Input, Select } from "@/components/ui";

const civilities = [
  { value: "M", label: "Monsieur" },
  { value: "Mme", label: "Madame" },
];

const countries = [
  { value: "France", label: "France" },
  { value: "Belgique", label: "Belgique" },
  { value: "Suisse", label: "Suisse" },
  { value: "Luxembourg", label: "Luxembourg" },
];

export function CustomerStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold font-montserrat mb-2">
          Vos Coordonnées
        </h2>
        <p className="text-blanc/60">
          Ces informations nous permettront de vous contacter pour votre devis.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Select
          {...register("civility")}
          label="Civilité"
          options={civilities}
          placeholder="Sélectionnez"
          error={errors.civility?.message as string}
          required
        />

        <div className="hidden md:block" /> {/* Spacer */}

        <Input
          {...register("lastName")}
          label="Nom"
          placeholder="Votre nom"
          error={errors.lastName?.message as string}
          required
        />

        <Input
          {...register("firstName")}
          label="Prénom"
          placeholder="Votre prénom"
          error={errors.firstName?.message as string}
          required
        />

        <Input
          {...register("email")}
          label="Email"
          type="email"
          placeholder="votre@email.com"
          error={errors.email?.message as string}
          required
        />

        <Input
          {...register("phone")}
          label="Téléphone"
          type="tel"
          placeholder="06 12 34 56 78"
          error={errors.phone?.message as string}
          required
        />

        <div className="md:col-span-2">
          <Input
            {...register("address")}
            label="Adresse"
            placeholder="Numéro et nom de rue"
            error={errors.address?.message as string}
            required
          />
        </div>

        <Input
          {...register("postalCode")}
          label="Code postal"
          placeholder="75001"
          maxLength={5}
          error={errors.postalCode?.message as string}
          required
        />

        <Input
          {...register("city")}
          label="Ville"
          placeholder="Paris"
          error={errors.city?.message as string}
          required
        />

        <Select
          {...register("country")}
          label="Pays"
          options={countries}
        />
      </div>
    </div>
  );
}
