/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'WorkSans': ['Work Sans'],
        'SpaceMono': ['Space Mono']
      },
      borderRadius: {
        '2.5xl': '20px'
      },
      maxWidth: {
        '8xl': '1440px',
        '7.5xl': '1104px',
        '2.5xl': '728px',
        '84': '344px',
      },
      width: {
        '4.5': '18px',
        '30': '120px',
      },
      height: {
        '30': '120px',
      },
      padding: {
        '18': '72px',
      },
      screens: {
        'base': '900px',
        'smm': '474px'
      },
      fontSize: {
        'xr': '13px',
        // 'xr': 'px',
      },
      colors: {
        'blacked': '#2B2B2B',
        'gray-lighter': '#2B2B2B',
        'gray': '#3B3B3B',
        'green-darker': '#858584',
        'purple-lighter': '#A259FF',
      },

    },
  },
  plugins: [],
}