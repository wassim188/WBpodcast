/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        Shantell: ["Shantell Sans", "cursive"],
        Roboto: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
