import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Define your color palette for dark mode
        dark: {
          primary: "#333333",
          secondary: "#444444",
        },
        light: {
          bg: "#c0a99d",
          bgLight: "#E9DFD9",
          highlight: "#73000D",
          secondary: "rgb(220, 166, 133)",
          primary: "rgb(252, 238, 226)",
        },
      },
    },
  },
  plugins: [],
}
export default config;
