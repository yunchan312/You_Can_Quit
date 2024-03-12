module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        quit: "url('/src/Asset/quit.png')",
      },
      keyframes: {
        welcome: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
      animation: {
        welcome: "welcome 2.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
