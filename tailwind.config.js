/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        body: ['Quicksand', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },

      colors: {
        cta: {
          DEFAULT: '#Ae445a',
          hover: '#CC6881',
          active: '#Ae445a',
          focus: '#9e384a',
          disabled: '#f8ebef',
        },

        highlight: {
          DEFAULT: '#F39F5A',
          hover: '#f39f5a',
          active: '#df5b17',
          disabled: '#b94515',
          focus: '#fdedd7',
        },

        accent: {
          DEFAULT: '#1D1A39',
          medium: '#3b3778',
          light: '#443c97',
        },

        neu: {
          DEFAULT: '#263238',
          black: '#263238',
          darkGray: '#4D4D4D',
          gray: '#df5b17',
          lightGrau: '#89939E',
          silver: '#E6ECF4',
          white: '#FEFDFD',
        },
      },

      fontSize: {
        'body-xl': '20px',
        'body-lg': '18px',
        'body-md': '16px',
        'body-sm': '14px',
        'body-xs': '12px',

        'heading-4xl': '82px',
        'heading-3xl': '74px',
        'heading-2xl': '66px',
        'heading-xl': '58px',
        'heading-lg': '50px',
        'heading-md': '42px',
        'heading-sm': '34px',
        'heading-xs': '26px',
      },

      gap: {
        xl: '120px',
        lg: '80px',
        md: '40px',
        sm: '20px',
        xs: '10px',
        xss: '5px',
      },

      spacing: {
        xl: '120px',
        lg: '80px',
        md: '40px',
        sm: '20px',
        xs: '10px',
        xss: '5px',
      },

      padding: {
        xl: '120px',
        lg: '80px',
        md: '40px',
        sm: '20px',
        xs: '10px',
        xss: '5px',
      },
    },
  },
  plugins: [],
};
