/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Quicksand", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },

      colors: {
        cta: {
          DEFAULT: "#Ae445a",
          hover: "#CC6881",
          active: "#Ae445a",
          focus: "#9e384a",
          disabled: "#f8ebef",
        },

        highlight: {
          DEFAULT: "#F39F5A",
          hover: "#f39f5a",
          active: "#df5b17",
          disabled: "#b94515",
          focus: "#fdedd7",
        },

        accent: {
          DEFAULT: "#1D1A39",
          medium: "#3b3778",
          light: "#443c97",
        },

        neu: {
          DEFAULT: "#263238",
          black: "#263238",
          darkGray: "#4D4D4D",
          gray: "#df5b17",
          lightGray: "#89939E",
          silver: "#E6ECF4",
          white: "#FEFDFD",
        },
      },

      fontSize: {
        "body-xl": "20px",
        "body-lg": "18px",
        "body-md": "16px",
        "body-sm": "14px",
        "body-xs": "12px",

        "heading-4xl": "96px",
        "heading-3xl": "80px",
        "heading-2xl": "54px",
        "heading-xl": "48px",
        "heading-lg": "42px",
        "heading-md": "36px",
        "heading-sm": "30px",
        "heading-xs": "24px",
      },

      gap: {
        "2xl": "120px",
        xl: "80px",
        lg: "40px",
        md: "20px",
        sm: "10px",
        xs: "5px",
      },

      spacing: {
        "2xl": "120px",
        xl: "80px",
        lg: "40px",
        md: "20px",
        sm: "10px",
        xs: "5px",
      },

      padding: {
        "2xl": "120px",
        xl: "80px",
        lg: "40px",
        md: "20px",
        sm: "10px",
        xs: "5px",
      },

      margin: {
        "2xl": "120px",
        xl: "80px",
        lg: "40px",
        md: "20px",
        sm: "10px",
        xs: "5px",
      },
    },
  },
  plugins: [],
};
