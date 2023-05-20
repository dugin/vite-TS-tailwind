module.exports = {
  env: { browser: true, es2020: true, "vitest-globals/env": true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:vitest/recommended",
    "plugin:vitest-globals/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "vitest"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
};
