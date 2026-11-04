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
        // Lighter Double-Shade Amber scale (Noticeably lighter, richer warm amber-brown tones)
        charcoal: {
          DEFAULT: "#26180F", // Visibly warm, lighter dark-amber base (replaces pitch-black)
          50: "#5B3A1C",     // Rich Dark Amber Brown anchor #5B3A1C
          100: "#4D3118",
          200: "#412A15",
          300: "#362212",    // Double-shade container / card
          400: "#2E1D10",    // Elevated section backdrop
          500: "#26180F",    // Main page backdrop
          600: "#1F130B",    // Subtle deep shade
          700: "#1A1009",
          800: "#140C07",
          900: "#0D0704",
        },
        // Anchor Dark Amber Brown #5B3A1C (RGB 91, 58, 28) and luminous lighter shades
        amber: {
          DEFAULT: "#5B3A1C",
          50: "#FDF8F3",
          100: "#F5E6D4",
          200: "#E6C6A4",
          300: "#CE9B67",
          400: "#8F5A2C",
          500: "#5B3A1C",    // Exact HEX #5B3A1C
          600: "#4D3118",
          700: "#402813",
          800: "#321F0F",
          900: "#24160B",
          dark: "#402813",
          rich: "#5B3A1C",
          glow: "#C68B4E",
        },
        // Radiant champagne-amber accent (brighter & luminous against the lighter warm background)
        champagne: {
          DEFAULT: "#E5B16F",
          light: "#F2C889",
          dark: "#BF873D",
          50: "#FDFBF7",
          100: "#FAF3E6",
          200: "#F3E3C8",
          300: "#ECCE9F",
          400: "#E9BE83",
          500: "#E5B16F",
          600: "#D4984A",
          700: "#B0762E",
          800: "#86541A",
          900: "#54330C",
        },
        gold: {
          warm: "#F2C889",
          DEFAULT: "#E5B16F",
          muted: "#C8954F",
        },
        // Ultra-clean, crisp high-contrast text shades
        ivory: {
          DEFAULT: "#FAF7F2",
          light: "#FFFFFF",
          dark: "#EFE8DC",
        },
        stone: {
          warm: "#E8DDD2", // Brighter, clearer warm stone for effortless reading
          light: "#F2EBE2",
          dark: "#C9BAA9",
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
        "gold-shimmer": "linear-gradient(90deg, #5B3A1C 0%, #F2C889 50%, #5B3A1C 100%)",
        "double-shade": "linear-gradient(135deg, #1A1009 0%, #362212 50%, #5B3A1C 85%, #26180F 100%)",
        "charcoal-fade": "linear-gradient(180deg, rgba(38,24,15,0) 0%, rgba(54,34,18,0.9) 60%, rgba(38,24,15,1) 100%)",
        "amber-double": "linear-gradient(180deg, #26180F 0%, #3D2615 50%, #26180F 100%)",
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
