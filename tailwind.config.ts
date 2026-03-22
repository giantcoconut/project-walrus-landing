import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050A14",
        mist: "#A4B4D3",
        glow: "#62FFD2",
        ember: "#6EA5FF"
      },
      boxShadow: {
        glass: "0 16px 60px rgba(4, 10, 20, 0.55)",
        soft: "0 10px 30px rgba(7, 16, 32, 0.45)"
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(circle at 20% 20%, rgba(98, 255, 210, 0.18), transparent 32%), radial-gradient(circle at 84% 12%, rgba(110, 165, 255, 0.16), transparent 30%), linear-gradient(160deg, #050A14 0%, #071124 48%, #0B1830 100%)"
      }
    }
  },
  plugins: []
};

export default config;
