const path = require("path");

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "workflow.js",
    path: path.resolve(__dirname, "app"),
  },
  mode: "development",
  watch: true,
  // Why is my linter creating trailing commas?
};
