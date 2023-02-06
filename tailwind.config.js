module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fb811e',
        primaryDark: '#ffc945',
        primaryLight: '#fcf1e7',
        secondary: '#009f4d',
        green: '#28a745',
        fontColor: '#707070',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
