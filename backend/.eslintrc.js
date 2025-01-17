module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    eqeqeq: "error",
    "no-duplicate-imports": "error",
    "no-extra-parens": "error",
    "no-useless-catch": "off"
  },
};
