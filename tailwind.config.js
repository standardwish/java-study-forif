/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    backgroundImage: {
      link_i:
        "linear-gradient(transparent, transparent), linear-gradient(black, black)",
    },
    transitionProperty: {
      backgroundSize: "background-size",
    },
    backgroundPosition: {
      link_p: "0 100%",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      link_s: "0 2px",
      link_s_hover: "100% 2px",
    },
    extend: {
      keyframes: {
        fadein: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        line: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        dropdown_down: {
          "0%": { transform: "translateY(-30%)" },
          "100%": { transform: "translateY(0)" },
        },
        dropdown_up: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-30%)" },
        },
      },
      animation: {
        "bounce-slow": "bounce 2s linear infinite",
        fadein: "fadein 2s ease-in-out",
        wiggle: "wiggle 1s ease-in-out infinite",
        dropdown_down: "dropdown_down 0.5s ease",
        dropdown_up: "dropdown_up 0.5s ease",
        line: "line 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
