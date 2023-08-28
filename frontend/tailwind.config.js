/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      border: 'hsl(0, 0%, 80%)',
      'component-background': 'hsl(0, 100%, 95%)',
    },
    extend: {
      keyframes: {
        appear: {
          '0%': {
            opacity: 0,
            scale: 0,
          },
          '100%': {
            opacity: 1,
            scale: 1,
          },
        },
      },
      animation: {
        appear: 'appear 150ms linear',
      },
    },
  },
  plugins: [],
};
