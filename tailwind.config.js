/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
          brand: {
              orange: '#FFA726',
              orangeHover: '#F57C00',
              blue: '#2196F3',
              blueHover: '#1976D2',
              dark: '#1e293b'
          }
      },
      fontFamily: {
          sans: ['Cairo', 'sans-serif'],
          serif: ['Amiri', 'serif'],
      },
      animation: {
          'slide-down': 'slideDown 0.3s ease-out',
          'slide-in': 'slideIn 0.3s ease-out',
          'fade-in': 'fadeIn 0.3s ease-out'
      },
      keyframes: {
          slideDown: {
              '0%': { transform: 'translateY(-10%)', opacity: '0' },
              '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          slideIn: {
              '0%': { transform: 'translateX(100%)', opacity: '0' },
              '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
          }
      }
    },
  },
  plugins: [],
}
