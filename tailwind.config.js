/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00796b",
        "primary-dark": "#004c40",
        "primary-transparent": "#00796b15",

        "header-text": "#fdfdfd",
        background: "#f0f0f0",
        card: "#fcfcfc",

        text: "#333",
        "text-light": "#444",
        "text-lighter": "#555",
      },
    },
  },
  plugins: [],
};
