/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Bleu Nuit
        secondary: '#3B82F6', // Bleu Clair
        accent: '#10B981', // Vert Menthe
        background: '#FFFFFF', // Blanc Pur
        textPrimary: '#1F2937', // Gris Foncé
        textSecondary: '#6B7280', // Gris Clair
        altBackground: '#F3F4F6', // Gris Très Clair
        error: '#EF4444', // Rouge Doux
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        light: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}