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
  },
  plugins: [require('@tailwindcss/typography')],
}