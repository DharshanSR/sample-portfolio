/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {},  // Add this if you use @import in your CSS files
    tailwindcss: {},       // Tailwind CSS plugin
    autoprefixer: {},      // Autoprefixer plugin for adding vendor prefixes
  },
};

export default config;
