/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    screens: {
      sx: { max: "639px" },

      sm: { max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { max: "1280px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
      //   "max-sm": { max: "767px" },
      //   "max-md": { max: "1023px" },
      "tablet-range": { min: "768px", max: "1023px" },
      "tablet-up": { min: "768px" },
      "desktop-up": { min: "1024px" },
      "in-lg": { min: "1024px", max: "1280px" },
      //   "max-xl": { max: "1535px" },
    },
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
        // spin: "spin 1s linear infinite",
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
