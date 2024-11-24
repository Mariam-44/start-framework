/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container:{
      center:true
    },
    extend: {
      colors:{
        primary:"#1ABC9C",
        sec:"#1A252F"
      },
      screens:{
        "2xl":"1290px"
      },
    },
  },
  plugins: [],
}

