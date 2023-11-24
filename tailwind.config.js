/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
        blur: "0px 4px 15px 7px rgba(0,0,0,0.44)",
      },
      backgroundImage: {
        gradientCustom:
          "linear-gradient(100deg, #FFB950 -5.85%, #FE5656 109.55%)",
      },
    },
  },
  plugins: [],
};
