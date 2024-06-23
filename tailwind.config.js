/** @type {import('tailwindcss').Config} */
export default {
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
