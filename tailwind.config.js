module.exports = {
  mode: "jit",
  purge: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hard-stop-purple":
          "linear-gradient(to bottom, #8B5CF6 16rem, transparent 0 100%);",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
