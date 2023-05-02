/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "692px",
      // => @media (min-width: 768px) { ... }

      lg: "1240px",
      // => @media (min-width: 1024px) { ... }

      xl: "1400px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        pathway: " 'Bruno Ace SC', cursive",
        Nunito: "'Nunito',sans-serif",
      },
    },
  },
  plugins: [],
};
