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
      backgroundImage: {
        'shader-gradient': "url('https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.5&cAzimuthAngle=250&cDistance=1.5&cPolarAngle=140&cameraZoom=12.5&color1=%233B82F6&color2=%23910aff&color3=%231E3A8A&destination=onCanvas&embedMode=off&envPreset=lobby&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.3&rotationX=0&rotationY=0&rotationZ=140&shader=defaults&type=sphere&uAmplitude=7&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.4&uTime=0&wireframe=false')"
      },
    },
  },
  plugins: [],
}