// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'bg-lightGreen',
    'border-darkGreen',
    'bg-white',
    'border-gray-200',
    'hover:border-Navy',
    'text-white',
    'bg-Navy',
    'hover:bg-MediumPink',
    'bg-gray-300'
  ],
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
        // Custom Greens (flat structure)
        lightGreen: '#E6F4EA',
        mediumGreen: '#34A853',
        darkGreen: '#1E8E3E'
      },
    },
  },
  plugins: [],
}
