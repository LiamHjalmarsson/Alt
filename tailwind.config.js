/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        cta: {
          DEFAULT: '#CC6881',
          hover: '#db8ba2',
          active: '#ae445a',
          focus: '#9e384a',
          disabled: '#f8ebef',
        },

        highlight: {
          DEFAULT: '#EE7521',
          hover: '#f39f5a',
          active: '#df5b17',
          disabled: '#b94515',
          focus: '#fdedd7',
        },

        accent: {
          DEFAULT: '#1d1a39',
          medium: '#3b3778',
          light: '#443c97',
        },
      },
    },
  },
  plugins: [],
};
