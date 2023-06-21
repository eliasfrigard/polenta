const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#F2F2F2',
        black: '#000000',
        primary: {
          500: '#F2F2F2',
        },
        secondary: {
          500: '#28323c',
        },
        accent: {
          500: '#dea46f',
        },
      },
      // fontFamily: {
      //   caudex: ['var(--font-caudex)', ...fontFamily.sans],
      // },
      aspectRatio: {
        '9/16': '9 / 16',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
