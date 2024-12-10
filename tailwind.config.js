// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx,ts,tsx}'],
  safelist: ['font-extrabold', 'font-bold', 'font-semibold', 'font-normal', 'text-3xl', 'text-4xl'],
  theme: {
    extend: {
      fontFamily: {
        khula: ['Khula', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        deepSeaBlue: '#375A7A',
        lavender: '#CEABB5',
        wine: '#7A253F',
        gunmetal: '#1B2C3C',
        outerSpace: '#464F51',
        ashGray: '#A8B4B7',
        checkInCardBg: '#9E6073',
        hoverDeepSeaBlue: '#45586A',
        hoverLavender: '#E9D6DB',
        hoverWine: '#9E6073',
        hoverGunmetal: '#45586A',
        hoverOuterSpace: '#7E8587',
        hoverAshGray: '#D8DCDD',
        inputGray: '#F7F8F8',
        periwinkle: '#CCCCFF',
        // New Stuff
        Navy: {
          DEFAULT: '#182A3A',
          dark: '#0F1B26',
          light: '#1F3A52'
        },
        DeepRed: '#511F33',
        MediumPink: '#904F69',
        LightPink: '#C18797',
        DarkGray: '#485056',
        MediumGray: '#979EA3',
        LightGray: '#C8CBCB',
        Black: '#000',
        TextBlack: '#212223',
        // New Inspired
        LightNavy: '#DFE8F1',
      },
      google: {
        'text-gray': '#3c4043',
        'button-blue': '#1a73e8',
        'button-blue-hover': '#5195ee',
        'button-dark': '#202124',
        'button-dark-hover': '#555658',
        'button-border-light': '#dadce0',
        'logo-blue': '#4285f4',
        'logo-green': '#34a853',
        'logo-yellow': '#fbbc05',
        'logo-red': '#ea4335',
      },
      gradientColorStops: {
        'blue-pink': 'linear-gradient(90deg, #375A7A 1.85%, #BD929F 50%)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwindcss-grid-areas')],
};
