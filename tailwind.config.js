/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        'luckiest-guy': ['var(--font-luckiest-guy)', 'sans-serif'],
      },
      backgroundImage: {
        'cloud-background': "url('/images/background-clouds.jpg')",
      },
    },
  },
  plugins: [],
};