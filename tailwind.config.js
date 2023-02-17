module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#fb811e',
        primaryDark: '#ffc945',
        primaryLight: '#fcf1e7',
        secondary: '#009f4d',
        blueGray: {
          50: '#ECEFF1',
        },
        green: '#28a745',
        fontColor: '#707070',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@headlessui/react'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
