import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";
import { ChatWidget } from "@/components/chat";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CarZone | Pièces Automobiles Premium",
  description:
    "CarZone - Votre partenaire de confiance pour la recherche de pièces automobiles de qualité. Service premium et expertise garantie.",
  keywords: [
    "pièces automobiles",
    "pièces auto",
    "recherche pièces",
    "devis auto",
    "carrosserie",
    "moteur",
    "freinage",
  ],
  openGraph: {
    title: "CarZone | Pièces Automobiles Premium",
    description: "Trouvez vos pièces automobiles avec notre service premium",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-noir-deep text-blanc`}
      >
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
