/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-bg": "#dadbde",
        "color-text": "#495959",
        "color-nav": "#cdd2d4",
        "color-footer": "#58a7a8",
        "color-border": "#c0c6c8",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
