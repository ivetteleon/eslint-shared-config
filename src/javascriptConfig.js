const { defineConfig } = require("eslint/config");
const globals = require("globals");
const js = require("@eslint/js");

module.exports = defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
      globals: globals.node,
    },
    plugins: {
      js,
    },
    extends: ["js/recommended"],
    rules: {
      semi: ["error", "never"],
    },
  },
]);
