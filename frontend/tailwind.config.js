import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.button': {
          padding: '4px',
          'background-color': theme('colors.red.600'),

          '&:hover': {
            'background-color': theme('colors.red.200'),
          },
        },
      });
    }),
  ],
};
