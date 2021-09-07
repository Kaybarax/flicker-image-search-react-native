module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "react-native/no-inline-styles": 0,
  },
};
