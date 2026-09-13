import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f9f6",
          100: "#dcefe7",
          200: "#b9dfd0",
          300: "#8bc7b1",
          400: "#5fac91",
          500: "#409177",
          600: "#2f745f",
          700: "#265d4d",
          800: "#204b3f",
          900: "#1b3e35",
          950: "#0d241e",
        },
        sand: {
          50: "#faf7f2",
          100: "#f3ecdf",
          200: "#e7d8bd",
          300: "#d6bd93",
          400: "#c39f69",
          500: "#b0864e",
        },
        ink: {
          900: "#0f1a1f",
          800: "#182833",
          700: "#233846",
        },
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(1000px 600px at 20% 10%, rgba(139,199,177,0.35), transparent 60%), radial-gradient(800px 500px at 90% 20%, rgba(243,236,223,0.6), transparent 60%)",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(15, 26, 31, 0.15)",
        card: "0 8px 30px -12px rgba(15, 26, 31, 0.18)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
