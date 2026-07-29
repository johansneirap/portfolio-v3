/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0b0c0d",
        graphite: {
          900: "#16181b",
          800: "#1f2226",
        },
        steel: {
          700: "#2b2f34",
          600: "#3a3f46",
          400: "#818991",
          200: "#b8bcc1",
        },
        paper: "#f4f2ee",
        brass: {
          700: "#8a6435",
          500: "#b8874a",
          300: "#d9b479",
        },
        verdigris: {
          500: "#5c8a72",
        },
        alert: {
          500: "#c96156",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "IBM Plex Sans", "sans-serif"],
        body: ["var(--font-body)", "IBM Plex Sans", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "2px",
        md: "4px",
      },
      spacing: {
        18: "4.5rem",
        30: "7.5rem",
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      backgroundImage: {
        "brushed-steel":
          "repeating-linear-gradient(100deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 3px)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
