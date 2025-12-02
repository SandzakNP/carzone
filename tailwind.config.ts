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
        // CarZone Premium Colors - Blue Palette
        noir: {
          deep: "#0a0a0a",
          dark: "#1a1a1a",
          light: "#2a2a2a",
        },
        primary: {
          DEFAULT: "#2d5a87",
          navy: "#1a3a5c",
          light: "#4a90b8",
          pale: "#e8f1f8",
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
        luxury: "0 4px 20px rgba(45, 90, 135, 0.2)",
        "luxury-lg": "0 8px 40px rgba(45, 90, 135, 0.25)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        glass: "16px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-blue": "pulseBlue 2s ease-in-out infinite",
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
        pulseBlue: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(45, 90, 135, 0.4)" },
          "50%": { boxShadow: "0 0 0 10px rgba(45, 90, 135, 0)" },
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
