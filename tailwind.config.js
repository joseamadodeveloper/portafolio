/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',       // Asegúrate de incluir tu HTML
    './src/**/*.{js,jsx,ts,tsx}', // Asegúrate de que Tailwind procese los archivos    JSX y TSX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

