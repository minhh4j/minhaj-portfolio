export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#FFD700", // Vibrant yellow
        secondary: "#121212", // Deep black
        accent: "#FFE55C", // Lighter yellow for accents
        light: "#F5F5F5", // Light background
        dark: "#0A0A0A", // Dark background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}