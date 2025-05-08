// tailwind.config.js
module.exports = {
  darkMode: 'class',                        // ← enable class‑based dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}',           // ← scan your React files
    './public/index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
