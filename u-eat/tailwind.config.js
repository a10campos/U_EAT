const { calculateNewValue } = require('@testing-library/user-event/dist/utils');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors:{
        projectBlue: '#0b3c5d',
        projectMustard: '#d9b310',
        projectBlack: '#1d2731',

        //De Aaron
        colorBotonGris: "#fffefe",
        fondoPrincipal: "#0B3C5D",
        fondoBotonesA:"#D9B310",
        fondoBotonG:"#e5e4e4",
        colorTextoAzul:"#1D2731",
      }
    }
  },
  plugins: [require('tw-elements/dist/plugin')],
}
