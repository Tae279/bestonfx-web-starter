import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/content/**/*.{ts,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1180px'
      }
    },
    extend: {
      colors: {
        navy: {
          950: '#050B18',
          900: '#081426',
          800: '#0B1B33'
        },
        graphite: {
          950: '#07090D',
          900: '#101318',
          800: '#1A202C'
        },
        gold: {
          500: '#D4AF37',
          400: '#E6C45C',
          300: '#F2D27A'
        },
        line: {
          500: '#06C755'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        premium: '0 24px 90px rgba(0, 0, 0, 0.45)',
        gold: '0 0 0 1px rgba(212, 175, 55, 0.26), 0 24px 80px rgba(212, 175, 55, 0.08)'
      },
      backgroundImage: {
        'premium-radial': 'radial-gradient(circle at 20% 20%, rgba(212,175,55,0.16), transparent 32%), radial-gradient(circle at 80% 0%, rgba(242,210,122,0.10), transparent 28%)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};

export default config;
