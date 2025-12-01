import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // CarZone Premium Colors
        noir: {
          deep: "#0a0a0a",
          dark: "#1a1a1a",
          light: "#2a2a2a",
        },
        or: {
          DEFAULT: "#d4af37",
          light: "#f4e4bc",
          dark: "#b8960c",
        },
        blanc: {
          DEFAULT: "#ffffff",
          off: "#f8f8f8",
          cream: "#faf9f7",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 4px 20px rgba(212, 175, 55, 0.15)",
        "luxury-lg": "0 8px 40px rgba(212, 175, 55, 0.2)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        glass: "16px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0.4)" },
          "50%": { boxShadow: "0 0 0 10px rgba(212, 175, 55, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
