/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        grad: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        grad: 'grad 5s ease infinite', // Duration of 5 seconds, ease transition, infinite loop
      },
      backgroundSize: {
        '800': '800% 800%', // Defining custom background size (800% 800%)
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(270deg, #f23d14, #14f21c, #148ef2, #f2c614)',
      },
    },
  },
  plugins: [],
}
