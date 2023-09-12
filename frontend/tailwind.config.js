/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          "dark-blue": "#30475E",
          "light-blue": "#7E8A97",
          "brown": "#CBAF87",
          "beige": "#E7DEC8",
          "primary": "#6528F7",
          "secondary": "#A076F9",
          "light": "#D7BBF5",
          "background": "#EDE4FF"

        },
      },
    },
  },
  plugins: [],
};
