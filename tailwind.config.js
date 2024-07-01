/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./styles/custom.css"],
  theme: {
    extend: {
      maxWidth: {
        '128': '32rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '1024px', // Custom 'md' breakpoint
      'lg': '1280px',
      'xl': '1440px',
    },
  },
  variants: {},
  plugins: [],
};
