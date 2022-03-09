module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'darkPurple': '#0d0a2f',
        'mediumPurple': '#140f4d',
        'lightPurple': '#a464ff',
        'greyText': '#8892b0',
        'ligthGreyText': '#ccd6f6',
        'slateGreyText': '#8892b0'
      },
      keyframes: {
        openMenu: {
          "0%": { transform: 'translateX(100vw)', visibility: 'hidden' },
          "100%": { transform: 'translateX(0vw)', visibility: 'visible' }
        }
      },

      animation: {
        openMenu: 'openMenu 0.25s cubic-bezier(0.645,0.045,0.355,1)'
      }

    }
  },
  plugins: [],
}
