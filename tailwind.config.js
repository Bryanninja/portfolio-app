/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        portfolio: {
          white: '#E6F4FD',
          blueWhite: '#ACDEF2',
          cyan: '#5BB5D9',
          lightBlue: '#5496BF',
          blue: '37648C',
          darkBlue: '#1D3759',
          blueText: '#3B465B',
          darkBlueText: '242B3A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
