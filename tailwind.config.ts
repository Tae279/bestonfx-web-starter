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
        // Royal blue brand scale — derived from Fizens (fizens.framer.ai)
        brand: {
          50: '#f5faff',
          100: '#eff4ff',
          200: '#d1e0ff',
          300: '#a9c5ff',
          400: '#6098ff',
          500: '#2970ff',
          600: '#1257e6',
          700: '#0040c1', // PRIMARY — the single chromatic anchor
          800: '#0a3196',
          900: '#0b2a73',
          950: '#071b4d'
        },
        // Neutral ink scale (Fizens grays) for light-theme text + surfaces
        ink: {
          50: '#fafafa',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#171717',
          950: '#0a0a0a'
        },
        // LINE brand green (conversion path) — unchanged
        line: {
          500: '#06C755',
          600: '#05b54c'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Prompt', 'system-ui', 'sans-serif'],
        display: ['var(--font-sans)', 'Prompt', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-0.03em'
      },
      boxShadow: {
        // Signature soft blue glow (Fizens hero/cards)
        glow: '0 15px 44px rgba(0, 64, 193, 0.25)',
        'glow-sm': '0 10px 30px rgba(0, 64, 193, 0.16)',
        soft: '0 1px 2px rgba(16, 24, 40, 0.04), 0 8px 24px -8px rgba(16, 24, 40, 0.10)',
        card: '0 1px 3px rgba(16, 24, 40, 0.06), 0 12px 28px -12px rgba(16, 24, 40, 0.12)'
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(124deg, #0040c1 0%, #2739c7 50%, #495ad9 100%)',
        'brand-bright': 'linear-gradient(115deg, #2970ff 50%, #6098ff 100%)',
        'hero-radial':
          'radial-gradient(circle at 16% 12%, rgba(41, 112, 255, 0.10), transparent 36%), radial-gradient(circle at 88% 0%, rgba(0, 64, 193, 0.06), transparent 30%)',
        'surface-tint': 'linear-gradient(180deg, #ffffff 0%, #f5faff 100%)'
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' }
        }
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration, 40s) linear infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};

export default config;
