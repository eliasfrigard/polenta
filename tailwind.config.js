/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '9/16': '9 / 16',
      },
    },
    container: {
      center: true,
    },
    colors: {
      white: '#FFFFFF',
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
