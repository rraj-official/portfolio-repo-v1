/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'base-color': 'var(--theme_base_color)',
      'para-text-color': 'var(--theme_para_text_color)', 
      'theme-color': 'var(--theme_color)',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#808080'
    }
  },
  plugins: [],
}

