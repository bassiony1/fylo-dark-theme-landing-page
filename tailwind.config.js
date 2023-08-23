/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {},
      colors: {
        primary: {
          100: "hsl(219, 30%, 18%)",
          200: "hsl(217, 28%, 15%)",
          300: "hsl(218, 28%, 13%)",
          400: "hsl(216, 53%, 9%)",
        },
        accent: {
          "grad-l": "hsl(176, 68%, 64%)",
          "grad-r": "hsl(198, 60%, 50%)",
        },
      },
      gridTemplateRows: {
        // "6-auto": "repeat(6, minmax(0, auto))",
      },
      gridTemplateColumns: {},

      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({
      addBase,
      addComponents,
      addUtilities,
      matchUtilities,
      theme,
    }) {
      addBase({
        "* , *::after , *::before": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        "*": {
          fontSize: "initial",
          fontFamily: "Raleway",
        },
        html: {
          scrollBehavior: "smooth",
          height: "100%",
        },
        body: {
          height: "100%",
          lineHeight: 1.5,
          fontFamily: "Open Sans",
          backgroundColor: theme("colors.primary.300"),
        },
        a: {
          textDecoration: "none",
          cursor: "pointer",
          color: "inherit",
          display: "block",
        },
        ul: {
          listStyle: "none",
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
        "video,canvas,svg": {
          display: "block",
          maxWidth: "100%",
        },
        "p,h1,h2,h3,h4,h5,h6": {
          overflowWrap: "break-word",
        },
        button: {
          cursor: "pointer",
          outline: "none",
          border: "none",
          backgroundColor: "transparent",
        },
        'input[type="text"]': {
          outline: "none",
          border: "none",
          backgroundColor: "transparent",
          padding: "1rem",
        },
        "#root , #app": {
          height: "100%",
        },
        "::placeholder": {
          color: "#9DA0AE",
        },
        "::-webkit-scrollbar": {
          width: "1rem",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#37a5ce",
          borderRadius: "1.25rem",
          border: "0.1875rem solid transparent",
          backgroundClip: "content-box",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "#070c12",
        },
      });
      addComponents({
        ".btn": {
          padding: ".75rem 5rem",
          borderRadius: theme("borderRadius.full"),
          cursor: "pointer",
          transition: "all 0.3s ease",
          fontFamily: "Raleway",
        },
      });
      addUtilities({
        ".flex-cc": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".flex-bc": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
        ".flex-cc-col": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          "flex-direction": "column",
        },
        ".flex-bc-col": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
          "flex-direction": "column",
        },
        ".flex-s-col": {
          display: "flex",
          "align-items": "flex-start",
          "flex-direction": "column",
        },
        ".flex-b-start": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "flex-start",
        },
      });
      matchUtilities(
        {
          "grid-dynamic": (value) => {
            return {
              "grid-template-columns": `repeat(auto-fit, minmax(min(${value},100%) , 1fr))`,
            };
          },
        },
        {
          values: [
            "0px",
            "200px",
            "250px",
            "300px",
            "350px",
            "400px",
            "450px",
            "500px",
            "550px",
            "600px",
            "650px",
          ],
        }
      );
    }),
  ],
};
