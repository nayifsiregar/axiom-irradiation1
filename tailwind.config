import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        axiom: {
          deep: "#0B3D91",
          bright: "#00A4FF",
          gray: "#6B6B6B",
          dark: "#050B1A",
        },
      },
      fontFamily: {
        axiom: ["var(--font-axiom)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "orbit-glow":
          "radial-gradient(circle at 50% 50%, rgba(0,164,255,0.35) 0%, rgba(11,61,145,0.15) 40%, transparent 70%)",
        "hero-earth":
          "radial-gradient(ellipse at 30% 40%, #0B3D91 0%, #050B1A 70%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,164,255,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;