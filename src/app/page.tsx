"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Shield,
  Zap,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Car,
  Wrench,
  Users,
} from "lucide-react";
import { Button, Card, CardContent } from "@/components/ui";

const features = [
  {
    icon: Search,
    title: "Recherche Intelligente",
    description:
      "Décodage automatique du VIN pour une identification précise de votre véhicule.",
  },
  {
    icon: Shield,
    title: "Qualité Garantie",
    description:
      "Pièces neuves, reconditionnées ou d'occasion, toutes vérifiées et garanties.",
  },
  {
    icon: Zap,
    title: "Réponse Rapide",
    description:
      "Obtenez votre devis personnalisé sous 24h par notre équipe d'experts.",
  },
  {
    icon: Clock,
    title: "Livraison Express",
    description:
      "Expédition rapide avec suivi en temps réel de votre commande.",
  },
];

const stats = [
  { value: "50K+", label: "Pièces Disponibles" },
  { value: "10K+", label: "Clients Satisfaits" },
  { value: "98%", label: "Taux de Satisfaction" },
  { value: "24h", label: "Délai de Réponse" },
];

const testimonials = [
  {
    name: "Jean-Pierre M.",
    role: "Mécanicien indépendant",
    content:
      "Service exceptionnel ! J'ai trouvé une pièce rare pour un véhicule ancien en moins de 48h. La qualité est au rendez-vous.",
    rating: 5,
  },
  {
    name: "Sophie L.",
    role: "Particulier",
    content:
      "Interface élégante et facile à utiliser. Le décodage automatique du VIN m'a fait gagner un temps précieux.",
    rating: 5,
  },
  {
    name: "Marc D.",
    role: "Garage automobile",
    content:
      "Partenaire fiable depuis 2 ans. Les prix sont compétitifs et la livraison toujours dans les temps.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-noir-deep via-noir-dark to-noir-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,90,135,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(45,90,135,0.08),transparent_50%)]" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#2d5a87_1px,transparent_1px),linear-gradient(to_bottom,#2d5a87_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Service Premium de Recherche de Pièces
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat mb-6 leading-tight"
            >
              Trouvez la{" "}
              <span className="text-gradient-gold">Pièce Parfaite</span>
              <br />
              pour Votre Véhicule
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-blanc/70 max-w-2xl mx-auto mb-10"
            >
              CarZone simplifie votre recherche de pièces automobiles grâce à
              notre technologie de décodage VIN et notre réseau de fournisseurs
              premium.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/recherche">
                <Button variant="primary" size="lg" className="group">
                  Rechercher une Pièce
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/espace-client">
                <Button variant="outline" size="lg">
                  Espace Client
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-noir-deep to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-noir-dark/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold font-montserrat text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-blanc/60 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
              Pourquoi Choisir{" "}
              <span className="text-gradient-gold">CarZone</span> ?
            </h2>
            <p className="text-blanc/60 max-w-2xl mx-auto">
              Une expérience premium à chaque étape de votre recherche de pièces
              automobiles.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="glass" className="h-full">
                  <CardContent>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold font-montserrat mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-blanc/60 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-noir-dark/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
              Comment ça <span className="text-gradient-gold">Marche</span> ?
            </h2>
            <p className="text-blanc/60 max-w-2xl mx-auto">
              Un processus simple et efficace pour trouver votre pièce.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                step: "01",
                icon: Car,
                title: "Identifiez Votre Véhicule",
                description:
                  "Entrez votre numéro VIN ou sélectionnez manuellement les caractéristiques de votre véhicule.",
              },
              {
                step: "02",
                icon: Wrench,
                title: "Décrivez la Pièce",
                description:
                  "Sélectionnez la catégorie et décrivez la pièce recherchée avec précision.",
              },
              {
                step: "03",
                icon: CheckCircle,
                title: "Recevez Votre Devis",
                description:
                  "Notre équipe vous contacte sous 24h avec un devis personnalisé.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 text-8xl font-bold font-montserrat text-primary/10">
                    {item.step}
                  </div>
                  <Card variant="glass" className="relative z-10">
                    <CardContent className="pt-8">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4">
                        <item.icon className="w-7 h-7 text-blanc" />
                      </div>
                      <h3 className="text-xl font-semibold font-montserrat mb-3">
                        {item.title}
                      </h3>
                      <p className="text-blanc/60">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/recherche">
              <Button variant="primary" size="lg" className="group">
                Commencer Maintenant
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
              Ce que Disent Nos{" "}
              <span className="text-gradient-gold">Clients</span>
            </h2>
            <p className="text-blanc/60 max-w-2xl mx-auto">
              La satisfaction de nos clients est notre priorité.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="glass" className="h-full">
                  <CardContent>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-primary fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-blanc/80 mb-6 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-blanc/60">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,90,135,0.15),transparent_70%)]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-6">
              Prêt à Trouver Votre{" "}
              <span className="text-gradient-gold">Pièce</span> ?
            </h2>
            <p className="text-lg text-blanc/70 mb-8">
              Lancez votre recherche dès maintenant et profitez de notre
              expertise pour trouver la pièce parfaite pour votre véhicule.
            </p>
            <Link href="/recherche">
              <Button variant="primary" size="lg" className="group">
                Démarrer une Recherche Gratuite
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
