/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home' : "url(/UberHomeImage.jpg)"
      }
    }
    ,
  },
  plugins: [],
}

