module.exports = {
  mode: "jit",
  purge: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "light-purple-split":
          "linear-gradient(to bottom, #8B5CF6 16rem, #F9FAFB 0 100%);",
        "dark-purple-split":
          "linear-gradient(to bottom, #111827 16rem, #1F2937 0 100%);",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
