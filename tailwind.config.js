/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui' 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['Itim', 'sans-serif'],
        title: ['Fleur De Leah', 'sans-serif']
      },
    },
  },
  plugins: [ daisyui],
  daisyui: {
    themes: [ "light"],
  },
}
