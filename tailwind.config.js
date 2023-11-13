/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkBlue: "hsl(217,28%,15%)",
        darkBlue1: "hsl(218,28%,13%)",
        darkBlue2: "hsl(216,53%,9%)",
        darkBlue3: "hsl(219,30%,18%)",
        accentCyan: "hsl(176,68%,64%)",
        accentBlue: "hsl(198,60%,50%)",
        lightRed: "hsl(0,100%,63%)",
      },
      fontFamily: {
        sans: ["Raleway", "serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "logo-dark-mode": "url(..images/logo-dark-mode.svg)",
        "logo-dark-mode": "url(..images/logo-dark-mode.svg)",
        "logo-curvy-dark-mode": "url(..images/logo-curvy-dark-mode.svg)",
        "logo-curvy-light-mode": "url(..images/logo-curvy-light-mode.svg)",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
