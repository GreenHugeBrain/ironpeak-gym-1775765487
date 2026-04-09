import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ruby: {
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
        }
      }
    },
  },
  plugins: [],
} satisfies Config;