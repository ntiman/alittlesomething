/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  // configure the purge option with the paths to all of your pages and components so Tailwind can tree-shake unused styles in production builds
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: false,
};
