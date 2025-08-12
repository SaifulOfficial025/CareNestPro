/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tomato: ["Tomato Grotesk", "sans-serif"],
        sfpro: ["SF Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

