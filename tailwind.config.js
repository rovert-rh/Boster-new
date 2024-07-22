/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-purple" : 'linear-gradient(to right, #805ad5, #c4b5fd)'
      },
      borderWidth: {
        '4': '4px',
      },
      borderRadius: {
        'lg': '1rem',
      },
    },
  },
  plugins: [],
};
