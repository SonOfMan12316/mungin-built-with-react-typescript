/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ch-primary": "#1c5691",
        "ch-secondary": "#6cbd45",
        "ch-tertiary": "#1b3c77",
        "ch-danger": "#fe0808",
        "ch-grey": "#f8f8f8",
        "ch-border-grey": "#999999",
        "ch-trans-secondary": "#6cbd454d",
      },
    },
    fontFamily: {
      dmSans: ["DM+Sans", "Poppins", "ui-sans-serif"],
      poppins: ["Poppins", "ui-sans-serif"],
      manrope: ["Manrope", "ui-sans-serif"],
    },
    boxShadow: {
      "patient-card": "-8px 6px 40px 5px rgba(0, 0, 0, 0.08)",
    },
  },
  plugins: [],
};
