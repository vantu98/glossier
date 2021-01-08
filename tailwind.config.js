module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "primary-serif": ["Playfair Display"],
      },
      minHeight: {
        "120px": "120px",
        "135px": "135px",
        "143px": "143px",
      },
      backgroundColor: {
        "banner-red": "#F5E3E7",
      },
    },
    container: {
      center: true,
      padding: {},
    },
    screen: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1152px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
