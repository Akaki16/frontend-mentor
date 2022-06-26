/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      customWhite: 'hsl(0, 0%, 100%)',
      lightGray: 'hsl(212, 45%, 89%)',
      grayishBlue: 'hsl(220, 15%, 55%)',
      darkBlue: 'hsl(218, 44%, 22%)',
    },
    extend: {},
  },
  plugins: [],
}
