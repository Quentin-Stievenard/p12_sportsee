/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        4.5: "18px",
        6.5: "26px",
        7.5: "30px",
        17: "68px",
        18: "77px",
        19: "87px",
      },
      boxShadow: {
        md: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        "sportsee-red": "rgba(255, 1, 1, 1)",
        "sportsee-grey": "rgba(251, 251, 251, 1)",
        "sportsee-black": "rgba(32, 37, 58, 1)",
      },
    },
    screens: {
      md: "1380px",
    },
  },
  plugins: [],
};
