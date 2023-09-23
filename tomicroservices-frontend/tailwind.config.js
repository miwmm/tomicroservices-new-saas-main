/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*/.{html,ts,scss}'],
  theme: {
    extend: {
      height: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}
