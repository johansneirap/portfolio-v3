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
        ink: "#0a0a0a",
        surface: {
          900: "#111214",
          800: "#17181b",
        },
        border: {
          700: "#262a2e",
          600: "#30363d",
        },
        fg: {
          muted: "#747c87",
          secondary: "#9198a1",
          primary: "#e4e4e0",
        },
        link: {
          500: "#58a6ff",
        },
        diff: {
          add: "#3fb950",
          "add-bg": "rgba(63,185,80,0.08)",
          remove: "#f85149",
          "remove-bg": "rgba(248,81,73,0.08)",
        },
        traffic: {
          red: "#f85149",
          yellow: "#d29922",
          green: "#3fb950",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
      },
      spacing: {
        18: "4.5rem",
        30: "7.5rem",
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      keyframes: {
        caret: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "draw-line": {
          from: { strokeDashoffset: "var(--line-length)" },
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        caret: "caret 1s step-end infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
