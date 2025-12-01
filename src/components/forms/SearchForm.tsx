"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import {
  Car,
  Wrench,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui";
import { VehicleStep } from "@/components/forms/VehicleStep";
import { PartStep } from "@/components/forms/PartStep";
import { CustomerStep } from "@/components/forms/CustomerStep";
import { OptionsStep } from "@/components/forms/OptionsStep";
import { generateRequestNumber } from "@/lib/utils";

// Simplified schema for form validation
const formSchema = z.object({
  // Vehicle
  vin: z.string().optional(),
  brand: z.string().min(1, "La marque est requise"),
  model: z.string().min(1, "Le modèle est requis"),
  year: z.string().min(1, "L'année est requise"),
  version: z.string().optional(),
  motorization: z.string().min(1, "La motorisation est requise"),
  displacement: z.string().optional(),
  power: z.string().optional(),
  gearbox: z.string().min(1, "Le type de boîte est requis"),
  mileage: z.string().optional(),

  // Part
  category: z.string().min(1, "La catégorie est requise"),
  partName: z.string().min(1, "Le nom de la pièce est requis"),
  oemReference: z.string().optional(),
  aftermarketReference: z.string().optional(),
  side: z.string().default("na"),
  position: z.string().default("na"),
  condition: z.string().min(1, "L'état souhaité est requis"),
  quantity: z.string().default("1"),
  description: z.string().optional(),

  // Customer
  civility: z.string().min(1, "La civilité est requise"),
  lastName: z.string().min(1, "Le nom est requis"),
  firstName: z.string().min(1, "Le prénom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  address: z.string().min(1, "L'adresse est requise"),
  postalCode: z.string().regex(/^\d{5}$/, "Code postal invalide"),
  city: z.string().min(1, "La ville est requise"),
  country: z.string().default("France"),

  // Options
  urgency: z.string().default("standard"),
  budget: z.string().optional(),
  contactMethod: z.string().default("email"),
  availability: z.string().optional(),
  acceptNotifications: z.boolean().default(false),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter les conditions générales",
  }),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 1, title: "Véhicule", icon: Car },
  { id: 2, title: "Pièce", icon: Wrench },
  { id: 3, title: "Coordonnées", icon: User },
  { id: 4, title: "Options", icon: Settings },
];

export function SearchForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      side: "na",
      position: "na",
      quantity: "1",
      country: "France",
      urgency: "standard",
      contactMethod: "email",
      acceptNotifications: false,
      acceptTerms: false,
    },
  });

  const { handleSubmit, trigger } = methods;

  const validateStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = ["brand", "model", "year", "motorization", "gearbox"];
        break;
      case 2:
        fieldsToValidate = ["category", "partName", "condition"];
        break;
      case 3:
        fieldsToValidate = [
          "civility",
          "lastName",
          "firstName",
          "email",
          "phone",
          "address",
          "postalCode",
          "city",
        ];
        break;
      case 4:
        fieldsToValidate = ["acceptTerms"];
        break;
    }

    return await trigger(fieldsToValidate);
  };

  const handleNext = async () => {
    const isValid = await validateStep();
    if (isValid && currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Generate request number
    const requestNumber = generateRequestNumber();
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Store data in sessionStorage for confirmation page
    sessionStorage.setItem(
      "carzone_request",
      JSON.stringify({
        ...data,
        requestNumber,
        submittedAt: new Date().toISOString(),
      })
    );
    
    router.push("/confirmation");
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <motion.div
                  animate={{
                    scale: currentStep === step.id ? 1.1 : 1,
                  }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentStep >= step.id
                      ? "bg-gradient-to-br from-or to-or-light text-noir-deep"
                      : "bg-noir-light border border-blanc/20 text-blanc/40"
                  }`}
                >
                  {currentStep > step.id ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </motion.div>
                <span
                  className={`mt-2 text-sm font-medium hidden sm:block ${
                    currentStep >= step.id ? "text-or" : "text-blanc/40"
                  }`}
                >
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 transition-all duration-300 ${
                    currentStep > step.id ? "bg-or" : "bg-blanc/10"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && <VehicleStep />}
              {currentStep === 2 && <PartStep />}
              {currentStep === 3 && <CustomerStep />}
              {currentStep === 4 && <OptionsStep />}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-blanc/10">
            <Button
              type="button"
              variant="ghost"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Précédent
            </Button>

            {currentStep < 4 ? (
              <Button
                type="button"
                variant="primary"
                onClick={handleNext}
                className="gap-2"
              >
                Suivant
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                variant="primary"
                isLoading={isSubmitting}
                className="gap-2"
              >
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    Envoyer ma demande
                    <Check className="w-4 h-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
