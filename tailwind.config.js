/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'acme': ['Acme', 'sans-serif'],
        'lilita': ['Lilita One', 'sans-serif'],
        'monster': ['Montserrat Alternates',' sans-serif'],
        'play': ['Playfair Display', 'serif'],
        'prata': ['Prata', 'serif'],
        'arch': ['Architects Daughter', 'cursive'],
        'beau': ['Beau Rivage', 'cursive'],
        'russo': ['Russo One', 'sans-serif']
      }
    },
  },
  plugins: [],
}

