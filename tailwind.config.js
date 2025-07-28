/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '100': '43.75rem',
      },
      fontSize: {
        'sm-2': '0.9rem',
        'base-2': '1.2rem',
      },
      minWidth: {
        '1': '60px',
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  darkMode: "class",
  plugins: [],
}