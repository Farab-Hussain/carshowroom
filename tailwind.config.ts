
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#000",
        "primary-blue": {
          DEFAULT: "#0dc143",
          100: "#0ec144",
        },
        "secondary-orange": "#f77f61",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(13, 193, 67, 1)",
        },
        grey: "#ffffff",
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
      }
    },
  },
  plugins: [],
};