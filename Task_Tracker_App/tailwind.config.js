/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#007BFF',
        'primary-green': '#28A745',
        'accent-red': '#DC3545',
        'accent-yellow': '#FFC107',
        'secondary-gray': '#6C757D',
        'background-light': '#F5F5F5',
        'text-dark': '#333333',
        'border-light': '#E0E0E0',
      },
    },
  },
  plugins: [],
}