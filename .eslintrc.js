module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    eqeqeq: "error",
    "decorator-validity": "off", // Add this line
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-console": "warn",
    "no-debugger": "warn",
    "no-empty": "warn",
    "no-constant-condition": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/array-type": ["error", { default: "array" }],
    "dot-notation": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-duplicates": "error",
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
};
