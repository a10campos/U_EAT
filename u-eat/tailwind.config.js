/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        projectBlue: '#0b3c5d',
        projectmustard: '#d9b310',

        //De Aaron
        colorBotonGris: "#fffefe",
        fondoPrincipal: "#0B3C5D",
        fondoBotonesA:"#D9B310",
        fondoBotonG:"#e5e4e4",
        colorTextoAzul:"#1D2731",
      }
    },
  },
  plugins: [],
}
