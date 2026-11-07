/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF0E6',       // Main Background (Cream Ivory)
        sand: '#E1C7BA',        // Secondary Background/Sections (Sand Beige)
        'mauve-pink': '#C77389',// Primary Brand Accent (Mauve Pink)
        'rose-blush': '#D8959B',// Secondary Accent (Rose Blush)
        'deep-mauve': '#8E4A4D',// Strong Emphasis (Buttons/CTAs)
        sage: '#AEBF97',        // Success/Botanical accents (Sage Green)
        'slate-grey': '#8F8A87',// Borders/Subtle details (Slate Grey)
        charcoal: '#2E2E2E',    // Text/Headings (Charcoal)
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Cabinet Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(142, 74, 77, 0.08)',
        'glass-hover': '0 16px 40px 0 rgba(142, 74, 77, 0.15)',
        'glow': '0 0 45px -10px rgba(199, 115, 137, 0.35)',
        'soft-lift': '0 14px 28px -4px rgba(46, 46, 46, 0.08), 0 10px 10px -5px rgba(46, 46, 46, 0.04)',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
