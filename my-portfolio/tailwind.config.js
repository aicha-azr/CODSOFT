/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s ease-in-out infinite',
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        moveY: 'marquee 20s ease-in-out infinite',
        trackingInContract: 'trackingInContract 2s cubic-bezier(.25,.46,.45,.94) both',
        textAni: 'textAni 2s infinite both',
      },
      keyframes: {
        marquee: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(30vw)' },
        },
        moveY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100vh)' },
        },
        trackingInContract: {
          '0%':{letterSpacing:'-.5em',
            filter:'blur(12px)',
            opacity:'0'},
            '100%':{filter:'blur(0)',opacity:'1'},
        },
        textAni:{
          '0%':{
            textShadow:'0 0 0 transparent',},
          '100%':{
            textShadow:'6px 0 18px rgba(0,0,0,.35)',
          }
        },
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: 'white',
          },
        },
      },
      colors: {
        BRoyal: '#1e0f75',
        b1: '#1c1dab',
        b2: '#3785d8',
        b3: '#adc6e5',
        violet: '#bf8ce1',
        v1: '#e893c5',
        v2: '#ebb2c3',
        b4: '#cbd8e8',
        bleuGreen: '#506c8a',
        beige: '#f0dab6',
        green: '#023246',
        pink: '#ecc2bd',
        pink2: '#cf9495',
        yellow: '#edc690',
      },
    },
    fontFamily: {
      pacifico: ['Pacifico', 'cursive'],
      lugrasimo: ['Lugrasimo', 'sans-serif'],
      greatVibes: ['Great Vibes', 'cursive'],
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
});
