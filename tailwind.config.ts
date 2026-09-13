import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm sage / mint healthcare palette
        brand: {
          50: "#f1f7f2",
          100: "#dceee1",
          200: "#bbdcc6",
          300: "#8fc3a3",
          400: "#63a680",
          500: "#448864",
          600: "#316d50",
          700: "#275842",
          800: "#204738",
          900: "#1a3a2f",
          950: "#0d2019",
        },
        mint: {
          50: "#effaf3",
          100: "#d8f3e0",
          200: "#b3e6c4",
          300: "#84d3a2",
          400: "#55b97e",
          500: "#379c62",
          600: "#297d4e",
          700: "#226340",
          800: "#1e5035",
          900: "#19422d",
        },
        sand: {
          50: "#faf7f2",
          100: "#f4ede0",
          200: "#e9dcc3",
          300: "#d8c39a",
          400: "#c5a771",
          500: "#b28f56",
        },
        ink: {
          900: "#0f1a1f",
          800: "#182833",
          700: "#233846",
          600: "#3a5262",
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
        "hero-mesh":
          "radial-gradient(1100px 620px at 15% 5%, rgba(143,195,163,0.45), transparent 60%), radial-gradient(900px 540px at 85% 15%, rgba(216,243,224,0.65), transparent 60%), radial-gradient(700px 420px at 50% 90%, rgba(244,237,224,0.55), transparent 65%)",
        "sage-fade":
          "linear-gradient(180deg, rgba(220,238,225,0.55) 0%, rgba(250,247,242,1) 60%)",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(15, 26, 31, 0.15)",
        card: "0 8px 30px -12px rgba(15, 26, 31, 0.18)",
        glow: "0 20px 60px -20px rgba(39, 88, 66, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
