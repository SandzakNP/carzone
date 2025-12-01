import { z } from "zod";

// VIN validation pattern (17 characters, no I, O, Q)
const VIN_PATTERN = /^[A-HJ-NPR-Z0-9]{17}$/i;

// Reusable VIN validation function
export function isValidVIN(vin: string): boolean {
  return vin.length === 17 && VIN_PATTERN.test(vin);
}

// VIN Zod schema
export const vinSchema = z
  .string()
  .length(17, "Le VIN doit contenir exactement 17 caractères")
  .regex(
    VIN_PATTERN,
    "Le VIN ne peut contenir que des lettres (sauf I, O, Q) et des chiffres"
  );

// French phone validation
export const phoneSchema = z
  .string()
  .regex(
    /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
    "Numéro de téléphone français invalide"
  );

// Email validation
export const emailSchema = z.string().email("Adresse email invalide");

// Vehicle identification schema
export const vehicleSchema = z.object({
  vin: vinSchema.optional(),
  brand: z.string().min(1, "La marque est requise"),
  model: z.string().min(1, "Le modèle est requis"),
  year: z.number().min(1990).max(new Date().getFullYear() + 1),
  version: z.string().optional(),
  motorization: z.enum(["essence", "diesel", "hybride", "electrique", "gpl"]),
  displacement: z.string().optional(),
  power: z.string().optional(),
  gearbox: z.enum(["manuelle", "automatique", "dsg", "cvt"]),
  mileage: z.number().min(0).optional(),
});

// Part identification schema
export const partSchema = z.object({
  category: z.string().min(1, "La catégorie est requise"),
  name: z.string().min(1, "Le nom de la pièce est requis"),
  oemReference: z.string().optional(),
  aftermarketReference: z.string().optional(),
  side: z.enum(["gauche", "droite", "centre", "na"]).default("na"),
  position: z.enum(["avant", "arriere", "na"]).default("na"),
  condition: z.enum([
    "neuf_oem",
    "neuf_aftermarket",
    "reconditionne",
    "occasion",
    "peu_importe",
  ]),
  quantity: z.number().min(1).default(1),
  description: z.string().optional(),
});

// Customer information schema
export const customerSchema = z.object({
  civility: z.enum(["M", "Mme"]),
  lastName: z.string().min(1, "Le nom est requis"),
  firstName: z.string().min(1, "Le prénom est requis"),
  email: emailSchema,
  phone: phoneSchema,
  address: z.string().min(1, "L'adresse est requise"),
  postalCode: z
    .string()
    .regex(/^\d{5}$/, "Code postal invalide"),
  city: z.string().min(1, "La ville est requise"),
  country: z.string().default("France"),
});

// Options and preferences schema
export const optionsSchema = z.object({
  urgency: z.enum(["standard", "urgent", "tres_urgent"]).default("standard"),
  budget: z.number().optional(),
  contactMethod: z.enum(["email", "telephone", "sms", "whatsapp"]).default("email"),
  availability: z.string().optional(),
  acceptNotifications: z.boolean().default(false),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter les conditions générales" }),
  }),
});

// Complete search request schema
export const searchRequestSchema = z.object({
  vehicle: vehicleSchema,
  part: partSchema,
  customer: customerSchema,
  options: optionsSchema,
});

export type VehicleData = z.infer<typeof vehicleSchema>;
export type PartData = z.infer<typeof partSchema>;
export type CustomerData = z.infer<typeof customerSchema>;
export type OptionsData = z.infer<typeof optionsSchema>;
export type SearchRequestData = z.infer<typeof searchRequestSchema>;
