import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFBF7",
        pink: {
          soft: "#F8E8EE",
          DEFAULT: "#F5D5E0",
        },
        chocolate: {
          DEFAULT: "#4A2C2A",
          light: "#6B4543",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E5C76B",
          dark: "#A6851F",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(74, 44, 42, 0.08)",
        elevated: "0 8px 32px rgba(74, 44, 42, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
