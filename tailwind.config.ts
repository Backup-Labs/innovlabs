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
        black: "#0A0A0A",
        pureblack: "#000000",
        white: "#FFFFFF",
        gray: {
          50: "#FAFAFC",
          100: "#F4F4F6", // Primary light gray canvas from photo
          150: "#EFEFF2",
          200: "#EAEAEF",
          300: "#E2E2E6", // Hairline dividers
          400: "#D1D1D6",
          500: "#8E8E93",
          600: "#636366",
          700: "#48484A",
          800: "#2C2C2E",
          900: "#1C1C1E",
          950: "#0A0A0A",
        },
      },
      fontFamily: {
        sans: ["'Satoshi'", "sans-serif"],
        body: ["'Satoshi'", "sans-serif"],
        heading: ["'Satoshi'", "sans-serif"],
        serif: ["'Instrument Serif'", "serif"],
        display: ["'Instrument Serif'", "serif"],
        mono: ["'Satoshi'", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.03em",
        heading: "-0.02em",
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
        subtleCard: "0 2px 8px -2px rgba(0, 0, 0, 0.04), 0 1px 4px -1px rgba(0, 0, 0, 0.02)",
        hoverCard: "0 14px 30px -8px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        elevation: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
