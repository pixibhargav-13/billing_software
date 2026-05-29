import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        accent: {
          500: "#f59e0b",
          600: "#d97706",
        },
        ink: {
          900: "#0b1f2a",
          800: "#163240",
          700: "#264653",
          500: "#4a6572",
          400: "#6b7e87",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["'Plus Jakarta Sans'", "Inter", "ui-sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(20, 184, 166, 0.18)",
        card: "0 4px 24px -6px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 1px 1px, rgba(15,118,110,0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
