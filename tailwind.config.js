/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      'sm': '481px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        'xs': {'min':'320px','max':'766px'},
        'sm': {'min': '481px', 'max': '767px'}, // Added breakpoint from 481px to 767px
      }, 
      
      colors: {
        'nav': '#334b35',
        'body': '#334b35',
        'hero-btn': '#1A1A1A',
        'primary': '#263C28',
        'text': '#ffffff',
        'yellow': '#F7C35F',
        'blur': 'rgba(217, 217, 217, 0.1)',
        'play': 'rgba(255, 255, 255, 0.4)',
        'green': 'rgba(109, 140, 84, 1)',
        'lightgreen': ' #6D8C54',
        'logobg': ' #344C31',
        'border': 'rgba(255, 255, 255, 0.2)',
        'bga': 'rgba(248, 204, 119, 0.8)',
        'bgb': 'rgba(248, 204, 119, 0.16)',
        'inputname': 'background: rgba(255, 255, 255, 0.5)',
        'box': '#678551',
        'card': '#2D442F',
      },
      fontFamily: {
        'heading': ['Century Gothic'],
        'flower': ['Dancing Script'],
        'text': ['Livvic'],
      }
    },
    container: {
      center: true,
      padding: '5rem',
    }
  },
  plugins: [],
}

