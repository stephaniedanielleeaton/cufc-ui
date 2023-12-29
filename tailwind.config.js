// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx,ts,tsx}'],
  safelist: ['font-extrabold', 'font-bold', 'font-semibold', 'font-normal', 'text-3xl', 'text-4xl'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        deepSeaBlue: '#375A7A',
        lavender: '#CEABB5',
        wine: '#7A253F',
        gunmetal: '#1B2C3C',
        outerSpace: '#464F51',
        ashGray: '#A8B4B7',
        hoverDeepSeaBlue: '#45586A',
        hoverLavender: '#E9D6DB',
        hoverWine: '#9E6073',
        hoverGunmetal: '#45586A',
        hoverOuterSpace: '#7E8587',
        hoverAshGray: '#D8DCDD',
      },
      gradientColorStops: {
        'blue-pink': 'linear-gradient(90deg, #375A7A 1.85%, #BD929F 50%)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
