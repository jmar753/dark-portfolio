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

        'botanical': {
          '100': '#afb9ab',
          '200': '#243c39',
          '300': '#02161c',
        },
        
        'bark': {
          '100': '#b6a997',
          '200': '#323421',
          '300': '#b6a997',
        },
      
      }
    },
  },
  plugins: [],
}