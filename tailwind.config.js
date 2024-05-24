/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': {
          '50': '#faf7f2',
          '100': '#f4ede0',
          '200': '#e9dabf',
          '300': '#ddc59d',
          '400': '#cba26c',
          '500': '#c08a4f',
          '600': '#b27744',
          '700': '#945e3a',
          '800': '#784d34',
          '900': '#61402d',
          '950': '#342016',
      },
      
      }
    },
  },
  plugins: [],
}