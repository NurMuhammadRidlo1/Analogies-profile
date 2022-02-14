module.exports = {
  content: ["./public/**/*.{html,js}"],
  content: ["./asset/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        japan: ["Birthstone Bounce"],
        base: ["Roboto Slab"],
        logo: ["The Nautigal"],
      },
      colors: {
        background: "#1F1F1F",
      },
      screens: {
        sm: "350px",
      },
    },
  },
  plugins: [],
};
