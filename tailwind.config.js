/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
        blur: "0px 4px 15px 7px rgba(0,0,0,0.44)",
        button: "0px 8px 21px 0px rgba(0, 0, 0, 0.16)",
        banner: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        bannerLighter: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)",
      },
      backgroundImage: {
        gradientCustom:
          "linear-gradient(100deg, #FFB950 -5.85%, #FE5656 109.55%)",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        openSans: ["Open Sans"],
      },
      animation: {
        "slide-in": "slideInFromRight 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        "slide-down": "slideDown 0.5s ease-out forwards",
        "silde-up": "slideUp 0.5s ease-out forwards",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
    },
  },
  plugins: [],
};
