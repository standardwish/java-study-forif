/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        "bounce-slow": "bounce 2s linear infinite",
        fadein: "fadein 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
