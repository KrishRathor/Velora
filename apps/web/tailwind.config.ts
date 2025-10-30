import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0B0F14',
          soft: '#0F151D',
          card: '#111827'
        },
        brand: {
          DEFAULT: '#22d3ee',
          soft: '#67e8f9',
          ring: '#0ea5b7'
        },
        ink: {
          DEFAULT: '#e5e7eb',
          muted: '#9ca3af',
          dim: '#6b7280'
        },
        sol: {
          // Solana-leaning accent
          purple: '#9945FF',
          green: '#14F195'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(34,211,238,0.15)',
        card: '0 12px 40px rgba(0,0,0,0.35)'
      },
      backgroundImage: {
        'grid': 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'radial': 'radial-gradient(1200px 600px at top left, rgba(153,69,255,0.10), transparent 60%), radial-gradient(800px 400px at bottom right, rgba(20,241,149,0.08), transparent 60%)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
} satisfies Config;

