/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
    "."
  ],
  theme: {
    extend: 
    {
      colors: {
        'brand-blue': '#0070f3',
        'hover-blue': '#0056b3',
        'active-blue': '#003c82',
      },
    },
  },
  plugins: [],
}

