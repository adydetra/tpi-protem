/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false,
  theme: {
    extend: {
      colors: {
        buku: {
          blue: '#024D94',
          yellow: '#F8D171',
        },
      }
    },
    // colors: {
     
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}