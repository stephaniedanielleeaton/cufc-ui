// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // Include paths to all your storybook files as well
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lavender: '#CEABB5',
        wine: '#602537',
        gunmetal: '#1B2C3C',
        outerSpace: '#464F51',
        ashGray: '#A8B4B7',
        hoverLavender: '#E9D6DB',
        hoverWine: '#9E6073',
        hoverGunmetal: '#45586A',
        hoverOuterSpace: '#7E8587',
        hoverAshGray: '#D8DCDD',
      },
    },
  },
  plugins: [],
};
