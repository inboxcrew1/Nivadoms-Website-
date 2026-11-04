import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        // Double-shade Black & Dark Amber Brown scale
        charcoal: {
          DEFAULT: "#0F0A06", // Deep black with rich dark amber undertone
          50: "#3D2716",
          100: "#301F12",
          200: "#24180E",
          300: "#1C120A",     // Card / container double shade
          400: "#140D07",     // Elevated section backdrop
          500: "#0F0A06",     // Primary dark backdrop
          600: "#0C0805",     // Deep shade
          700: "#090603",
          800: "#060402",
          900: "#000000",
        },
        // Exact user specified Dark Amber Brown #5B3A1C (RGB 91, 58, 28)
        amber: {
          DEFAULT: "#5B3A1C",
          50: "#F6EDE5",
          100: "#EBDAC9",
          200: "#D7B596",
          300: "#BE8D62",
          400: "#8C582B",
          500: "#5B3A1C",     // Target HEX #5B3A1C
          600: "#4B3017",
          700: "#3B2512",
          800: "#2B1B0D",
          900: "#1A1008",
          dark: "#3D2410",
          rich: "#5B3A1C",
          glow: "#A06733",
        },
        // Warm amber-champagne accent with luminous high contrast against dark amber brown
        champagne: {
          DEFAULT: "#D9A05B",
          light: "#EBBF7E",
          dark: "#A87235",
          50: "#FCF8F2",
          100: "#F7EEDF",
          200: "#EEDBBF",
          300: "#E4C59B",
          400: "#DEB37B",
          500: "#D9A05B",
          600: "#C48A44",
          700: "#9E6A2C",
          800: "#754C1B",
          900: "#4D300F",
        },
        gold: {
          warm: "#EBBF7E",
          DEFAULT: "#D9A05B",
          muted: "#B88344",
        },
        // Crisp, high-contrast text shades
        ivory: {
          DEFAULT: "#F7F3EB",
          light: "#FFFFFF",
          dark: "#EAE3D5",
        },
        stone: {
          warm: "#D6C9BA", // High-contrast warm readable stone for body copy
          light: "#E5DDD1",
          dark: "#B8A793",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
        ultra: ".35em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-shimmer": "linear-gradient(90deg, #5B3A1C 0%, #EBBF7E 50%, #5B3A1C 100%)",
        "double-shade": "linear-gradient(135deg, #0A0604 0%, #26160C 50%, #5B3A1C 80%, #0A0604 100%)",
        "charcoal-fade": "linear-gradient(180deg, rgba(15,10,6,0) 0%, rgba(36,24,14,0.85) 60%, rgba(15,10,6,1) 100%)",
        "amber-double": "linear-gradient(180deg, #0F0A06 0%, #24180E 50%, #0F0A06 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
