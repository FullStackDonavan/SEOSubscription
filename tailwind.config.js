import colors from 'tailwindcss/colors'

export default {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
        'custom-gradient-from': '#320643',
        'custom-gradient-to': '#140534',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
    }
  }
}