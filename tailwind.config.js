/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'image-visible': {
          '0%': {
            transform: 'translateY(20%)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          }
        },
      },
      animation: {
        'open-menu': 'open-menu 0.8s ease-in-out forwards',
        'image-visible': 'image-visible 2s ease-in-out forwards',
      },
      fontFamily: {
        quicksand: ['var(--font-quicksand)'],
        gistesy: ['var(--font-gistesy)'],
        leagueSpartan: ['var(--font-leagueSpartan)'],
      },
    }
  },
  plugins: [],
}
