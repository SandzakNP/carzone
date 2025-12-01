import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CarZone - Pièces Auto Premium",
  description: "Trouvez vos pièces automobiles de qualité premium. Plus de 50 000 pièces disponibles avec garantie constructeur et livraison express.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased bg-dark text-white font-sans">
        {children}
      </body>
    </html>
  );
}
