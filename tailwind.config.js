/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1f2937',
      }
    },
    fontFamily:{
      signature :["Poppins"],
    }
  },
  plugins: [],
}

