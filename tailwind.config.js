/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [{
      mytheme:{
        "primary": "#19191A",
        "secondary":'#B08C6E',
        "font": "#EDEDEE"
      }
    }],
  },
}

