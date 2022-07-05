/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
