/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-soft": "var(--color-background-soft)",
        "accent-primary": "var(--green-accent)",
      },
      height: {
        nav: "var(--nav-height)",
      },
    },
  },
  plugins: [],
};
