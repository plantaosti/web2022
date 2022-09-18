/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
      gridTemplateColumns: {
        16: "repeat(2, 1fr)",
      },
      screens: {
        mobile: "320px",
      },
      colors: {
        green: {
          100: "#37c77f",
          200: "#00c7c7",
          300: "#15c3d6",
          400: "#29b6d1",
          500: "#0089A5",
          600: "#0088a3",
        },
        yellow: {
          600: "#8d734b",
        },
        gray: {
          100: "#f5f8fa",
          200: "#d3e2e5",
          300: "#8FA7B2",
          400: "#4d6f80",
          500: "#5c8599",
          600: "#bfbfbf",
          700: "#676c6f",
        },
        black: {
          200: "#1b1f22",
        },

        red: {
          100: "#FFE4EE",
        },
      },
    },
  },
  plugins: [],
};
