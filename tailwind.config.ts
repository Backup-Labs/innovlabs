import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{json,ts}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        ink: {
          900: "var(--ink-900, #0B2B2E)",
          800: "#133D41",
          700: "#1D4E53",
        },
        primary: {
          50: "#F0F9F7",
          100: "#E1F3EE",
          200: "#B8E3D7",
          600: "var(--primary-600, #137A64)",
          700: "var(--primary-700, #0F5C4D)",
          800: "#0C483D",
        },
        accent: {
          50: "#FFFBF0",
          100: "#FEF4D6",
          500: "var(--accent-500, #F2A900)",
          600: "#D99500",
        },
        sky: {
          50: "#EFF8FC",
          100: "#D8EEF8",
          500: "var(--sky-500, #2B8CBE)",
          600: "#22729B",
        },
        surface: "var(--surface, #F6F8F7)",
        line: "var(--line, #E2E8F0)",
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "Manrope", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      letterSpacing: {
        heading: "-0.02em",
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(11, 43, 46, 0.05), 0 1px 2px 0 rgba(11, 43, 46, 0.03)",
        card: "0 4px 6px -1px rgba(11, 43, 46, 0.06), 0 2px 4px -1px rgba(11, 43, 46, 0.04)",
        cardHover: "0 10px 15px -3px rgba(11, 43, 46, 0.08), 0 4px 6px -2px rgba(11, 43, 46, 0.04)",
        dropdown: "0 20px 25px -5px rgba(11, 43, 46, 0.1), 0 10px 10px -5px rgba(11, 43, 46, 0.04)",
      },
      lineHeight: {
        relaxedBody: "1.65",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
