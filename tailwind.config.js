/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Fira Sans", "sans-serif"],
      serif: ["Bree Serif", "serif"],
    },
    extend: {
      colors: {
        primary: "#00796b",
        "primary-dark": "#004c40",

        "header-text": "#e2e8f0",
        background: "#1a1a1a",
        card: "#2e3a38",
        link: "#4db6ac",

        text: "#e2e8f0",
        "text-light": "#cbd5e1",
        "text-lighter": "#94a3b8",
      },
    },
  },
  plugins: [],
};
