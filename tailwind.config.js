/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#E1DDD1",
        secondary: "#51514F",
        pink_0:"#C977D6",
        pink_100: "#E1B3D1",
        blue_100:"#313A5B",
        pink_200: "#CC51D6",
        blue_0: "#5A68E8",
        pink_300: "#E1B1FF",
        tertiary: "#64846A",
        heroButton: "#602EA6",
        gradient1: "#C977D6",
        gradient2: "#0B1531",

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
        "hero-pattern": "url('/src/assets/herobg.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-ellipse': 'radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))'
      }
    },
  },
  plugins: [],
};
