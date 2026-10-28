import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{json,ts}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: "#FAF9F6",
          100: "#F5F2EB", // Palladio base background
          150: "#EFECE4", // Card & alternate section
          200: "#E5E1D6",
          300: "#DCD7CC", // Hairline border
          400: "#B8B1A2",
          500: "#8C8577",
          600: "#6B6559",
          700: "#4D483F",
          800: "#2B2823",
          900: "#151619", // Palladio dark ink
        },
        charcoal: {
          950: "#0A0A0A",
          900: "#151619",
          850: "#1F2126",
          800: "#26282E",
        },
        botanical: {
          700: "#1B4D3E",
          600: "#246B56",
          500: "#2F6B4F", // Palladio green accent
          400: "#438A69",
          100: "#E6F0EB",
          50: "#F2F7F4",
        },
        terracotta: {
          600: "#8F3E28",
          500: "#9C4930", // Palladio terracotta accent
          400: "#B55A40",
          100: "#F7ECE8",
          50: "#FAF4F2",
        },
        accent: {
          500: "#D97706",
          600: "#B45309",
        },
      },
      fontFamily: {
        heading: ["'Clash Display'", "sans-serif"],
        body: ["'Clash Display'", "sans-serif"],
        sans: ["'Clash Display'", "sans-serif"],
        mono: ["'Clash Display'", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        display: "-0.04em",
        heading: "-0.025em",
        widePill: "0.08em",
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        card: "16px",
        pill: "9999px",
      },
      boxShadow: {
        subtleCard: "0 2px 8px -2px rgba(21, 22, 25, 0.04), 0 1px 4px -1px rgba(21, 22, 25, 0.02)",
        hoverCard: "0 12px 24px -6px rgba(21, 22, 25, 0.06), 0 4px 12px -2px rgba(21, 22, 25, 0.03)",
        elevation: "0 20px 40px -15px rgba(21, 22, 25, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
