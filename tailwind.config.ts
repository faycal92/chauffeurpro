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
        background: "#0a0a0a",
        foreground: "#f5f5f0",
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e2c774",
          dark: "#9c7f36",
        },
        charcoal: {
          DEFAULT: "#0a0a0a",
          light: "#151515",
          card: "#121212",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #e2c774 0%, #c9a84c 50%, #9c7f36 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
