import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{json,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#040D0E",
          900: "#061517",
          850: "#081E21",
          800: "#0B2B2E",
          700: "#133D41",
          600: "#1A5257",
        },
        primary: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#0F5C4D",
          800: "#0C483D",
        },
        accent: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          400: "#FBBF24",
          500: "#F2A900",
          600: "#D97706",
        },
        sky: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          400: "#38BDF8",
          500: "#2B8CBE",
          600: "#0284C7",
        },
        surface: {
          dark: "#091B1D",
          card: "#0C2326",
          glass: "rgba(11, 43, 46, 0.45)",
          border: "rgba(255, 255, 255, 0.08)",
        },
        line: "var(--line, #1D3A3E)",
      },
      fontFamily: {
        heading: ["'Clash Display'", "var(--font-clash)", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        heading: "-0.025em",
        display: "-0.035em",
        cyber: "0.15em",
      },
      maxWidth: {
        container: "1240px",
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        glowEmerald: "0 0 35px -5px rgba(16, 185, 129, 0.3)",
        glowGold: "0 0 35px -5px rgba(242, 169, 0, 0.3)",
        glowCyan: "0 0 35px -5px rgba(56, 189, 248, 0.3)",
        cyberCard: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.2)",
      },
      animation: {
        pulseSlow: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        scanline: "scanline 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
