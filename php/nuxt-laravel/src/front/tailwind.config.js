/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],  
  mode: "jit",
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

