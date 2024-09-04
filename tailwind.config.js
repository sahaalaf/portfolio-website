/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/thumbnail.jpg')",
      },
      backgroundColor: {
        'custom-opacity': 'rgba(255, 255, 255, 0.025)',
      },
      backdropBlur:{
        'lg': '10px',
      },
      borderWidth: {
        'custom': '1px'
      },
      textColor: {
        'gradient': 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600',
        'grad': 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
