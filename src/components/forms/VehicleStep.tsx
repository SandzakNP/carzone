"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import { Search, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Input, Select, Card, CardContent, Button } from "@/components/ui";
import { decodeVIN, validateVIN } from "@/lib/vin-decoder";

const brands = [
  { value: "audi", label: "Audi" },
  { value: "bmw", label: "BMW" },
  { value: "citroen", label: "Citroën" },
  { value: "dacia", label: "Dacia" },
  { value: "fiat", label: "Fiat" },
  { value: "ford", label: "Ford" },
  { value: "honda", label: "Honda" },
  { value: "hyundai", label: "Hyundai" },
  { value: "kia", label: "Kia" },
  { value: "mazda", label: "Mazda" },
  { value: "mercedes", label: "Mercedes-Benz" },
  { value: "nissan", label: "Nissan" },
  { value: "opel", label: "Opel" },
  { value: "peugeot", label: "Peugeot" },
  { value: "renault", label: "Renault" },
  { value: "seat", label: "Seat" },
  { value: "skoda", label: "Škoda" },
  { value: "toyota", label: "Toyota" },
  { value: "volkswagen", label: "Volkswagen" },
  { value: "volvo", label: "Volvo" },
  { value: "other", label: "Autre" },
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1989 }, (_, i) => ({
  value: String(currentYear - i),
  label: String(currentYear - i),
}));

const motorizations = [
  { value: "essence", label: "Essence" },
  { value: "diesel", label: "Diesel" },
  { value: "hybride", label: "Hybride" },
  { value: "electrique", label: "Électrique" },
  { value: "gpl", label: "GPL" },
];

const gearboxes = [
  { value: "manuelle", label: "Manuelle" },
  { value: "automatique", label: "Automatique" },
  { value: "dsg", label: "DSG / Double embrayage" },
  { value: "cvt", label: "CVT / Variateur" },
];

export function VehicleStep() {
  const [isDecoding, setIsDecoding] = useState(false);
  const [decodeStatus, setDecodeStatus] = useState<"idle" | "success" | "error">("idle");
  const [decodeMessage, setDecodeMessage] = useState("");

  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const vin = watch("vin");

  const handleVINDecode = async () => {
    if (!vin || !validateVIN(vin)) {
      setDecodeStatus("error");
      setDecodeMessage("VIN invalide. Le VIN doit contenir 17 caractères (pas de I, O, Q).");
      return;
    }

    setIsDecoding(true);
    setDecodeStatus("idle");

    try {
      const result = await decodeVIN(vin);

      if (result.errorCode && result.errorCode !== "0") {
        setDecodeStatus("error");
        setDecodeMessage("Impossible de décoder ce VIN. Veuillez saisir les informations manuellement.");
      } else {
        // Map decoded values to form
        const brandValue = brands.find(
          (b) => b.label.toLowerCase().includes(result.make.toLowerCase())
        )?.value;

        if (brandValue) setValue("brand", brandValue);
        if (result.model) setValue("model", result.model);
        if (result.modelYear) setValue("year", result.modelYear);
        
        // Map fuel type
        const fuelMap: Record<string, string> = {
          "Gasoline": "essence",
          "Diesel": "diesel",
          "Electric": "electrique",
          "Hybrid": "hybride",
        };
        if (result.fuelType && fuelMap[result.fuelType]) {
          setValue("motorization", fuelMap[result.fuelType]);
        }

        // Map transmission
        const transMap: Record<string, string> = {
          "Manual": "manuelle",
          "Automatic": "automatique",
        };
        if (result.transmissionStyle && transMap[result.transmissionStyle]) {
          setValue("gearbox", transMap[result.transmissionStyle]);
        }

        if (result.displacement) {
          setValue("displacement", `${result.displacement}L`);
        }

        setDecodeStatus("success");
        setDecodeMessage("VIN décodé avec succès ! Les informations ont été pré-remplies.");
      }
    } catch {
      setDecodeStatus("error");
      setDecodeMessage("Erreur lors du décodage. Veuillez réessayer ou saisir les informations manuellement.");
    } finally {
      setIsDecoding(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold font-montserrat mb-2">
          Identification du Véhicule
        </h2>
        <p className="text-blanc/60">
          Entrez le numéro VIN pour un remplissage automatique ou saisissez les
          informations manuellement.
        </p>
      </div>

      {/* VIN Decoder Section */}
      <Card variant="glass">
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                {...register("vin")}
                label="Numéro de châssis (VIN)"
                placeholder="Ex: WVWZZZ3CZWE123456"
                helperText="17 caractères - Visible sur la carte grise (case E)"
                className="uppercase"
                maxLength={17}
              />
            </div>
            <div className="flex items-end">
              <Button
                type="button"
                variant="secondary"
                onClick={handleVINDecode}
                disabled={!vin || vin.length !== 17 || isDecoding}
                className="gap-2"
              >
                {isDecoding ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Search className="w-4 h-4" />
                )}
                Décoder
              </Button>
            </div>
          </div>

          {decodeStatus !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 rounded-lg flex items-start gap-3 ${
                decodeStatus === "success"
                  ? "bg-green-500/10 border border-green-500/30"
                  : "bg-red-500/10 border border-red-500/30"
              }`}
            >
              {decodeStatus === "success" ? (
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              )}
              <p
                className={`text-sm ${
                  decodeStatus === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {decodeMessage}
              </p>
            </motion.div>
          )}
        </CardContent>
      </Card>

      {/* Manual Entry */}
      <div className="grid md:grid-cols-2 gap-6">
        <Select
          {...register("brand")}
          label="Marque"
          options={brands}
          placeholder="Sélectionnez une marque"
          error={errors.brand?.message as string}
          required
        />

        <Input
          {...register("model")}
          label="Modèle"
          placeholder="Ex: Golf, 308, Clio..."
          error={errors.model?.message as string}
          required
        />

        <Select
          {...register("year")}
          label="Année / Millésime"
          options={years}
          placeholder="Sélectionnez l'année"
          error={errors.year?.message as string}
          required
        />

        <Input
          {...register("version")}
          label="Version / Finition"
          placeholder="Ex: GTI, RS, GT Line..."
        />

        <Select
          {...register("motorization")}
          label="Motorisation"
          options={motorizations}
          placeholder="Sélectionnez le type"
          error={errors.motorization?.message as string}
          required
        />

        <Input
          {...register("displacement")}
          label="Cylindrée"
          placeholder="Ex: 1.6L, 2.0L, 150kW..."
        />

        <Input
          {...register("power")}
          label="Puissance"
          placeholder="Ex: 150 CV, 110 kW..."
        />

        <Select
          {...register("gearbox")}
          label="Type de boîte"
          options={gearboxes}
          placeholder="Sélectionnez le type"
          error={errors.gearbox?.message as string}
          required
        />

        <Input
          {...register("mileage")}
          label="Kilométrage actuel"
          placeholder="Ex: 85000"
          type="number"
        />
      </div>
    </div>
  );
}
