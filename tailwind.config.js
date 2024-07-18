/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-top-bottom': '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
      },
      fontFamily: {
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
      },
      colors: {
        'custom-gray': 'rgb(224, 224, 224)',
      },

    },
  },
  plugins: [],
}

