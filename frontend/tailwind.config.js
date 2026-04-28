/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#121212',
          800: '#1e1e1e',
          700: '#2d2d2d',
          600: '#3d3d3d',
        },
        fusion: {
          purple: '#8b5cf6',
          blue: '#3b82f6',
          red: '#ef4444',
          green: '#10b981',
          yellow: '#f59e0b',
        }
      },
    },
  },
  plugins: [],
}
