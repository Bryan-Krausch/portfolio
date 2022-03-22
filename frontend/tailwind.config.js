module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'tallMobile': {'raw': '(min-height: 700px) and (max-width: 480px)'}
      },
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
        revealText: 'revealText 1s ease-in-out forwards',
        revealDescriptionFirst: 'revealDescriptionFirst 1s ease-in-out forwards',
        revealPresentationText: 'revealPresentationText 1s ease-in-out forwards',
        revealPrensentaionImage: 'revealPrensentaionImage 1s ease-in-out forwards',
        revealCompetences: 'revealCompetences 1s ease-in-out forwards'
      },

      keyframes: {
        transitionChangePage: {
          '0%': {left: '-100vw'},
          '100%': {left: '0'}
        },
        revealText: {
          '0%': {position: 'absolute', opacity: '0', right: '-100vw'},
          '100%': {opacity: '1', right: '0', position: 'relative'}
        },
        revealDescriptionFirst: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        },
        revealPresentationText: {
          '0%': {position: 'absolute', opacity: '0', left: '-100vw'},
          '100%': {opacity: '1', left: '0', position: 'relative'}
        },
        revealPrensentaionImage: {
          '0%': {position: 'absolute', opacity: '0', right: '-100vw'},
          '100%': {opacity: '1', right: '0', position: 'relative'}
        },
        revealCompetences: {
          '0%': {position: 'absolute', opacity: '0', bottom: '-100vw'},
          '100%': {opacity: '1', bottom: '0', position: 'relative'}
        },
      },

      transitionTimingFunction: {
        allTiming: 'cubic-bezier(0.645,0.045,0.355,1)'
      }
    }
  },
  plugins: [
    require("tailwindcss-animation-delay")
  ],
}
