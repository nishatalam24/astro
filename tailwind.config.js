/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},

    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},

      'custom-xl-min': {'min': '1345px'},
      'custom-xl-max': {'max': '1344px'},
      // => @media (max-width: 1279px) { ... }

      'min-xl': {'min': '1280px'},
      // => @media (min-width: 1280px) { ... }

      'lg': {'max': '1023px'},
      'custom-lg-max': {'max': '1149'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
};

// tailwind.config.js
