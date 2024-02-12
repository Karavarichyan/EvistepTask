/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Roboto', sans-serif;",
        monseerat: 'monseerat'
      }
    },
  },
  plugins: [],

    colors: {
      // Configure your color palette here
      blue: '#1e3a8a'
    }
  
}

