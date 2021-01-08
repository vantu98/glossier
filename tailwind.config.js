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
      fontSize: {
        "11px": "11px",
      },
      lineHeight: {
        "11px": "11px",
        "14px": "14px",
      },
      letterSpacing: {
        "1px": "1px",
      },
      minHeight: {
        "40px": "40px",
      },
    },
    container: {
      center: true,
      padding: {
        sm: "16px",
        md: "36px",
        lg: "48px",
        xl: "56px",
      },
    },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1152px",
    //   "2xl": "1536px",
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
