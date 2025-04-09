/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/once-ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'page-background': 'var(--page-background)',
        'surface': {
          DEFAULT: 'var(--surface-background)',
          dark: 'var(--surface-background-dark)'
        },
        'neutral': {
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'lg': 'var(--shadow-lg)',
      },
      zIndex: {
        'header': 'var(--z-header)',
      }
    },
  },
  plugins: [],
}; 