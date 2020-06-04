const path = require("path");

module.exports = {
  entry: "./scripts/App.js",
  output: {
    filename: "workflow.js",
    path: path.resolve(__dirname, "app"),
  },
  mode: "development",
  // Why is my linter creating trailing commas?
};
