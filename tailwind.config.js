module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  // ...
  theme: {
    extend: {
      maxWidth: {
        '128': '32rem',
      },
      minWidth: {
        '128': '32rem',
      }
    }
  }
};
