/** @type {import("eslint").Linter.Config} */
const config = {
  env: {
    es2022: true,
    node: true,
    browser: true,
  },

  globals: {
    React: "writable",
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  plugins: ["@typescript-eslint", "import", "unused-imports"],
  extends: [
    "turbo",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@next/next/core-web-vitals",
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: { project: true },

  rules: {
    "no-unused-vars": "off",
    "no-irregular-whitespace": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports", fixStyle: "separate-type-imports" },
    ],
    "@typescript-eslint/no-misused-promises": [
      2,
      { checksVoidReturn: { attributes: false } },
    ],
    "@typescript-eslint/require-await": "off",

    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],

    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],

    "turbo/no-undeclared-env-vars": "off",

    "react/prop-types": "off",

    "@next/next/no-html-link-for-pages": "off",
  },

  ignorePatterns: [
    "**/*.config.js",
    "**/*.config.cjs",
    "**/.eslintrc.cjs",
    "**/.eslintrc.mdx",
    ".next",
    "dist",
    "bun.lockb",
  ],

  reportUnusedDisableDirectives: true,
};

module.exports = config;
