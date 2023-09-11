/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2d848a",
        secondary: "#dfe6e4 ",
        tertiary: "#773aa6",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
        "hero-glob1": "url('/src/assets/globAssets/clay1.png')",
        "hero-glob2": "url('/src/assets/globAssets/clay2.png')",
        "hero-glob3": "url('/src/assets/globAssets/clay3.png')",
        "hero-glob4": "url('/src/assets/globAssets/clay4.png')",
        "hero-glob5": "url('/src/assets/globAssets/clay5.png')",
      },
    },
  },
  plugins: [],
};