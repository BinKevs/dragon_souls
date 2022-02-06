module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "about-bg": "url('/src/static/second_screen_bg.png')",
        "tokenomics-bg": "url('/src/static/tokenomics_bg.png')",
      },
      fontFamily: {
        outfit: ["Outfit"],
      },
      colors: {
        "first-black-color": "#020518",

        "first-pink-color": "#210C19",

        "first-blue-color": "#2F1C9E",

        "first-green-color": "#13451E",
        "second-green-color": "#1CFF32",
      },
      width: ({ theme }) => ({
        "4//3": "43%",
      }),
    },
  },
  plugins: [],
};
