import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#007bff',
        slate: {
          850: '#0f172a',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.36)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config
