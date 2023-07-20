/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
        dropdown: {
          "0%": { transfrom: "translateY(0%)" },
          "100%": { transfrom: "translateY(100%)" },
        },
        line: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "bounce-slow": "bounce 2s linear infinite",
        fadein: "fadein 2s ease-in-out",
        wiggle: "wiggle 1s ease-in-out infinite",
        dropdown: "dropdown 1s ease-in-out",
        line: "line 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
