/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'pathway':" 'Bruno Ace SC', cursive",
        'Nunito':"'Nunito',sans-serif"
      }
    },
  },
  plugins: [],
}

