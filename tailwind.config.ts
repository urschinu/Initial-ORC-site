import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1F2933",
        paper: "#F7F4EE",
        laterite: "#8E4B3E",
        slate: "#5F6B6D",
        line: "#D9D2C6",
        indigo: "#1E2A45",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(31, 41, 51, 0.08)",
      },
      maxWidth: {
        measure: "72ch",
      },
      backgroundImage: {
        "paper-grid":
          "linear-gradient(to right, rgba(31,41,51,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,41,51,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
    },
  },
  plugins: [],
};

export default config;
