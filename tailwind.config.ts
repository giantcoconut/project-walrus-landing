import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1f1a16",
        muted: "#6d5e4a",
        sand: "#f4efe6",
        paper: "#fffaf2",
        line: "#e6dccd",
        accent: "#4e5fc9",
        mint: "#1e7a66"
      },
      boxShadow: {
        soft: "0 15px 50px rgba(121, 106, 84, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;