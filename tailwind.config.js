/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'hsl(var(--color-brand), <alpha-value>)',
          foreground: 'hsl(var(--color-brand-foreground), <alpha-value>)',
          100: 'hsl(var(--color-brand-100), <alpha-value>)',
        },
        background: 'hsl(var(--color-background), <alpha-value>)',
        foreground: 'hsl(var(--color-foreground), <alpha-value>)',
        special: {
          DEFAULT: 'hsl(var(--color-special), <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
