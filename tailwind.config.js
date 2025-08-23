/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "schibstedGrotesk": ["var(--schibstedGrotesk)"]
      }
    },
  },
  plugins: [require("rippleui")],
  rippleui: {
    themes: [
      {
        themeName: "dark",
        colorScheme: "dark",
        colors: {
          primary: "#06b6d4",
          secondary: "#3b82f6",
        },
      },
      {
        themeName: "light", 
        colorScheme: "light",
        colors: {
          primary: "#06b6d4",
          secondary: "#3b82f6",
        },
      },
    ],
  },
}