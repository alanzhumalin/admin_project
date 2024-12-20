

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite', 
      },
      keyframes: {
        spin: {
          to: {
            transform: 'rotate(360deg)', 
          },
        },
      },
    },
  },
  plugins: [],
};