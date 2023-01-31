/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '9/16': '9 / 16',
        '5/6': '5 / 6',
      },
    },
    container: {
      center: true,
    },
    colors: {
      white: '#F2F2F2',
      black: '#000000',
      primary: {
        500: '#F2F2F2',
      },
      secondary: {
        500: '#011C26',
      },
      accent: {
        500: '#d57b01',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
