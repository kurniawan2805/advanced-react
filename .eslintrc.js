module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react-hooks"],
  rules: {
    // You can do your customizations here...
    // For example, if you don't want to use the prop-types package,
    // you can turn off that recommended rule with: 'react/prop-types': ['off']
    // "react-hooks/prop-types": ["off"]
    // "react/display-name": ["off"],
    // "react/no-unescaped-entities": ["off"],
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-console": [
      "warn",
      { allow: ["clear", "info", "error", "dir", "trace"] }
    ],
    curly: "error",
    "no-else-return": "error",
    "no-unneeded-ternary": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "one-var": ["error", "never"],
    "prefer-arrow-callback": "error",
    strict: "error",
    "symbol-description": "error",
    yoda: ["error", "never", { exceptRange: true }]
  }
};
