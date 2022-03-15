const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        orange: "#E28625",
        blue: "#006971",
        green: "#004140"
      },
      fontFamily: {
        sans: ['Lexend Deca', ...defaultTheme.fontFamily.sans],
        cursive: ['Big Shoulders Display', 'cursive']
      }
    },
  },
  plugins: [],
}
