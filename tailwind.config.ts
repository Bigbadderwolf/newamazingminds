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
        terracotta: {
          DEFAULT: "#C1440E",
          light: "#E8623A",
        },
        gold: {
          DEFAULT: "#D4A017",
          light: "#F0C040",
        },
        forest: {
          DEFAULT: "#2D6A4F",
          light: "#52B788",
        },
        midnight: "#1A1A2E",
        charcoal: "#2C2C2A",
        cream: "#FDF6EC",
        "ama-purple": "#7C3AED",
        "ama-sky": "#0EA5E9",
        "ama-pink": "#EC4899",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
