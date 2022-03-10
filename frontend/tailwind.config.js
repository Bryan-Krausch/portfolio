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
      animation: {
        transitionChangePage: 'transitionChangePage 0.3s ease-in-out forwards',
        transitionChangePageLast: 'transitionChangePageLast 0.3s ease-in-out forwards',
      },

      keyframes: {
        transitionChangePage: {
          '0%': {left: '-100vw'},
          '100%': {left: '0'}
        },
      },

      transitionTimingFunction: {
        allTiming: 'cubic-bezier(0.645,0.045,0.355,1)'
      }
    }
  },
  plugins: [],
}
