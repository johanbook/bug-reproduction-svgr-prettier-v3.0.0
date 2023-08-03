module.exports = {
  arrowParens: "avoid",
  bracketSpacing: true,
  jsxSingleQuote: true,
  printWidth: 80,
  proseWrap: "always",
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  useTabs: false,
  endOfLine: "auto",
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@DDComponents/(.*)$",
    "^@DDTypes/(.*)$",
    "^@DDUtils/(.*)$",
    "^@DDStore/(.*)$",
    "^@DDViews/(.*)$",
    "^@DDAssets/(.*)$",
    "^[./]"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  // Needed for plugins to work with pnpm
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-tailwindcss")
  ]
};
