"use client";

import { useFormContext } from "react-hook-form";
import { Upload, X } from "lucide-react";
import { Input, Select, Textarea, Card, CardContent } from "@/components/ui";
import { useState } from "react";

const categories = [
  { value: "moteur", label: "Moteur & Distribution" },
  { value: "freinage", label: "Freinage" },
  { value: "suspension", label: "Suspension & Direction" },
  { value: "embrayage", label: "Embrayage & Transmission" },
  { value: "carrosserie", label: "Carrosserie & Vitrage" },
  { value: "eclairage", label: "Éclairage" },
  { value: "electricite", label: "Électricité & Électronique" },
  { value: "climatisation", label: "Climatisation & Chauffage" },
  { value: "echappement", label: "Échappement" },
  { value: "interieur", label: "Intérieur & Habitacle" },
  { value: "autres", label: "Autres" },
];

const sides = [
  { value: "na", label: "Non applicable" },
  { value: "gauche", label: "Gauche" },
  { value: "droite", label: "Droite" },
  { value: "centre", label: "Centre" },
];

const positions = [
  { value: "na", label: "Non applicable" },
  { value: "avant", label: "Avant" },
  { value: "arriere", label: "Arrière" },
];

const conditions = [
  { value: "neuf_oem", label: "Neuf (origine constructeur)" },
  { value: "neuf_aftermarket", label: "Neuf (équipementier)" },
  { value: "reconditionne", label: "Reconditionné / Échange standard" },
  { value: "occasion", label: "Occasion garantie" },
  { value: "peu_importe", label: "Peu importe" },
];

const quantities = Array.from({ length: 10 }, (_, i) => ({
  value: String(i + 1),
  label: String(i + 1),
}));

export function PartStep() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files).slice(0, 5 - uploadedFiles.length);
      setUploadedFiles((prev) => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold font-montserrat mb-2">
          Identification de la Pièce
        </h2>
        <p className="text-blanc/60">
          Décrivez la pièce que vous recherchez avec le maximum de détails.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Select
          {...register("category")}
          label="Catégorie de pièce"
          options={categories}
          placeholder="Sélectionnez une catégorie"
          error={errors.category?.message as string}
          required
        />

        <Input
          {...register("partName")}
          label="Nom de la pièce recherchée"
          placeholder="Ex: Disque de frein, Alternateur..."
          error={errors.partName?.message as string}
          required
        />

        <Input
          {...register("oemReference")}
          label="Référence OEM (constructeur)"
          placeholder="Ex: 1K0615301AD"
        />

        <Input
          {...register("aftermarketReference")}
          label="Référence équipementier"
          placeholder="Ex: BOSCH 0986479108"
        />

        <Select
          {...register("side")}
          label="Côté"
          options={sides}
          placeholder="Sélectionnez le côté"
        />

        <Select
          {...register("position")}
          label="Position"
          options={positions}
          placeholder="Sélectionnez la position"
        />

        <Select
          {...register("condition")}
          label="État souhaité"
          options={conditions}
          placeholder="Sélectionnez l'état"
          error={errors.condition?.message as string}
          required
        />

        <Select
          {...register("quantity")}
          label="Quantité"
          options={quantities}
        />
      </div>

      <Textarea
        {...register("description")}
        label="Description complémentaire"
        placeholder="Décrivez votre besoin en détail : symptômes, informations supplémentaires..."
        rows={4}
      />

      {/* File Upload */}
      <Card variant="glass">
        <CardContent>
          <label className="block text-sm font-medium text-blanc/80 mb-4">
            Photos (jusqu&apos;à 5 images)
          </label>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg bg-noir-light/50 border border-blanc/10 overflow-hidden group"
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="absolute top-2 right-2 p-1 rounded-full bg-noir-deep/80 text-blanc/80 hover:text-blanc opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}

            {uploadedFiles.length < 5 && (
              <label className="aspect-square rounded-lg border-2 border-dashed border-blanc/20 hover:border-or/50 cursor-pointer flex flex-col items-center justify-center text-blanc/40 hover:text-or transition-colors">
                <Upload className="w-8 h-8 mb-2" />
                <span className="text-xs text-center">Ajouter</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>

          <p className="text-sm text-blanc/40 mt-3">
            Formats acceptés : JPG, PNG, GIF. Taille max : 5 Mo par image.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
