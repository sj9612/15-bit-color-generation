// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Add custom column count for 128 columns
        '512': 'repeat(512, minmax(0, 1fr))',
        '256': 'repeat(256, minmax(0, 1fr))',
        '128': 'repeat(128, minmax(0, 1fr))',
        '64': 'repeat(64, minmax(0, 1fr))',
        '32': 'repeat(32, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
