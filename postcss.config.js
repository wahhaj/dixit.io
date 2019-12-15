const purgeCSS = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.tsx", "./src/components/**/*.css", "./src/index.css", "./public/index.html"],
  // Include any special characters you"re using in this regular expression
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  whitelistPatterns: [/^text-\w+-500/, /^border-\w+-500/, /^bg-\w+-400/, /^bg-\w+-100/],
})

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgeCSS] : []),
  ],
}
